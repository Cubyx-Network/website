import type { PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';

export const load = (async () => {
	const test = await prisma.teamMember.findMany({
		include: {
			subunits: true,
			status: true
		}
	});

	return {
		members: await prisma.teamMember.findMany({
			include: {
				subunits: true,
				status: true
			}
		})
	};
}) satisfies PageServerLoad;
