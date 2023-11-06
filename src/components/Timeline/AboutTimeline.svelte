<script lang="ts">
	import Timeline, { type TimelineItemType } from './Timeline.svelte';

	let items: TimelineItemType[] = [
		{
			title: 'Gründung vom Cubyx Team',
			date: 'Januar 2020',
			position: 'left',
			description: 'Das Cubyx Team wird gegründet von Oyo321, Z0eyby und L__Master mit Jahresbeginn.\n Veröffentlichung & Geburtstag des Teams wurde der (11.) 12.01.2020  ',
		},
		{
			title: 'Aufbau des Netzwerks',
			date: 'März 2020',
			position: 'right',
			description: 'Ab der Minecraft Java Version 1.15.2 entstand das 1. MC Netzwerk bei Cubyx.'
		},
		{
			title: 'Start vom Tecta Minecraft Survivalprojekt',
			date: '8. August 2020',
			position: 'left',
			href: 'https://youtu.be/qxq2YY_QTaE?si=PxOAqWG3Bulhv6ci',
			description: 'Cubyx startet das 1. Java Survival Projekt: Rollenspiel, Story, Hosting Sponsor war LubaLP Hosting'
		},
		{
			title: 'Ende vom Tecta Minecraft Surivalprojekt',
			date: '27. September 2020',
			position: 'right',
			href: 'https://www.youtube.com/watch?v=IaKLq10v_Y0&list=PLxEigF3eJxpvQ4LNtyNSsQPScS0n15qnd&index=5',
			description: 'Nach knapp 2 Monaten endete das Projekt. Allerdings wurde die Story von Tecta bis zum Ende des Projekts nicht vollständig ausgeführt.'
		},
		{
			title: 'Geburtstag: 1 Jahr Cubyx',
			date: 'Januar 2022',
			position: 'left'
		},
		{
			title: 'Oster Event 2021',
			date: 'April 2021',
			position: 'right',
			href: 'https://discord.com/channels/665917454626717746/817761730050392094/827910929710055446',
			description: 'Ostereier suchen und Community Preise abstauben.'
		},
		{
			title: 'Neue Winterlobby mit Weihnachtsevent 2021',
			date: 'Dezember 2021',
			position: 'left',
			description: 'Das Netzwerk wurde nach einer Auszeit wiederveröffentlicht mit einer Winterlobby und einem Geschenkesuche Event.',
			href: 'https://discord.com/channels/665917454626717746/817761730050392094/923893282671575111'
		},
		{
			title: 'Geburtstag: 2 Jahre Cubyx',
			date: 'Januar 2022',
			position: 'right',
			href: 'https://discord.com/channels/665917454626717746/817761730050392094/930476815615676466'
		},
		{
			title: 'Veröffentlichung: Knock-out Minigame',
			date: 'Februar 2022',
			position: 'left',
			description: 'Simples Knockout mit verschiedenen Items auf vielen verschiedenen Maps!',
			href: 'https://discord.com/channels/665917454626717746/817761730050392094/944267232358305832'
		},
		{ 
			title: 'Veröffentlichung: Adventure in Viking Village',
			date: 'April 2022',
			position: 'right',
			description: 'In Zusammenarbeit mit RareLoot entand dieses Berockprojekt für den Minecraft Marketplace.',
			href: 'https://discord.com/channels/665917454626717746/817761730050392094/963908355649306724'
		},
		{
			title: 'Cubyx Network Entertainment auf YouTube & 1. Podcast Folge',
			date: 'September 2022',
			position: 'left',
			description: 'Der "CNE" YouTube 2. Kanal ist beginn des Entertainments vom Cubyx Network mit Podcasts, lustigen Shorts & co.',
			href: 'https://discord.com/channels/665917454626717746/817761730050392094/1021284617275330560'
		},
		{
			title: 'Social Media: Mastodon Instanz - social.cubyx.eu',
			date: 'Dezember 2022',
			position: 'right',
			description: 'Eigene Mastodon Plattform für Gaming und co.',
			href: 'https://discord.com/channels/665917454626717746/817761730050392094/1044331001146523728'
		},
		{
			title: 'Geburtstag: 3 Jahre Cubyx',
			date: 'Januar 2023',
			position: 'left',
			href: 'https://discord.com/channels/665917454626717746/817761730050392094/1063023856601813012'
		},
		{
			title: 'Social Media: Ende der Mastodon Instanz - social.cubyx.eu',
			date: 'Mai 2023',
			position: 'right',
			description: 'Aufgrund mangelnder Nutzung und Nutzerzahlen, wurde die Instanz wieder eingestellt.',
			href: 'https://discord.com/channels/665917454626717746/817761730050392094/1102689268977127427'
		},
		{
			title: 'Java 1.20 - Community Survival-ProjektDS mit GCC',
			date: 'Juni 2023',
			position: 'left',
			href: 'https://discord.com/channels/665917454626717746/817761730050392094/1116471445669826631'
		},
		{
			title: 'Veröffentlichung: Neue Webseite (v0.1.0)',
			date: '10. Oktober 2023',
			position: 'right',
			description: 'Komplett selbst entwickelte Webseite mit moderner Projektstrukutur.',
			href: 'https://discord.com/channels/665917454626717746/817761730050392094/1161216237020385331'
		}
		];
</script>

<div class="m-auto flex w-full justify-center p-8">
	<Timeline items={items.reverse()} />
</div>
<div>
	<p class="m-auto flex w-full justify-center p-4">Hinweis: Wir geben keine Garantie auf Vollständigkeit und Korrektheit dieser Informationen. 
	<br> Dies kann nicht gewähleistet werden auf Grund von mangelnder Datenlage, Informationseinschränkungen durch Cubyx & keiner Mehrfachüberprüfung durch ein weitere Teammitglied.</p>
</div>