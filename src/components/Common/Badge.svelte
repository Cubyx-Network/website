<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
	import { Icon } from 'svelte-awesome';

	export let icon: IconDefinition | undefined = undefined;
	export let color = 'primary';
</script>

<div class="badge-neutral badge-primary badge-secondary badge-accent hidden"></div>

<div class="badge font-bold badge-{color} gap-2">
	{#if icon}
		<Icon data={icon} />
	{/if}
	<slot />
</div>
