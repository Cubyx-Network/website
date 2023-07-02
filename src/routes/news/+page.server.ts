import type { PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';
import { fetchAllArticles } from '$lib/server/newsArticleManager';

export const load = (async () => {
	const articles = await prisma.article.findMany({
		orderBy: {
			createdAt: 'desc'
		}
	});

	fetchAllArticles().then(() => console.log('Fetched articles from Minio'));

	if (!articles) {
		return {
			articles: []
		};
	}

	return {
		articles
	};
}) satisfies PageServerLoad;
