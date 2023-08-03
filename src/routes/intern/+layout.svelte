<script>
  import { generateTitle } from "$lib/titleGenerator";
  import InternNavBar from "../../components/Intern/InternNavBar.svelte";
</script>

<svelte:head>
  <title>{generateTitle("Intern")}</title>
</svelte:head>

<InternNavBar />

<div class="p-8">
  <slot />
</div>
