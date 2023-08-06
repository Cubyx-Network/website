import prisma from '$lib/server/prisma';
import { error, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

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

export const actions: Actions = {
	deleteTeamMember: async ({ locals, request }) => {
		const session = await locals.getSession();
		if (!session) throw error(404);

		const form = await request.formData();

		const memberId = form.get('memberId') as string;

		try {
			await prisma.teamMember.delete({
				where: {
					id: memberId
				}
			});
		} catch (e) {
			console.log(e);
			throw error(500, 'Nope.');
		}

		throw redirect(302, `/intern/dashboard/teamMember`);
	}
};
