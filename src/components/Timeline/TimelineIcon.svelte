<script lang="ts">
	import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
	import { Icon } from 'svelte-awesome';
	import type { TimelineItemType } from './Timeline.svelte';

	export let item: TimelineItemType;
</script>

<a href={item.href} target="_blank" class="flex items-center"> </a>
