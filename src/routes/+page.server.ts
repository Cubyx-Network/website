import type { PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';

export const load = (async () => {
	const articles = await prisma.article.findMany({
		orderBy: {
			createdAt: 'desc'
		}
	});

	if (!articles) {
		return {
			articles: []
		};
	}

	return {
		articles
	};
}) satisfies PageServerLoad;
