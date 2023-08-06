import prisma from '$lib/server/prisma';
import { error, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ params, parent }) => {
	await parent();

	const statuses = await prisma.teamMemberStatus.findMany();

	const member = await prisma.teamMember.findUnique({
		where: {
			id: params.memberId
		},
		include: {
			status: true
		}
	});

	return { statuses, member };
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ locals, request, params }) => {
		const session = await locals.getSession();
		if (!session) throw error(404);

		const form = await request.formData();

		const name = form.get('name') as string;
		const intro = form.get('intro') as string;
		const avatar = form.get('avatar');
		const youtube = form.get('youtube');
		const mastodon = form.get('mastodon');
		const discord = form.get('discord');
		const twitch = form.get('twitch');
		const reddit = form.get('reddit');
		const github = form.get('github');
		const statusId = form.get('status') as string;

		if (avatar && !avatar.toString().includes('cdn.cubyx.eu')) {
			return {
				error: 'Der Avatar muss auf cdn.cubyx.eu liegen. Siehe #send-to-cdn im Discord.'
			};
		}

		try {
			await prisma.teamMember.update({
				where: {
					id: params.memberId
				},
				data: {
					name,
					intro,
					avatar: avatar ? avatar.toString() : undefined,
					youtube: youtube ? youtube.toString() : undefined,
					mastodon: mastodon ? mastodon.toString() : undefined,
					discord: discord ? discord.toString() : undefined,
					twitch: twitch ? twitch.toString() : undefined,
					reddit: reddit ? reddit.toString() : undefined,
					github: github ? github.toString() : undefined,
					statusId
				}
			});
		} catch (e) {
			console.log(e);
			throw error(500, 'Nope.');
		}

		throw redirect(302, `/intern/dashboard/teamMember/`);
	}
};
