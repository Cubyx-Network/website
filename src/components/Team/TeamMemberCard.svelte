<script lang="ts">
	import type { TeamMember } from '@prisma/client';
	import { Icon } from 'svelte-awesome';
	import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';

	export let teamMember: Omit<TeamMember, 'avatar'>;
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
		<h2 class="card-title w-full break-all">{teamMember.name}</h2>
		<span class="flex items-center gap-2 text-neutral">
			<Icon data={faDiscord} />
			<p class="w-full text-sm">{teamMember.discord}</p>
		</span>
	</div>
</div>
