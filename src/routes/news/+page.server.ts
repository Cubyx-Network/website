import type { PageServerLoad } from "./$types";
import prisma from "$lib/server/prisma";
import { fetchAllArticles } from "$lib/server/newsArticleManager";

export const load = (async () => {
	const articles = await prisma.article.findMany({
		orderBy: {
			createdAt: 'desc'
		},
		include: {
			tags: true
		}
	});

	const tags = await prisma.tag.findMany({
		include: {
			articles: {
				include: {
					tags: true
				}
			}
		}
	});

	fetchAllArticles().then(() => console.log('Fetched articles from Minio'));

	if (!articles) {
		return {
			articles: [],
			tags: tags || []
		};
	}

	return {
		articles,
		tags: tags || []
	};
}) satisfies PageServerLoad;
