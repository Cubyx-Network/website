<script lang="ts">
	import SectionWithImageAndText from '../components/Common/SectionWithImageAndText.svelte';
	import SectionSpacer from '../components/Common/SectionSpacer.svelte';
	import AboutTimeline from '../components/Timeline/AboutTimeline.svelte';
	import HeroWithTitleAndSlogan from '../components/Common/HeroWithTitleAndSlogan.svelte';
	import { metadata } from '$lib/seo';

	$metadata = {
		title: 'Home',
		description: 'Willkommen auf der Website vom Cubyx Network.',
		openGraph: {
			title: 'Home',
			description: 'Willkommen auf der Website vom Cubyx Network.'
		}
	};
</script>

<HeroWithTitleAndSlogan img="/img/home/hero.png">Cubyx Network</HeroWithTitleAndSlogan>

<div class="my-12 text-center leading-tight">
	<h2>Herzlich Willkommen</h2>
	<h4>auf der Website vom Cubyx Network</h4>
</div>

<SectionWithImageAndText
	text="Wir sind eine Gemeinschaft von begeisterten Minecraft-Spielern, die ihre Leidenschaft für das Bauen, Commanding,
		sowie Development und die Kreativität teilen. Hier findest du Informationen über unsere Projekte und wie du
		Mitglied werden kannst. Wir legen Wert auf Teamarbeit und eine freundliche Umgebung. Wenn du eine Leidenschaft für
		Minecraft hast, bist du bei uns richtig!"
	img="/img/home/boat.png"
	imgAlt="Boat auf Wasser"
/>

<SectionSpacer />

<h2 class="text-center">Über Cubyx</h2>
<AboutTimeline />
