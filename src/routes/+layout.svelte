<script>
    import '../app.css';
    import Header from '../components/Header/Header.svelte';
    import HeaderDummy from '../components/Header/HeaderDummy.svelte';
</script>

<Header />

<main>
    <HeaderDummy />
    <slot />
</main>