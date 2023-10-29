<script lang="ts">
	import type { TeamMemberLabel } from '@prisma/client';
	import { twMerge } from 'tailwind-merge';

	export let label: TeamMemberLabel;
</script>

<div class={twMerge(`badge badge-primary`, label.bordered && `badge-outline`)}>
	{label.name}
</div>
