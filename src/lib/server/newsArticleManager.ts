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

		for (const fetchedMarkdownFile of fetchedMarkdownFiles) {
			try {
				const parsed = parseMD(fetchedMarkdownFile);

				const content = parsed.content;
				const parsedMetadata = parsed.metadata as {
					id: string;
					title: string;
					date: string;
					thumbnail: string;
					author: string;
				};

				const metadata = {
					id: parsedMetadata.id.toString(),
					title: parsedMetadata.title.toString(),
					date: parsedMetadata.date.toString(),
					thumbnail: parsedMetadata.thumbnail.toString(),
					author: parsedMetadata.author.toString()
				};

				if (await prisma.article.findUnique({ where: { id: metadata.id } })) {
					await prisma.article.update({
						where: { id: metadata.id },
						data: {
							title: metadata.title,
							createdAt: new Date(metadata.date),
							thumbnail: metadata.thumbnail,
							author: metadata.author,
							content: Buffer.from(content).toString('base64')
						}
					});
				} else {
					await prisma.article.create({
						data: {
							id: metadata.id,
							title: metadata.title,
							createdAt: new Date(metadata.date),
							thumbnail: metadata.thumbnail,
							author: metadata.author,
							content: Buffer.from(content).toString('base64')
						}
					});
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
	});
}
