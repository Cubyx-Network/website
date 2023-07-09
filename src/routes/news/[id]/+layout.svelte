<script>
	import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
	import { page } from "$app/stores";
	import { faCalendarDays } from "@fortawesome/free-regular-svg-icons/faCalendarDays";
	import MetadataDisplay from "../../../components/News/MetadataDisplay.svelte";
	import { generateTitle } from "$lib/titleGenerator";
	import TagDisplay from "../../../components/News/TagDisplay.svelte";
	import Hero from "../../../components/Hero/Hero.svelte";
</script>

<svelte:head>
	<title>{generateTitle($page.data.article.title)}</title>
</svelte:head>

<div class="m-auto grid w-full grid-cols-1 gap-4 p-4 lg:grid-cols-10 xl:w-[60%]">
	<div class="col-span-2 flex p-4 text-xl lg:justify-end">
		<div class="flex flex-col items-start">
			<MetadataDisplay icon={faUser} text={$page.data.article.author} />
			<MetadataDisplay
				icon={faCalendarDays}
				text={$page.data.article.createdAt.toLocaleDateString()}
			/>
			<div class="py-4">
				<TagDisplay tags={$page.data.article.tags.map((tag) => tag.name)} />
			</div>
			<!--      <MetadataDisplay icon={faEye} text={$page.data.article.clicks} />-->
		</div>
	</div>

	<div class="col-span-8 p-4">
		<div class="mb-4">
			<Hero img={$page.data.article.thumbnail} rounded />
		</div>
		<slot />
	</div>
</div>
