<script>
	import { generateTitle } from "$lib/titleGenerator";
	import SectionWithImageAndText from "../components/Common/SectionWithImageAndText.svelte";
	import SectionSpacer from "../components/Common/SectionSpacer.svelte";
	import { page } from "$app/stores";
	import ArticlePreview from "../components/News/ArticlePreview.svelte";
	import AboutTimeline from "../components/Timeline/AboutTimeline.svelte";
	import HeroWithTitleAndSlogan from "../components/Common/HeroWithTitleAndSlogan.svelte";
</script>

<svelte:head>
	<title>{generateTitle('Home')}</title>
</svelte:head>

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

<h2 class="text-center">Neuigkeiten</h2>
<div class="m-auto grid w-full grid-cols-2 gap-8 p-8 lg:w-[90%] lg:grid-cols-3 xl:w-[70%]">
	{#each $page.data.articles.slice(0, 3) as article}
		<ArticlePreview {article} />
	{/each}
</div>

<SectionSpacer />

<h2 class="text-center">Über Cubyx</h2>
<AboutTimeline />
