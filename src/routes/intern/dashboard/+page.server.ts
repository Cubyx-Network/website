import type { PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';

export const load = (async () => {
	const teamMembers = await prisma.teamMember.findMany({
		include: {
			subunits: true,
			leaderOf: true,
			status: true
		}
	});

	return {
		teamMembers
	};
}) satisfies PageServerLoad;
