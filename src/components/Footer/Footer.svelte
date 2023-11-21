<script>
	import FooterLogo from './FooterLogo.svelte';
	import FooterLegal from './FooterLegal.svelte';
</script>

<footer class="bg-secondary p-6">
	<div class="flex flex-col items-center">
		<FooterLogo />
	</div>
	<div class="mt-4">
		<FooterLegal />
		<p class="text-center text-neutral-500">
			Mit ♥ aus Deutschland - (c) {new Date().getFullYear()} Cubyx Network - Erstellt mit
			<a class="text-grayedOut_light" href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>
		</p>
	</div>
</footer>
