import { CUBYX_GUILD_ID, CUBYX_NOXU_ROLE_ID } from '$env/static/private';

export async function isNoxu(token: string): Promise<boolean> {
	const guildMember = await fetch(
		`https://discord.com/api/v10/users/@me/guilds/${CUBYX_GUILD_ID}/member`,
		{
			headers: {
				Authorization: `Bearer ${token}`
			}
		}
	);

	if (guildMember.status !== 200) {
		return false;
	}

	const guildMemberJSON = await guildMember.json();
	return guildMemberJSON.roles.includes(CUBYX_NOXU_ROLE_ID);
}
