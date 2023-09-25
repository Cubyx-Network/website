<script lang="ts">
	import { generateTitle } from '$lib/titleGenerator';
	import HeroWithTitleAndSlogan from '../../components/Common/HeroWithTitleAndSlogan.svelte';
	import TeamMember from '../../components/Team/TeamMemberCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{generateTitle('Das Team')}</title>
</svelte:head>

<HeroWithTitleAndSlogan img="/img/team/hero.jpg">Das Cubyx Team</HeroWithTitleAndSlogan>

<div
	class="m-auto grid w-full grid-cols-1 gap-8 p-8 sm:grid-cols-3 lg:grid-cols-4 2xl:w-[80%] 2xl:grid-cols-5"
>
	{#each data.members as member, i}
		<TeamMember teamMember={member} />
	{/each}
</div>
