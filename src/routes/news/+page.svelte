<script lang="ts">
	import ArticlePreview from "../../components/News/ArticlePreview.svelte";
	import { page } from "$app/stores";
	import Hero from "../../components/Hero/Hero.svelte";
	import { generateTitle } from "$lib/titleGenerator";
	import { filter } from "$lib/stores/newsStore";
	import { onMount } from "svelte";
	import TagDisplay from "../../components/News/TagDisplay.svelte";

	let articles = [];

	onMount(() => {
		filter.subscribe((f) => updateArticles(f));
		updateArticles($filter);
	})

	function updateArticles(f: string[]): void {
		articles = $page.data.articles.filter(article => f.length === 0 || f.some(tag => article.tags.map((t) => t.name).includes(tag)));
	}

	function searchBoxEnter(e: KeyboardEvent) {
		if (e.key === "Enter") {
			const search = (e.target as HTMLInputElement).value.toLowerCase();
			if (search.length > 0) {
				$filter = [...$filter, search];
				(e.target as HTMLInputElement).value = "";
			}
		}
	}
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

<div class="w-full px-2 md:w-[80%] lg:w-1/2 mx-auto my-8 flex-col items-center gap-4 justify-center">
	<div class="lg:flex items-center gap-2">
		<label for="searchbar" class="min-w-max text-xl font-medium">Nach Tag filtern:</label>
		<input class="w-full rounded-[30px] bg-background_darker py-2 px-4 lowercase" maxlength="30" id="searchbar" on:keypress={searchBoxEnter}>
	</div>

	<div class="w-full flex justify-center mt-4">
		<TagDisplay tags={$filter} overrideTagClick={(tag) => {$filter = $filter.filter((t) => t !== tag)}} disableResponsive />
	</div>
</div>

<div
	class="mx-auto my-8 grid w-full grid-cols-2 gap-3 md:gap-8 px-2 md:grid-cols-3 lg:w-[90%] lg:grid-cols-4 xl:w-[70%]"
>
	{#each articles as article}
		<ArticlePreview {article} disableTagLink={true} />
	{/each}
</div>
