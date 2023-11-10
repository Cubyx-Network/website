<script lang="ts">
	import HeroWithTitleAndSlogan from '../../components/Common/HeroWithTitleAndSlogan.svelte';
	import TeamMember from '../../components/Team/TeamMemberCard.svelte';
	import type { PageData } from './$types';
	import { metadata } from '$lib/seo';

$metadata = {
	title: 'Das Team',

	openGraph: {
		title: 'Das Team',
		description: 'Aktuelle Teammitglieder des Cubyx Teams.',
	}
};

	export let data: PageData;
</script>

<HeroWithTitleAndSlogan img="/img/team/hero.jpg">Das Cubyx Team</HeroWithTitleAndSlogan>

<div
	class="m-auto grid w-full grid-cols-1 gap-8 p-8 sm:grid-cols-3 lg:grid-cols-4 2xl:w-[80%] 2xl:grid-cols-5"
>
	{#each data.members as member}
		<TeamMember teamMember={member} />
	{/each}
</div>
