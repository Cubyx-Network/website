<script lang="ts">
	export let title = 'Cubyx Network';
	export let description = 'Die offizielle Website vom Cubyx Network.';
	export let canonical = 'https://www.cubyx.eu';
	export let index = process.env.NODE_ENV === 'production';

	export let image = 'https://www.cubyx.eu/img/logo/netzwerk.png';
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>{title} - Cubyx Network</title>
	<meta name="description" content={description} />
	<meta name="keywords" content="Cubyx Network, Cubyx, Network, Minecraft, Server, Netzwerk" />
	<meta name="author" content="Cubyx Network" />
	<meta name="robots" content={index ? 'index, follow' : 'noindex, nofollow'} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:url" content={canonical} />
	<meta property="og:site_name" content="Cubyx Network" />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@CubyxTeam" />
	<meta name="twitter:creator" content="@CubyxTeam" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
</svelte:head>
