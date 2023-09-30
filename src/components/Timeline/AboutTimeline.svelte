<script lang="ts">
	import Timeline, { type TimelineItemType } from './Timeline.svelte';

	let items: TimelineItemType[] = [
		{
			title: 'Cubyx wird als reines Bauteam eröffnet',
			date: 'Januar 2020',
			position: 'left'
		},
		{
			title: 'Netzwerk-Aufbau',
			date: 'Oktober 2020',
			position: 'right'
		},
		{
			title: 'Cubyx startet sein erstes Survival Projekt "Tecta"',
			date: 'August 2021',
			position: 'left'
		},
		{
			title: 'Cubyx schließt seine Pforten der Öffentlichkeit gegenüber',
			date: 'Oktober 2021',
			position: 'right'
		},
		{
			title: 'Cubyx wird Netzwerk Team',
			date: 'Juni 2022',
			position: 'left'
		},
		{
			title: 'Cubyx veröffentlicht das Netzwerk neu!',
			date: 'Dezember 2022',
			position: 'right'
		}
	];
</script>

<div class="m-auto flex w-full justify-center p-8">
	<Timeline items={items.reverse()} />
</div>
