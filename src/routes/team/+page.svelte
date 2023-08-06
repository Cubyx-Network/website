<script lang="ts">
	import { generateTitle } from '$lib/titleGenerator';
	import HeroWithTitleAndSlogan from '../../components/Common/HeroWithTitleAndSlogan.svelte';
	import SectionSpacer from '../../components/Common/SectionSpacer.svelte';
	import TeamMember from '../../components/Team/TeamMemberCard.svelte';
	import TeamOverviewCard from '../../components/Team/TeamOverviewCard.svelte';
	import TeamOverviewGroup from '../../components/Team/TeamOverviewGroup.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{generateTitle('Das Team')}</title>
</svelte:head>

<HeroWithTitleAndSlogan img="/img/team/hero.jpg">Das Cubyx Team</HeroWithTitleAndSlogan>

<div class="m-auto w-full space-y-24 p-8 2xl:w-[90%]">
	<div class="w-full space-y-10">
		{#each data.statuses as status}
			<div class="space-y-4">
				<TeamOverviewGroup>
					{status.name}
				</TeamOverviewGroup>

				<div class="m-auto grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
					{#each status.members as member}
						<TeamOverviewCard teamMember={member} />
					{/each}
				</div>
			</div>
		{/each}
	</div>

	<SectionSpacer />

	<div class="w-full space-y-8">
		{#each data.members as member, i}
			<TeamMember teamMember={member} reverse={i % 2 === 0} />
		{/each}
	</div>
</div>
