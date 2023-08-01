<script lang="ts">
	import ArticlePreview from "../../components/News/ArticlePreview.svelte";
	import { page } from "$app/stores";
	import { generateTitle } from "$lib/titleGenerator";
	import { filter } from "$lib/stores/newsStore";
	import { onMount } from "svelte";
	import TagDisplay from "../../components/News/TagDisplay.svelte";
	import HeroWithTitleAndSlogan from "../../components/Common/HeroWithTitleAndSlogan.svelte";

	let articles = [];

	onMount(() => {
		filter.subscribe((f) => updateArticles(f));
		updateArticles($filter);
	});

	function updateArticles(f: string[]): void {
		articles = $page.data.articles.filter(
			(article) => f.length === 0 || f.some((tag) => article.tags.map((t) => t.name).includes(tag))
		);
	}

	function searchBoxEnter(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			const search = (e.target as HTMLInputElement).value.toLowerCase();
			if (search.length > 0) {
				$filter = [...$filter, search];
				(e.target as HTMLInputElement).value = '';
			}
		}
	}
</script>

<svelte:head>
	<title>{generateTitle('Neuigkeiten')}</title>
</svelte:head>

<HeroWithTitleAndSlogan img="/img/news/hero.jpg">Aktuelle Neuigkeiten</HeroWithTitleAndSlogan>

<div
	class="mx-auto my-8 w-full flex-col items-center justify-center gap-4 px-2 md:w-[80%] lg:w-1/2"
>
	<div class="items-center gap-2 lg:flex">
		<label for="searchbar" class="min-w-max text-xl font-medium">Nach Tag filtern:</label>
		<input
			class="w-full rounded-[30px] bg-secondary px-4 py-2 lowercase"
			maxlength="30"
			id="searchbar"
			on:keypress={searchBoxEnter}
		/>
	</div>

	<div class="mt-4 flex w-full justify-center">
		<TagDisplay
			tags={$filter}
			overrideTagClick={(tag) => {
				$filter = $filter.filter((t) => t !== tag);
			}}
			disableResponsive
		/>
	</div>
</div>

<div
	class="mx-auto my-8 grid w-full grid-cols-2 gap-3 px-2 md:grid-cols-3 md:gap-8 lg:w-[90%] lg:grid-cols-4 xl:w-[70%]"
	data-sveltekit-preload-data="tap"
>
	{#each articles as article}
		<ArticlePreview {article} disableTagLink={false} />
	{/each}
</div>
