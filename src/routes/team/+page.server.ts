import type { PageServerLoad } from './$types';
import { getTeamMembers } from '$lib/server/teamMembers';

export const load = (async () => {
	return {
		members: getTeamMembers()
	};
}) satisfies PageServerLoad;
