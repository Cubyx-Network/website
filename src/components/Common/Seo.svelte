<script lang="ts">
	import { page } from '$app/stores';
	import { MetaTags, type MetaTagsProps } from 'svelte-meta-tags';

	export let title = 'Cubyx Network';
	export let description = 'Die offizielle Website vom Cubyx Network.';
	export let canonical = 'https://www.cubyx.eu';
	export let index = true;

	export let image = 'https://www.cubyx.eu/img/logo/netzwerk.png';
	export let imageAlt = 'Cubyx Network Logo';

	export let ovewrite: MetaTagsProps = {};
</script>

<svelte:head>
	{#key $page.route}
		<MetaTags
			title={`${title} - Cubyx Network`}
			{description}
			{canonical}
			robots={index ? 'index, follow' : 'noindex, nofollow'}
			openGraph={{
				url: canonical,
				title,
				description,
				images: [
					{
						url: image,
						width: 1024,
						height: 1024,
						alt: imageAlt
					}
				]
			}}
			{...ovewrite}
		/>
	{/key}
</svelte:head>
