<script lang="ts">
  import { generateTitle } from "$lib/titleGenerator";
  import HeroWithTitleAndSlogan from "../../components/Common/HeroWithTitleAndSlogan.svelte";
  import TeamMember from "../../components/Team/TeamMemberCard.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>{generateTitle("Das Team")}</title>
</svelte:head>

<HeroWithTitleAndSlogan img="/img/team/hero.jpg">Das Cubyx Team</HeroWithTitleAndSlogan>

<div class="w-full p-8 m-auto space-y-8 2xl:w-[70%]">
  {#each data.members as member, i}
    <TeamMember teamMember={member} reverse={i % 2 === 0} />
  {/each}
</div>
