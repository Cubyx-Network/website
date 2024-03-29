import { DISCORD_CUBYX_GUILD, DISCORD_TEAM_ROLE_ID } from '$env/static/private';
import type { TeamMember, TeamMemberLabel } from '@prisma/client';
import { downloadAvatar, requestDiscordAPI } from './discord';
import prisma from './prisma';

async function fetchAll(): Promise<void> {
	const response = await requestDiscordAPI(`guilds/${DISCORD_CUBYX_GUILD}/members?limit=1000`);

	if (!response.ok) {
		throw new Error(
			`Discord API returned ${response.status} ${response.statusText} (${response.url})`
		);
	}

	const json = await response.json();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const teamMembers: any[] = json.filter((m: any) => m.roles.includes(DISCORD_TEAM_ROLE_ID));

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

	try {
		if (stale.length < 0 || members.length == 0) await fetchAll();
	} catch (error) {
		console.error(error);
	}
}

type TeamMemberWithLabels = Omit<TeamMember, 'avatar'> & { labels: TeamMemberLabel[] };

export async function getTeamMembers(): Promise<TeamMemberWithLabels[]> {
	await checkForStale();
	return await prisma.teamMember.findMany({
		select: {
			id: true,
			name: true,
			avatar: false,
			createdAt: true,
			lastSync: true,
			discord: true,
			labels: true
		}
	});
}
