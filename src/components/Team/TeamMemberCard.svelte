<script lang="ts">
	import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';
	import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
	import { faMastodon } from '@fortawesome/free-brands-svg-icons/faMastodon';
	import { faReddit } from '@fortawesome/free-brands-svg-icons/faReddit';
	import { faTwitch } from '@fortawesome/free-brands-svg-icons/faTwitch';
	import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
	import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons/faPeopleRoof';
	import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
	import type { Subunit, TeamMember, TeamMemberStatus } from '@prisma/client';
	import { twMerge } from 'tailwind-merge';
	import Badge from '../Common/Badge.svelte';
	import TeamMemberCardSocialMedia from './TeamMemberCardSocialMedia.svelte';

	export let reverse = false;
	export let teamMember: { subunits: Subunit[]; status: TeamMemberStatus } & TeamMember;
</script>

<div
	id={teamMember.id}
	class="w-full grid-cols-2 items-center justify-items-center space-y-4 lg:grid"
>
	<div class={twMerge('avatar flex items-center justify-center', reverse ? 'order-2' : undefined)}>
		<div class="w-1/2 max-w-lg rounded-full">
			<img src={teamMember.avatar ?? '/img/logo/netzwerk.png'} alt="Avatar von {teamMember.name}" />
		</div>
	</div>

	<div class={twMerge('card w-full max-w-3xl bg-secondary', reverse ? 'order-1' : undefined)}>
		<div class="card-body space-y-4">
			<div class="card-title">
				<h2 class="flex items-center gap-4">
					{teamMember.name}
					<Badge icon={faUser} color="neutral">{teamMember.status.name}</Badge>
				</h2>
			</div>

			<div class="flex flex-wrap gap-1">
				{#each teamMember.subunits as subunit}
					<Badge icon={faPeopleRoof}>{subunit.name}</Badge>
				{/each}
			</div>

			<p>
				{teamMember.intro}
			</p>

			<div class="flex w-full grid-cols-2 flex-col gap-1 lg:grid">
				{#if teamMember.mastodon}
					<TeamMemberCardSocialMedia icon={faMastodon}
						>{teamMember.mastodon}</TeamMemberCardSocialMedia
					>
				{/if}

				{#if teamMember.youtube}
					<TeamMemberCardSocialMedia icon={faYoutube}
						>{teamMember.youtube}</TeamMemberCardSocialMedia
					>
				{/if}

				{#if teamMember.github}
					<TeamMemberCardSocialMedia icon={faGithub}>{teamMember.github}</TeamMemberCardSocialMedia>
				{/if}

				{#if teamMember.reddit}
					<TeamMemberCardSocialMedia icon={faReddit}>{teamMember.reddit}</TeamMemberCardSocialMedia>
				{/if}

				{#if teamMember.twitch}
					<TeamMemberCardSocialMedia icon={faTwitch}>{teamMember.twitch}</TeamMemberCardSocialMedia>
				{/if}

				{#if teamMember.discord}
					<TeamMemberCardSocialMedia icon={faDiscord}
						>{teamMember.discord}</TeamMemberCardSocialMedia
					>
				{/if}
			</div>
		</div>
	</div>
</div>
