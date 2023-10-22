<script lang="ts">
	import Timeline, { type TimelineItemType } from './Timeline.svelte';

	const discordString = 'Discord ➚↗';

	let items: TimelineItemType[] = [
		{
			title: 'Das Cubyx Team wird gegründet von Oyo321, Z0eyby und L__Master mit Jahresbeginn. Veröffentlichung & Geburtstag des Teams wurde der 11./12.01.2020  ',
			date: 'Januar 2020',
			position: 'left'
		},
		{
			title: 'Netzwerk-Aufbau',
			date: 'Oktober 2020',
			position: 'right'
		},
		{
			title: 'Cubyx startet sein 1. Survival Projekt "Tecta"',
			date: 'August 2020',
			position: 'left'
		},
		{
			title: 'Hier fehlt noch was! Was genau, wissen wir auch nicht.',
			date: 'xx xxxx',
			position: 'right'
		},
		{
			title: 'Abgeschlossen: Funty Lobby Projekt',
			date: 'März 2021',
			position: 'left',
		},
		{
			title: 'Oster Event 2021 + Community Preise',
			date: 'April 2021',
			position: 'right'
		},
		{
			title: 'Einführung Cubyx Blog bei SCNX.XYZ',
			date: 'Juni 2021',
			position: 'left'
		},
		{
			title: 'Update: Discord Server',
			date: 'September 2021',
			position: 'right'
		},
		{ //Nicht geprüft!
			title: 'Cubyx schließt seine Pforten der Öffentlichkeit gegenüber',
			date: 'Oktober 2021',
			position: 'right'
		},
		{
			title: 'Wiedereröffnung Minecraft Netzwerk: Weihnachten / Winter Event 2021 + Winter Lobby',
			date: 'Dezember 2021',
			position: 'left'
		},
		{
			title: 'Geburtstag: 2 Jahre Cubyx',
			date: 'Januar 2022',
			position: 'right'
		},
		{
			title: 'Veröffentlichung: Knock-out Minigame',
			date: 'Februar 2022',
			position: 'left'
		},
		{
			title: 'Veröffentlichung: Adventure in Viking Village',
			date: 'April 2022',
			position: 'right'
		},
		{
			title: 'Wechsel von Twitter zu Mastodon',
			date: 'Mai 2022',
			position: 'left'
		},
		{
			title: 'Einführung: BioLink Profil für Cubyx',
			date: 'Mai 2022',
			position: 'left'
		},
		/* 		{	//Nicht geprüft!
			title: 'Cubyx ein Netzwerk Team',
			date: 'Juni 2022',
			position: 'left'
		}, */
		{
			title: 'Event: Museumstour mit Alex99g',
			date: 'Juni 2022',
			position: 'right'
		},
		{
			title: 'Veröffentlichung: Supersum - Community Survival-Projekt 1.19',
			date: 'August 2022',
			position: 'left'
		},
		{
			title: 'ExpanseHost - Hosting Partner',
			date: 'August 2022',
			position: 'left'
		},
		{
			title: 'Veröffentlichung vom CNE YouTube Kanal & der 1. Cubyx Podcast Folge',
			date: 'September 2022',
			position: 'right'
		},
		{
			title: 'Jubiläum: 1000 Tage Cubyx Discord Server',
			date: '8. Oktober 2022',
			position: 'left'
		},
		{
			title: 'Einführung: Mastodon Instanz - social.cubyx.eu',
			date: 'Dezember 2022',
			position: 'right'
		},
		{
			title: 'Event: Lobby in Weihnachtsstimmung',
			date: 'Dezember 2022',
			position: 'right'
		},
/* 		{ // Hä?
			title: 'Cubyx veröffentlicht das Netzwerk neu!',
			date: 'Dezember 2022',
			position: 'right'
		} */
		{
			title: 'Event: Neujahrsfeuerwerk auf der MC-Lobby',
			date: 'Jahreswechsel 2022/2023',
			position: 'right'
		},
		{
			title: 'Geburtstag: 3 Jahre Cubyx',
			date: 'Januar 2023',
			position: 'left'
		},
		{
			title: 'Giveaway: Ostern mit unseren Partner ExpanseHost + Oster-Podcast Verlosung',
			date: 'April 2023',
			position: 'right'
		},
		{
			title: 'Ende der Mastodon Instanz - social.cubyx.eu',
			date: 'Mai 2023',
			position: 'left'
		},
		{
			title: '200 Leute auf dem Cubyx Discord',
			date: 'Mai 2023',
			position: 'left'
		},
		{
			title: 'Veröffentlichung: Discord Statistiken Überblick & Rückblick',
			date: 'Juni 2023',
			position: 'right'
		},
		{
			title: 'Veröffentlichung: Community Survival-Projekt 1.20 mit GCC',
			date: 'Juni 2023',
			position: 'right'
		},
		{
			title: 'Update: Discord Server',
			date: 'Juli 2023',
			position: 'left'
		},
		{
			title: 'Veröffentlichung: Neue Webseite (v0.1.0)',
			date: '10. Oktober 2023',
			position: 'right'
		}
/* 		{
			title: 'Platzhalter',
			date: 'Monat Jahr',
			position: 'right'
		} */
	];
</script>

<div class="m-auto flex w-full justify-center p-8">
	<Timeline items={items.reverse()} />
</div>
