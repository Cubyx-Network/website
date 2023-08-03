import { SvelteKitAuth } from '@auth/sveltekit';
import type { Handle } from '@sveltejs/kit';
import Discord from '@auth/core/providers/discord';
import { isNoxu } from '$lib/server/discord/guilds';

export const handle = SvelteKitAuth(async (event) => {
	return {
		providers: [
			Discord({
				clientId: import.meta.env.VITE_DISCORD_CLIENT_ID,
				clientSecret: import.meta.env.VITE_DISCORD_CLIENT_SECRET,
				authorization:
					'https://discord.com/api/oauth2/authorize?scope=identify+email+guilds.members.read'
			})
		],
		secret: import.meta.env.VITE_AUTH_SECRET,
		trustHost: true,
		callbacks: {
			async signIn({ account }) {
				if (!account) return false;
				return await isNoxu(account?.access_token ?? '');
			}
		},
		pages: {
			signIn: '/intern',
			error: '/intern'
		}
	};
}) satisfies Handle;
