import type { PageServerLoad } from "./$types";
import prisma from "$lib/server/prisma";

export const load = (async () => {
	const articles = await prisma.article.findMany({
		orderBy: {
			createdAt: 'desc'
		},
		include: {
			tags: true
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
