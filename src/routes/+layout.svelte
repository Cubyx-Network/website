<script lang="ts">
	import '../app.css';
	import Header from '../components/Header/Header.svelte';
	import Footer from '../components/Footer/Footer.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import { metadata } from '$lib/seo';

	let headerConfig = [
		{ text: 'Home', link: '/' },
		{ text: 'Das Team', link: '/team' },
		{ text: 'Bewerben', link: 'https://cubyx.eu/bewerben' },
		{ text: 'Discord', link: 'https://cubyx.eu/discord' }
	];
</script>

<svelte:head>
	<MetaTags
	title="Cubyx Network"
	titleTemplate="%s - Cubyx Network"
	description="Die offizielle Website vom Cubyx Network."
	canonical="https://www.cubyx.eu"
	robots="index, follow"
	openGraph={{
		url: 'https://www.cubyx.eu',
		title: 'Cubyx Network',
		description: 'Die offizielle Website vom Cubyx Network.',
		images: [
			{
				url: 'https://www.cubyx.eu/img/logo/netzwerk.png',
				width: 1024,
				height: 1024,
				alt: 'Cubyx Network Logo'
			}
		]
	}}
	{...$metadata}
/>
</svelte:head>

<Header links={headerConfig} />

<main class="overflow-x-hidden bg-base-100">
	<slot />
</main>

<Footer />
