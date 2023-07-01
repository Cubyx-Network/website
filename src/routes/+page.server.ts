import type { PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';
import { fetchAllArticles } from '$lib/server/newsArticleManager';

export const load = (async () => {
	const articles = await prisma.article.findMany();

	if (!articles) {
		return {
			articles: []
		};
	}

	return {
		articles
	};
}) satisfies PageServerLoad;
