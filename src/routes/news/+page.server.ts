import type { PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';

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
