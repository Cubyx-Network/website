<script lang="ts">
  import { Icon } from "svelte-awesome";
  import { faTag } from "@fortawesome/free-solid-svg-icons/faTag";

  export let tags: string[] | undefined;
  export let disableTagLink = false;
  export let overrideTagClick: (tag: string) => void | undefined;
  export let disableResponsive = false;

  const styling = `${disableResponsive ? "" : "hidden md:block"} px-2 py-1 text-xs font-semibold bg-accent rounded-full text-text no-underline`
</script>

{#if tags}
  <div class="flex items-center justify-end gap-2 text-right">
    <div class="flex gap-2 flex-wrap">
      {#each tags as tag}
        {#if !overrideTagClick}
          <a
            class={styling}
            href={!disableTagLink ? `/news?filter=${tag}` : undefined}
          >
            <Icon data={faTag} />
            {tag}
          </a>
        {:else}
          <button
            class={styling}
            on:click={() => overrideTagClick(tag)}
          >
            <Icon data={faTag} />
            {tag}
          </button>
        {/if}
      {/each}
    </div>
  </div>
{/if}
