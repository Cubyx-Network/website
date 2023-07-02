<script>
	import ArticlePreview from '../../components/News/ArticlePreview.svelte';
	import { page } from '$app/stores';
	import Hero from '../../components/Hero/Hero.svelte';
	import { generateTitle } from '$lib/titleGenerator';
</script>

<svelte:head>
	<title>{generateTitle('Neuigkeiten')}</title>
</svelte:head>

<Hero img="/img/news/hero.jpg">
	<div class="dshadow text-center leading-[2rem] md:leading-[3rem] lg:leading-[4rem]">
		<h1 class="uppercase tracking-[.3em]">Aktuelle Neuigkeiten</h1>
		<h3>
			Quadratisch<span class="text-accent">.</span> Praktisch<span class="text-accent">.</span>
			Gut<span class="text-accent">.</span>
		</h3>
	</div>
</Hero>

<div
	class="m-auto grid w-full grid-cols-2 gap-8 p-8 md:grid-cols-3 lg:w-[90%] lg:grid-cols-4 xl:w-[70%]"
>
	{#each $page.data.articles as article}
		<ArticlePreview {article} />
	{/each}
</div>
