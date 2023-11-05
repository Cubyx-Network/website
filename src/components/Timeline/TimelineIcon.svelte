<script lang="ts">
	import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
	import { Icon } from "svelte-awesome";
	import type { TimelineItemType } from './Timeline.svelte';

	export let item: TimelineItemType;
</script>

<a href={item.href} target="_blank">
	<Icon data={faLink} class="h-6 w-auto text-base-content text-[2em] md:h-8 lg:h-4" />
</a>
