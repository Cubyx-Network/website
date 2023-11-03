import { DISCORD_BOT_TOKEN } from '$env/static/private';

const base = 'https://discord.com/api/v10';

export async function requestDiscordAPI(endpoint: string, options: RequestInit = {}) {
	return await fetch(`${base}/${endpoint}`, {
		headers: {
			Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
			'Content-Type': 'application/json',
			...options.headers
		},
		...options
	});
}

export async function downloadAvatar(userId: string, avatarId: string): Promise<Blob> {
	const response = await fetch(
		`https://cdn.discordapp.com/avatars/${userId}/${avatarId}.png?size=512`
	);
	return await response.blob();
}
