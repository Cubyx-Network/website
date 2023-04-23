<script lang="ts">
    export let justify: "start" | "end";
</script>

<div class="sticky flex items-center justify-start {justify === 'end' && 'justify-end'} gap-5 w-1/3">
    <slot></slot>
</div>