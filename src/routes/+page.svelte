<script>
	import Hero from '../components/Hero/Hero.svelte';
	import HeaderDummy from '../components/Header/HeaderDummy.svelte';
	import { generateTitle } from '$lib/titleGenerator';
</script>

<svelte:head>
	<title>{generateTitle("Home")}</title>
</svelte:head>

<HeaderDummy />

<Hero img='/img/home/hero.png'>
	<div class='text-center leading-[2rem] md:leading-[3rem] lg:leading-[4rem] dshadow'>
		<h1 class='tracking-[.3em] '>CUBYX NETWORK</h1>
		<h3>Quadratisch<span class='text-accent'>.</span> Praktisch<span class='text-accent'>.</span>
			Gut<span class='text-accent'>.</span></h3>
	</div>
</Hero>