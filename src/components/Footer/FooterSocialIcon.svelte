<script lang="ts">
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
	import { Icon } from 'svelte-awesome';

	export let icon: IconDefinition;
	export let href: string;
</script>

<a {href} target="_blank">
	<Icon data={icon} class="h-6 w-auto text-[2em] text-base-content md:h-8 lg:h-12" />
</a>
