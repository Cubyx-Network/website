<script lang="ts">
	import { Icon } from 'svelte-awesome';
	import type { FaIconDefinition } from 'svelte-awesome/components/Icon.svelte';

	export let icon: FaIconDefinition;
	export let href: string;
</script>

<a {href} target="_blank">
	<Icon data={icon} class="h-6 w-auto text-[2em] text-base-content md:h-8 lg:h-12" />
</a>
