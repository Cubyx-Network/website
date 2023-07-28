<script lang="ts">
	import type { IconDefinition as BrandIconDefinition } from '@fortawesome/free-brands-svg-icons';
	import type { IconDefinition as SolidIconDefinition } from '@fortawesome/free-solid-svg-icons';
	import type { IconDefinition as RegularIconDefinition } from '@fortawesome/free-regular-svg-icons';
	import { Icon } from 'svelte-awesome';

	export let icon: BrandIconDefinition | SolidIconDefinition | RegularIconDefinition;
	export let href: string;
</script>

<a {href} target="_blank">
	<Icon data={icon} class="h-6 w-auto text-[2em] md:h-8 lg:h-12" />
</a>
