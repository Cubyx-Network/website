<script lang="ts">
	import HeaderLogo from "./HeaderLogo.svelte";
	import { fly } from "svelte/transition";
	import HeaderLink from "./HeaderLink.svelte";

	export let links: { link: string; text: string }[] = [];

	let isOpen = false;

	function handleClick() {
		isOpen = !isOpen;
	}
</script>

<nav
	class="sticky top-0 z-10 flex h-24 w-full items-center justify-center gap-5 bg-secondary p-1 lg:hidden"
>
	<button on:click={handleClick} class="z-10">
		<HeaderLogo rotateDown={isOpen} />
	</button>

	{#if isOpen}
		<div
			transition:fly={{ y: -200, duration: 300 }}
			class="absolute top-0 z-0 flex h-screen w-full flex-col items-center justify-center gap-5 bg-secondary"
		>
			{#each links as link}
				<HeaderLink link={link.link} text={link.text} onClick={handleClick} />
			{/each}
		</div>
	{/if}
</nav>
