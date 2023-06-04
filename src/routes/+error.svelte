<script>
	import { page } from '$app/stores';
	import { generateTitle } from '$lib/titleGenerator';
</script>

<svelte:head>
	<title>{generateTitle($page.status + "")}</title>
</svelte:head>

<div class='flex items-center justify-center h-screen w-full'>
	<div class='flex items-center justify-center gap-8 h-1/4'>
		<img src='/img/logo/netzwerk.png' alt='Cubyx Network Logo' class='md:h-full h-auto w-[7rem] md:w-auto'>
		<div class='h-2/3 w-[2px] bg-white rounded-full'></div>
		<div>
			<h1>Fehler {$page.status}</h1>
			<h4 class='text-grayedOut_dark'>{$page.error.message}</h4>
		</div>
	</div>
</div>