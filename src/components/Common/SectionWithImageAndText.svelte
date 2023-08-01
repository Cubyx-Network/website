<script lang="ts">
	export let text: string;
	export let img: string;
	export let imgAlt: string;
	export let mode: 'left' | 'right' = 'left';
</script>

<div
	class="flex w-full flex-col items-center gap-4 px-8 md:px-16 lg:flex-row lg:justify-between lg:px-24"
>
	{#if mode === 'left'}
		<p class="w-full text-center lg:w-1/2 lg:text-right">
			{text}
		</p>
	{/if}

	<img
		src={img}
		alt={imgAlt}
		class="w-full rounded-[30px] border-[5px] border-neutral-focus md:w-3/4 lg:w-2/5"
	/>

	{#if mode === 'right'}
		<p class="w-full text-center lg:w-1/2 lg:text-left">
			{text}
		</p>
	{/if}
</div>
