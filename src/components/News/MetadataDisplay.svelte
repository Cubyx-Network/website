<script lang="ts">
	import { Icon } from 'svelte-awesome';
	import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

	export let icon: IconDefinition;
	export let text: string;
	export let href: string;
</script>

<div class="flex items-center justify-end gap-2 text-right">
	<Icon data={icon} />

	<div class="w-max">
		{#if href}
			<a {href} target="_blank">
				<span>{text}</span>
			</a>
		{:else}
			<span>{text}</span>
		{/if}
	</div>
</div>
