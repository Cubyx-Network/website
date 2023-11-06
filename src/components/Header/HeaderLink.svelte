<script lang="ts" context="module">
	export type HeaderLinkType = {
		text: string;
		link: string;
		external?: boolean;
	};
</script>

<script lang="ts">
	import { faChain } from '@fortawesome/free-solid-svg-icons';
	import { Icon } from 'svelte-awesome';

	export let link: HeaderLinkType;
	export let onClick: () => void = () => {};
</script>

<a
	href={link.link}
	class="flex items-center gap-2 text-xl font-medium uppercase text-base-content"
	target={link.external ? '_blank' : ''}
	on:click={onClick}
>
	{link.text}
	{#if link.external}<Icon data={faChain}></Icon>{/if}
</a>
