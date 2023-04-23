<script>
    import '../app.css';
    import Header from '../components/Header/Header.svelte';
    import HeaderDummy from '../components/Header/HeaderDummy.svelte';

    let headerConfig = [
        {text: "Home", link: "/"},
        {text: "Das Team", link: "/team"},
        {text: "Projekte", link: "/projekte"},
        {text: "Aktuelles", link: "/news"},
        {text: "Partner", link: "/partner"},
        {text: "Discord", link: "https://cubyx.eu/discord"},
    ];
</script>

<Header links={headerConfig} />

<main>
    <HeaderDummy />
    <slot />
</main>

