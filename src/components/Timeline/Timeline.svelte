<script lang="ts" context="module">
	export type TimelineItemType = {
		title: string;
		description?: string;
		date: string;
		position: 'left' | 'right';
	};
</script>

<script lang="ts">
	import TimelineLine from './TimelineLine.svelte';
	import TimelineItem from './TimelineItem.svelte';

	export let items: TimelineItemType[];
</script>

<div class="relative w-full">
	<TimelineLine />
	<div class="flex flex-col items-center gap-8">
		{#each items as item}
			<TimelineItem {item} />
		{/each}
	</div>
</div>
