<script lang="ts">
	import type { TimelineItemType } from './Timeline.svelte';
	import { twMerge } from 'tailwind-merge';

	export let item: TimelineItemType;
</script>

<div
	class={twMerge(
		'w-[45%]',
		item.position === 'left' ? 'mr-8 -translate-x-1/2 text-right' : 'ml-8 translate-x-1/2'
	)}
>
	<div class="absolute h-full w-full">
		<div
			class={twMerge(
				'absolute top-[.5rem] h-5 w-5 rounded-full bg-accent',
				item.position === 'left' ? '-right-[1.6rem]' : '-left-[1.6rem]'
			)}
		/>
	</div>
	<p class="text-grayedOut_light">{item.date}</p>
	<p class="whitespace-normal break-words font-medium">{item.title}</p>
	{#if item.description}<p>{item.description}</p>{/if}
</div>
