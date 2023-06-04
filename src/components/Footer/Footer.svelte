<script>
	import FooterLogo from './FooterLogo.svelte';
	import FooterLegal from './FooterLegal.svelte';
</script>

<footer class='bg-background_darker p-6'>
	<div class='flex flex-col items-center'>
		<FooterLogo />
	</div>
	<div class='mt-4'>
		<FooterLegal />
		<p class='text-center text-grayedOut_dark'>Mit ♥ aus Deutschland - (c) {new Date().getFullYear()} Cubyx Network - Erstellt mit <a class='text-grayedOut_light' href='https://kit.svelte.dev/' target='_blank'>SvelteKit</a></p>
	</div>
</footer>