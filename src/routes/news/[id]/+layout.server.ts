import type { LayoutServerLoad } from './$types';
import prisma from '$lib/server/prisma';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
	const article = await prisma.article.findUnique({
		where: {
			id: params.id
		},
		include: {
			tags: true
		}
	});

	if (!article) {
		throw error(404, 'Artikel konnte nicht gefunden werden.');
	}

	await prisma.article.update({
		where: {
			id: params.id
		},
		data: {
			clicks: {
				increment: 1
			}
		}
	});

	return {
		article
	};
}) satisfies LayoutServerLoad;
