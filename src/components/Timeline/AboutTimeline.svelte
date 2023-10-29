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
			urllink: 'https://discord.com/channels/665917454626717746/817761730050392094/821845325596590080',
		},
		{
			title: 'Oster Event 2021 + Community Preise',
			date: 'April 2021',
			position: 'right',
			urllink: 'https://discord.com/channels/665917454626717746/817761730050392094/827910929710055446'
		},
		{
			title: 'Einführung Cubyx Blog bei SCNX.XYZ',
			date: 'Juni 2021',
			position: 'left',
			urllink: 'https://discord.com/channels/665917454626717746/817761730050392094/853020787677724713'
		},
		{
			title: 'Update: Discord Server',
			date: 'September 2021',
			position: 'right',
			urllink: 'https://discord.com/channels/665917454626717746/817761730050392094/890177113351663646'
		},
		{ //Nicht geprüft!
			title: 'Cubyx schließt seine Pforten der Öffentlichkeit gegenüber',
			date: 'Oktober 2021',
			position: 'right',
		},
		{
			title: 'Wiedereröffnung Minecraft Netzwerk: Weihnachten / Winter Event 2021 + Winter Lobby',
			date: 'Dezember 2021',
			position: 'left',
			urllink: 'https://discord.com/channels/665917454626717746/817761730050392094/923893282671575111'
		},
		{
			title: 'Geburtstag: 2 Jahre Cubyx',
			date: 'Januar 2022',
			position: 'right',
			urllink: 'https://discord.com/channels/665917454626717746/817761730050392094/930476815615676466'
		},
		{
			title: 'Veröffentlichung: Knock-out Minigame',
			date: 'Februar 2022',
			position: 'left',
			urllink: 'https://discord.com/channels/665917454626717746/817761730050392094/944267232358305832'
		},
		{
			title: 'Veröffentlichung: Adventure in Viking Village',
			date: 'April 2022',
			position: 'right',
			urllink: 'https://discord.com/channels/665917454626717746/817761730050392094/963908355649306724'
		},
		{
			title: 'Wechsel von Twitter zu Mastodon',
			date: 'Mai 2022',
			position: 'left',
			urllink: 'https://discord.com/channels/665917454626717746/817761730050392094/979334254037176350'
		},
		{
			title: 'Einführung: BioLink Profil für Cubyx',
			date: 'Mai 2022',
			position: 'left',
			urllink: 'https://discord.com/channels/665917454626717746/817761730050392094/980112923823321160'
		},
		/* 		{	//Nicht geprüft!
			title: 'Cubyx ein Netzwerk Team',
			date: 'Juni 2022',
			position: 'left'
		}, */
		{
			title: 'Event: Museumstour mit Alex99g',
			date: 'Juni 2022',
			position: 'right',
			urllink: 'https://discord.com/channels/665917454626717746/817761730050392094/986255498519142441'
		},
		{
			title: 'Veröffentlichung: Supersum - Community Survival-Projekt 1.19',
			date: 'August 2022',
			position: 'left',
			urllink: 'https://discord.com/channels/665917454626717746/817761730050392094/1007692901012209694'
		},
		{
			title: 'ExpanseHost - Hosting Partner',
			date: 'August 2022',
			position: 'left',
			urllink: 'https://discord.com/channels/665917454626717746/817761730050392094/1009105956283613245'
		},
		{
			title: 'Veröffentlichung vom CNE YouTube Kanal & der 1. Cubyx Podcast Folge',
			date: 'September 2022',
			position: 'right',
			urllink: 'https://discord.com/channels/665917454626717746/817761730050392094/1021284617275330560'
		},
		{
			title: 'Jubiläum: 1000 Tage Cubyx Discord Server',
			date: '8. Oktober 2022',
			position: 'left',
			urllink: 'https://discord.com/channels/665917454626717746/817761730050392094/1028384892477784134'
		},
		{
			title: 'Einführung: Mastodon Instanz - social.cubyx.eu',
			date: 'Dezember 2022',
			position: 'right',
			urllink: 'https://discord.com/channels/665917454626717746/817761730050392094/1044331001146523728'
		},
		{
			title: 'Event: Lobby in Weihnachtsstimmung',
			date: 'Dezember 2022',
			position: 'right',
			urllink: 'https://discord.com/channels/665917454626717746/817761730050392094/1053419601800732823'
		},
/* 		{ // Hä?
			title: 'Cubyx veröffentlicht das Netzwerk neu!',
			date: 'Dezember 2022',
			position: 'right'
		} */
		{
			title: 'Event: Neujahrsfeuerwerk auf der MC-Lobby',
			date: 'Jahreswechsel 2022/2023',
			position: 'right',
			urllink: 'https://discord.com/channels/665917454626717746/817761730050392094/1058883633433301152'
		},
		{
			title: 'Geburtstag: 3 Jahre Cubyx',
			date: 'Januar 2023',
			position: 'left',
			urllink: 'https://discord.com/channels/665917454626717746/817761730050392094/1063023856601813012'
		},
		{
			title: 'Giveaway: Ostern mit unseren Partner ExpanseHost + Oster-Podcast Verlosung',
			date: 'April 2023',
			position: 'right',
			urllink: 'https://discord.com/channels/665917454626717746/817761730050392094/1093639459658006638'
		},
		{
			title: 'Ende der Mastodon Instanz - social.cubyx.eu',
			date: 'Mai 2023',
			position: 'left',
			urllink: 'https://discord.com/channels/665917454626717746/817761730050392094/1102689268977127427'
		},
		{
			title: '200 Leute auf dem Cubyx Discord',
			date: 'Mai 2023',
			position: 'left',
			urllink: 'https://discord.com/channels/665917454626717746/817761730050392094/1111775085397815416'
		},
		{
			title: 'Veröffentlichung: Discord Statistiken Überblick & Rückblick',
			date: 'Juni 2023',
			position: 'right',
			urllink: 'https://discord.com/channels/665917454626717746/817761730050392094/1114169188341268500'
		},
		{
			title: 'Veröffentlichung: Community Survival-Projekt 1.20 mit GCC',
			date: 'Juni 2023',
			position: 'right',
			urllink: 'https://discord.com/channels/665917454626717746/817761730050392094/1116471445669826631'
		},
		{
			title: 'Update: Discord Server',
			date: 'Juli 2023',
			position: 'left',
			urllink: 'https://discord.com/channels/665917454626717746/817761730050392094/1132729666407497800'
		},
		{
			title: 'Veröffentlichung: Neue Webseite (v0.1.0)',
			date: '10. Oktober 2023',
			position: 'right',
			urllink: 'https://discord.com/channels/665917454626717746/817761730050392094/1161216237020385331'
		}
/* 		{
			title: 'Platzhalter',
			description: 'beschreibung',
			date: 'Monat Jahr',
			position: 'right'
			urllink: 'https://www.cubyx.eu',
		} */
		];
</script>

<div class="m-auto flex w-full justify-center p-8">
	<Timeline items={items.reverse()} />
</div>
