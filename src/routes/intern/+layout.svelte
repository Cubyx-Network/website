<script>
	import { generateTitle } from '$lib/titleGenerator';
</script>

<svelte:head>
	<title>{generateTitle('Intern')}</title>
</svelte:head>

<slot />
