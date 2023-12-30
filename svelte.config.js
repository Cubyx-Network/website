import adapter from '@sveltejs/adapter-node';
import netlifyAdapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: process.env.NETLIFY
			? netlifyAdapter({
					edge: false
				})
			: adapter()
	}
};

export default config;
