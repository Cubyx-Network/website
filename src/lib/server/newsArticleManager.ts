import { downloadFilesFromMinio, minio } from '$lib/server/minio';
import { MINIO_BUCKET } from '$env/static/private';
import parseMD from 'parse-md';
import prisma from '$lib/server/prisma';

export async function fetchAllArticles() {
	const fetchedFilesStream = minio.listObjectsV2(MINIO_BUCKET, 'news/', true);
	const fetchedFiles: string[] = [];
	fetchedFilesStream.on('data', function (obj) {
		fetchedFiles.push(obj.name);
	});

	fetchedFilesStream.on('end', async function () {
		const fetchedMarkdownFiles = await downloadFilesFromMinio(fetchedFiles);

		const ids = [];

		for (const fetchedMarkdownFile of fetchedMarkdownFiles) {
			try {
				const parsed = parseMD(fetchedMarkdownFile);

				const content = parsed.content;
				const parsedMetadata = parsed.metadata as {
					id: string;
					title: string;
					date: string;
					thumbnail: string;
					tags: string[];
					author: string;
				};

				const metadata = {
					id: parsedMetadata.id.toString().toLowerCase().replaceAll(' ', '-'),
					title: parsedMetadata.title ? parsedMetadata.title.toString() : 'Kein Titel vorhanden',
					date: parsedMetadata.date
						? parsedMetadata.date.toString()
						: new Date().toLocaleDateString(),
					thumbnail: parsedMetadata.thumbnail ? parsedMetadata.thumbnail.toString() : '#',
					tags: parsedMetadata.tags
						? removeDuplicates(
								parsedMetadata.tags.toString().toLowerCase().replaceAll(' ', '').split(',')
						  )
						: [],
					author: parsedMetadata.author ? parsedMetadata.author.toString() : 'Unbekannt'
				};

				const art = await prisma.article.findUnique({
					where: { id: metadata.id },
					include: { tags: { include: { articles: true } } }
				});

				if (art) {
					const oldTags = art.tags;
					const newTags = metadata.tags;

					const tagsToDelete = oldTags.filter((tag) => !newTags.includes(tag.name));
					const tagsToCreate = newTags.filter(
						(tag) => !oldTags.map((tag) => tag.name).includes(tag)
					);

					for (const tag of tagsToDelete) {
						await prisma.article.update({
							where: { id: metadata.id },
							data: {
								tags: {
									disconnect: { name: tag.name }
								}
							}
						});

						if (tag.articles.length === 1) {
							await prisma.tag.delete({
								where: { name: tag.name }
							});
						}
					}

					await prisma.article.update({
						where: { id: metadata.id },
						data: {
							title: metadata.title,
							createdAt: new Date(metadata.date),
							thumbnail: metadata.thumbnail,
							author: metadata.author,
							tags: {
								connectOrCreate: tagsToCreate.map((tag) => ({
									where: { name: tag },
									create: { name: tag }
								}))
							},
							content: Buffer.from(content).toString('base64')
						}
					});

					ids.push(metadata.id);
				} else {
					await prisma.article.create({
						data: {
							id: metadata.id,
							title: metadata.title,
							createdAt: new Date(metadata.date),
							thumbnail: metadata.thumbnail,
							author: metadata.author,
							tags: {
								connectOrCreate: metadata.tags.map((tag) => ({
									where: { name: tag },
									create: { name: tag }
								}))
							},
							content: Buffer.from(content).toString('base64')
						}
					});

					ids.push(metadata.id);
				}
			} catch (e) {
				console.log(
					`Error while parsing article ${
						fetchedFiles[fetchedMarkdownFiles.indexOf(fetchedMarkdownFile)]
					}`
				);
				console.log(e);
			}
		}

		const articles = await prisma.article.findMany({
			include: { tags: { include: { articles: true } } }
		});
		for (const article of articles) {
			if (!ids.includes(article.id)) {
				// Delete article and all tags that are not connected to any other article
				await prisma.article.delete({
					where: { id: article.id }
				});

				for (const tag of article.tags) {
					if (tag.articles.length === 1) {
						await prisma.tag.delete({
							where: { name: tag.name }
						});
					}
				}
			}
		}
	});
}

function removeDuplicates(array: string[]) {
	return array.filter((a, b) => array.indexOf(a) === b);
}
