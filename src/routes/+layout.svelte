<script>
    import '../app.css';
    import Header from '../components/Header/Header.svelte';
    import Footer from '../components/Footer/Footer.svelte';

    let headerConfig = [
        {text: "Home", link: "/"},
        {text: "Das Team", link: "/team"},
        {text: "Projekte", link: "/projekte"},
        {text: "Partner", link: "/partner"},
        {text: "Bewerben", link: "/bewerben"},
        {text: "Discord", link: "https://cubyx.eu/discord"},
    ];
</script>

<Header links={headerConfig} />

<main class='bg-background'>
    <slot />
</main>

<Footer />