import type { PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';

export const load = (async () => {
	return {
		members: await prisma.teamMember.findMany({
			include: {
				subunits: true,
				status: true
			}
		}),
		statuses: await prisma.teamMemberStatus.findMany({
			include: {
				members: true
			}
		})
	};
}) satisfies PageServerLoad;
