<script lang="ts">
	import type { Article } from "@prisma/client";
	import { generateTitle } from "$lib/titleGenerator";
	import MetadataDisplay from "./MetadataDisplay.svelte";
	import { faCalendarDays } from "@fortawesome/free-regular-svg-icons/faCalendarDays";
	import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";

	export let article: Article;
</script>

<svelte:head>
	<title>{generateTitle('Neuigkeiten')}</title>
</svelte:head>

<a
	class="relative flex aspect-square w-full items-center justify-center rounded-[30px] border-[3px] border-accent"
	href={`/news/${article.id}`}
>
	<img
		src={article.thumbnail}
		alt="Artikel-Thumbnail"
		class="h-full w-full rounded-[30px] object-cover"
	/>
	<div class="absolute right-0 top-0 flex h-full w-full items-end justify-end leading-tight">
		<div class="flex w-full flex-col items-end rounded-b-[30px] bg-[#00000033] p-4 leading-tight">
			<span class="text-right font-bold">{article.title}</span>
			<MetadataDisplay icon={faUser} text={article.author} />
			<MetadataDisplay icon={faCalendarDays} text={article.createdAt.toLocaleDateString()} />
		</div>
	</div>
</a>
