<script lang="ts">
	import type { TimelineItemType } from './Timeline.svelte';
	import { twMerge } from 'tailwind-merge';
	import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
	import { Icon } from 'svelte-awesome';

	export let item: TimelineItemType;
</script>

<div class="flex w-full flex-col items-center">
	<div
		class={twMerge(
			'mt-[.5rem] h-5 w-5 rounded-full bg-primary',
			item.position === 'left' ? '-right-[1.6rem]' : '-left-[1.6rem]'
		)}
	/>
	<div
		class={twMerge(
			'max-w-[40%] -translate-y-[1.9rem]',
			item.position === 'left' ? 'mr-8 -translate-x-1/2 text-right' : 'ml-8 translate-x-1/2'
		)}
	>
		<p class="text-neutral">{item.date}</p>

		{#if item.href}
			<a
				href={item.href}
				target="_blank"
				class={twMerge(
					'flex items-center gap-1 text-base-content no-underline md:gap-2',
					item.position === 'left' ? 'flex-row-reverse' : ''
				)}
			>
				<h2 class="text-sm md:text-2xl">{item.title}</h2>
				<Icon data={faLink} class="hidden min-w-[1rem] text-base-content md:block" scale={1.4} />
			</a>
		{:else}
			<h2 class="text-sm md:text-2xl">{item.title}</h2>
		{/if}

		{#if item.description}<p class="text-xs leading-tight md:text-lg">{item.description}</p>{/if}
	</div>
</div>
