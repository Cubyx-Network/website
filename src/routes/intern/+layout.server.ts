import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const session = await event.locals.getSession();

	if (!session) {
		if (event.url.pathname !== '/intern') throw redirect(302, '/intern');
	}

	return {
		session: await event.locals.getSession()
	};
};