<script>
	import { page } from '$app/stores';
	import Seo from '../components/Common/Seo.svelte';
</script>

<Seo
	title={$page.status.toString()}
	description={$page.error ? $page.error.message : 'Ein unbekannter Fehler ist aufgetreten.'}
/>

<div class="flex h-screen w-full items-center justify-center">
	<div class="flex h-1/4 items-center justify-center gap-8">
		<img
			src="/img/logo/netzwerk.png"
			alt="Cubyx Network Logo"
			class="h-auto w-[7rem] md:h-full md:w-auto"
		/>
		<div class="h-2/3 w-[2px] rounded-full bg-white" />
		<div>
			<h1>Fehler {$page.status}</h1>
			<h4 class="text-grayedOut_dark">
				{#if $page.error}
					{$page.error.message}
				{:else}
					Ein unbekannter Fehler ist aufgetreten.
				{/if}
			</h4>
		</div>
	</div>
</div>
