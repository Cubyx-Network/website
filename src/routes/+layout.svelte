<script>
	import '../app.css';
	import Header from '../components/Header/Header.svelte';
	import Footer from '../components/Footer/Footer.svelte';
	import HeaderDummy from '../components/Header/HeaderDummy.svelte';

	let headerConfig = [
		{ text: 'Home', link: '/' },
		{ text: 'Das Team', link: '/team' },
		{ text: 'Neuigkeiten', link: '/news' },
		{ text: 'Partner', link: '/partner' },
		{ text: 'Bewerben', link: '/bewerben' },
		{ text: 'Discord', link: 'https://cubyx.eu/discord' }
	];
</script>

<Header links={headerConfig} />

<main class="overflow-x-hidden bg-background">
	<HeaderDummy />
	<slot />
</main>

<Footer />
