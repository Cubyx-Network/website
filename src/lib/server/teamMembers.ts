import { DISCORD_TEAM_ROLE_ID } from '$env/static/private';
import { log } from 'console';
import { downloadAvatar, requestDiscordAPI } from './discord';
import prisma from './prisma';

async function fetchAll(): Promise<void> {
	log('Fetching team members...');
	const response = await requestDiscordAPI('/guilds/665917454626717746/members?limit=1000');
	const teamMembers: any[] = response.filter((m: any) => m.roles.includes(DISCORD_TEAM_ROLE_ID));

	const lastSync = new Date();

	for (const member of teamMembers) {
		try {
			const avatarBlob = await downloadAvatar(member.user.id, member.user.avatar);

			await prisma.teamMember.upsert({
				where: { id: member.user.id },
				update: {
					name: member.nick || member.user.global_name,
					avatar: Buffer.from(await avatarBlob.arrayBuffer()),
					lastSync,
					discord: `${member.user.username}${
						member.user.discriminator !== '0' ? '#' + member.user.discriminator : ''
					}`
				},
				create: {
					id: member.user.id,
					name: member.nick || member.user.global_name,
					avatar: Buffer.from(await avatarBlob.arrayBuffer()),
					discord: `${member.user.username}${
						member.user.discriminator !== '0' ? '#' + member.user.discriminator : ''
					}`,
					lastSync,
					createdAt: lastSync
				}
			});
		} catch (error) {
			console.error(error);
		}
	}

	await prisma.teamMember.deleteMany({
		where: {
			lastSync: {
				lt: lastSync
			}
		}
	});
}

async function checkForStale() {
	const members = await prisma.teamMember.findMany();
	const stale = members.filter((m) => m.lastSync < new Date(Date.now() - 1000 * 60 * 60 * 24)); // 24 hours
	if (stale.length > 0) await fetchAll();
}

export async function getTeamMembers(): Promise<any[]> {
	await checkForStale();
	return await prisma.teamMember.findMany({
		select: {
			id: true,
			name: true,
			avatar: false,
			createdAt: true,
			lastSync: true,
			discord: true
		}
	});
}
