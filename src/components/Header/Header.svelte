<script lang="ts">
	import HeaderMobile from './HeaderMobile.svelte';
	import HeaderLinkWrapper from './HeaderLinkWrapper.svelte';
	import HeaderLink, { type HeaderLinkType } from './HeaderLink.svelte';
	import HeaderLogo from './HeaderLogo.svelte';

	export let links: HeaderLinkType[] = [];

	let leftLinks: HeaderLinkType[] = [];
	let rightLinks: HeaderLinkType[] = [];

	for (let i = 0; i < links.length; i++) {
		if (i < links.length / 2) {
			leftLinks.push(links[i]);
		} else {
			rightLinks.push(links[i]);
		}
	}
</script>

<nav
	class="sticky top-0 z-10 hidden h-24 w-full items-center justify-center gap-5 bg-secondary p-1 lg:flex"
>
	<HeaderLinkWrapper justify="end">
		{#each leftLinks as link}
			<HeaderLink {link} />
		{/each}
	</HeaderLinkWrapper>

	<HeaderLogo />

	<HeaderLinkWrapper justify="start">
		{#each rightLinks as link}
			<HeaderLink {link} />
		{/each}
	</HeaderLinkWrapper>
</nav>

<HeaderMobile {links} />
