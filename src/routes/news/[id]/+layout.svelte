<script>
	import { faUser } from '@fortawesome/free-regular-svg-icons/faUser';
	import { page } from '$app/stores';
	import { faCalendarDays } from '@fortawesome/free-regular-svg-icons/faCalendarDays';
	import MetadataDisplay from '../../../components/News/MetadataDisplay.svelte';
	import { generateTitle } from '$lib/titleGenerator';
</script>

<svelte:head>
	<title>{generateTitle($page.data.article.title)}</title>
</svelte:head>

<div class="m-auto grid w-full grid-cols-1 gap-4 p-4 lg:grid-cols-10 xl:w-[60%]">
	<div class="col-span-2 flex p-4 text-xl lg:justify-end">
		<div>
			<MetadataDisplay icon={faUser} text={$page.data.article.author} />
			<MetadataDisplay
				icon={faCalendarDays}
				text={$page.data.article.createdAt.toLocaleDateString()}
			/>
			<!--      <MetadataDisplay icon={faEye} text={$page.data.article.clicks} />-->
		</div>
	</div>

	<div class="col-span-8 p-4">
		<slot />
	</div>
</div>
