<script lang="ts">
	import type { TimelineItemType } from "./Timeline.svelte";
	import { twMerge } from "tailwind-merge";

	export let item: TimelineItemType;
</script>

<div
	class="w-full flex flex-col items-center"
>
	<div
		class={twMerge(
				'mt-[.5rem] h-5 w-5 rounded-full bg-primary',
				item.position === 'left' ? '-right-[1.6rem]' : '-left-[1.6rem]'
			)}
	/>
	<div class={twMerge('-translate-y-[1.9rem] max-w-[40%]', item.position === "left" ? "text-right -translate-x-1/2 mr-8" : "ml-8 translate-x-1/2")}>
		<p class="text-neutral">{item.date}</p>
		<p class="whitespace-normal break-words font-medium">{item.title}</p>
		{#if item.description}<p>{item.description}</p>{/if}
	</div>
</div>
