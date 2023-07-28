<script lang="ts">
  import type { TimelineItemType } from "./Timeline.svelte";
  import { twMerge } from "tailwind-merge";

  export let item: TimelineItemType;
</script>

<div class={twMerge("w-[45%]", item.position === "left" ? "-translate-x-1/2 text-right mr-8" : "translate-x-1/2 ml-8")}>
  <div class="absolute w-full h-full">
    <div class={twMerge("rounded-full bg-accent absolute top-[.5rem] w-5 h-5", item.position === "left" ? "-right-[1.6rem]" : "-left-[1.6rem]")}></div>
  </div>
  <p class="text-grayedOut_light">{item.date}</p>
  <p class="break-words whitespace-normal font-medium">{item.title}</p>
  {#if item.description}<p>{item.description}</p>{/if}
</div>
