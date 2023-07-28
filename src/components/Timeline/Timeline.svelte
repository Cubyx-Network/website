<script lang="ts">
  import TimelineLine from "./TimelineLine.svelte";
  import TimelineItem from "./TimelineItem.svelte";

  export type TimelineItemType = {
    title: string;
    description: string;
    date: string;
    position: "left" | "right";
  }

  export let items: TimelineItemType[];
</script>

<div class="relative w-full">
  <TimelineLine />
  <div class="flex flex-col gap-8 items-center">
    {#each items as item}
      <TimelineItem {item} />
    {/each}
  </div>
</div>
