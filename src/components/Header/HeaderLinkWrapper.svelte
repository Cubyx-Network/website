<script lang="ts">
	export let justify: 'start' | 'end';
</script>

<div
	class="sticky flex items-center justify-start {justify === 'end' &&
		'justify-end'} hidden w-1/3 gap-5 lg:inline-flex"
>
	<slot />
</div>
