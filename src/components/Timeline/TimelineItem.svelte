<script lang="ts">
	import type { TimelineItemType } from "./Timeline.svelte";
	import { twMerge } from "tailwind-merge";
	import TimelineIcon from "./TimelineIcon.svelte";

	export let item: TimelineItemType;
</script>

<div class="w-full flex flex-col items-center">
	<div
		class={twMerge(
				'mt-[.5rem] h-5 w-5 rounded-full bg-primary',
				item.position === 'left' ? '-right-[1.6rem]' : '-left-[1.6rem]'
			)}
	/>
	<div class={twMerge('-translate-y-[1.9rem] max-w-[40%]', item.position === "left" ? "text-right -translate-x-1/2 mr-8" : "ml-8 translate-x-1/2")}>
		<p class="text-neutral">{item.date}</p>
		{#if item.position === "left"}<p class="flexbox whitespace-normal break-words font-medium shadow: 1px">{#if typeof item.href !== 'undefined' && item.href !== ""}<TimelineIcon {item}/>{/if}⠀{item.title}</p>{/if}  <!-- ⠀ -->
		{#if item.position === "right"}<p class="flexbox whitespace-normal break-words font-medium shadow: 1px">{item.title}⠀{#if typeof item.href !== 'undefined' && item.href !== ""}<TimelineIcon {item}/>{/if}</p>{/if} 
		{#if item.description}<p style="text-color">{item.description}</p>{/if}
	</div>
</div>
