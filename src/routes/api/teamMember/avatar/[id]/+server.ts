import prisma from '$lib/server/prisma';
import { error } from 'console';
import type { RequestHandler } from './$types';
import { redirect } from '@sveltejs/kit';

export const GET: RequestHandler = async (request) => {
	const { id } = request.params;

	const teamMember = await prisma.teamMember.findFirst({
		where: { id: id as string },
		select: { avatar: true }
	});

	if (!teamMember) throw error("Team member doesn't exist", { status: 404 });

	if (teamMember.avatar.length == 0) {
		throw redirect(302, '/img/logo/netzwerk.png');
	}

	return new Response(teamMember.avatar, {
		status: 200,
		headers: {
			'Content-Type': 'image/png'
		}
	});
};
