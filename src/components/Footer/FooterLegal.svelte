<script>
	import { faChain } from '@fortawesome/free-solid-svg-icons';

	import { Icon } from 'svelte-awesome';
</script>

<div class="flex flex-wrap items-center justify-center gap-x-2 self-center text-neutral md:gap-4">
	<a href="/impressum">Impressum</a>
	<p class="text-neutral-focus">•</p>
	<a href="/datenschutz">Datenschutz</a>
	<p class="text-neutral-focus">•</p>
	<a href="https://cubyx.eu/status" target="_blank" class="flex items-center gap-1">
		Statuspage <Icon data={faChain} />
	</a>
	<p class="text-neutral-focus">•</p>
	<a href="https://bio.link/cubyx" class="flex items-center gap-1">
		Kontakt <Icon data={faChain} />
	</a>
</div>
