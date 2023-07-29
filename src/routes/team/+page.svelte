<script>
  import { generateTitle } from "$lib/titleGenerator";
  import HeroWithTitleAndSlogan from "../../components/Common/HeroWithTitleAndSlogan.svelte";
</script>

<svelte:head>
  <title>{generateTitle("Das Team")}</title>
</svelte:head>

<HeroWithTitleAndSlogan img="/img/team/hero.jpg">Das Cubyx Team</HeroWithTitleAndSlogan>
