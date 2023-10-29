<script lang="ts">
	import type { TeamMember, TeamMemberLabel } from '@prisma/client';
	import { Icon } from 'svelte-awesome';
	import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';
	import TeamMemberLabelComponent from './TeamMemberLabel.svelte';

	export let teamMember: Omit<TeamMember, 'avatar'>;
	export let labels: TeamMemberLabel[];
</script>

<div class="card rounded-box bg-secondary">
	<figure>
		<img
			src="/api/teamMember/avatar/{teamMember.id}"
			alt="Avatar von {teamMember.name}"
			class="w-full"
		/>
	</figure>
	<div class="card-body">
		<div class="flex flex-wrap gap-1">
			{#each labels as label}
				<TeamMemberLabelComponent {label} />
			{/each}
		</div>
		<h2 class="card-title w-full break-all">{teamMember.name}</h2>
		<span class="flex items-center gap-2 text-neutral">
			<Icon data={faDiscord} />
			<p class="w-full text-sm">{teamMember.discord}</p>
		</span>
	</div>
</div>
