<script lang="ts">
	import HeroWithTitleAndSlogan from '../../components/Common/HeroWithTitleAndSlogan.svelte';
	import TeamMember from '../../components/Team/TeamMemberCard.svelte';
	import type { PageData } from './$types';
	import Seo from '../../components/Common/Seo.svelte';

	export let data: PageData;
</script>

<Seo title="Das Team" description="Aktuelle Teammitglieder des Cubyx Teams." />

<HeroWithTitleAndSlogan img="/img/team/hero.jpg">Das Cubyx Team</HeroWithTitleAndSlogan>

<div class="m-auto grid w-full grid-cols-1 gap-8 p-8 lg:grid-cols-2 2xl:w-[80%]">
	{#each data.members as member}
		<TeamMember teamMember={member} labels={member.labels} />
	{/each}
</div>
