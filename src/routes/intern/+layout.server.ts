import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async (event) => {
	const session = await event.locals.getSession();

	if (!session) {
		if (event.url.pathname !== '/intern/login') throw redirect(302, '/intern/login');
	}

	return {
		session: await event.locals.getSession()
	};
};
