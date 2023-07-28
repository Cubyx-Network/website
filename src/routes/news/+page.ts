import { browser } from '$app/environment';
import type { PageLoad } from './$types';
import { filter as filterStore } from '$lib/stores/newsStore';

export const load = (async ({ url }) => {
	if (!browser) return {};

	const filterParam = url.searchParams.get('filter');
	const filter = filterParam ? filterParam.split(' ') : [];

	filterStore.set(filter);
}) satisfies PageLoad;
