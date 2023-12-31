<script>
	import '../app.css';
	import Header from '../components/Header/Header.svelte';
	import Footer from '../components/Footer/Footer.svelte';
	import PageLoadingBar from '../components/Common/PageLoadingBar.svelte';
	import { navigating } from '$app/stores';

	let headerConfig = [
		{ text: 'Home', link: '/' },
		{ text: 'Das Team', link: '/team' },
		{ text: 'Bewerben', link: 'https://cubyx.eu/bewerben', external: true },
		{ text: 'Discord', link: 'https://cubyx.eu/discord', external: true }
	];
</script>

{#if $navigating}
	<PageLoadingBar />
{/if}

<Header links={headerConfig} />

<main class="overflow-x-hidden bg-base-100">
	<slot />
</main>

<Footer />
