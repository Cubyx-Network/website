<script lang='ts'>
	export let text: string;
	export let img: string;
	export let imgAlt: string;
	export let mode: 'left' | 'right' = 'left';
</script>

<div class='flex items-center lg:justify-between gap-4 flex-col lg:flex-row px-8 md:px-16 lg:px-24 w-full'>
	{#if mode === 'left'}
		<p class='text-center w-full lg:text-right lg:w-1/2'>
			{text}
		</p>
	{/if}

	<img src={img} alt={imgAlt} class='w-full md:w-3/4 lg:w-2/5 rounded-[30px] border-grayedOut_dark dshadow border-[5px]'>

	{#if mode === 'right'}
		<p class='text-center w-full lg:text-left lg:w-1/2'>
			{text}
		</p>
	{/if}
</div>