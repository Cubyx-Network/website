<script lang="ts">
	export let img: string;
	export let alt: string;
	export let rounded = false;
</script>

<div class="relative h-60 w-full">
	{#if img}
		<img src={img} {alt} class={`h-full w-full object-cover ${rounded ? "rounded-[10px]" : ""}`} />
	{/if}
	<div class="absolute right-0 top-0 flex h-full w-full items-center justify-center">
		<slot />
	</div>
</div>

<style>
	div {
		background-size: cover;
		background-position: center;
	}
</style>
