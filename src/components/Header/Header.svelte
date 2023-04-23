<script>
    import HeaderLink from "./HeaderLink.svelte";
    import HeaderLinkWrapper from "./HeaderLinkWrapper.svelte";
    import HeaderLogo from "./HeaderLogo.svelte";
</script>

<nav class="flex gap-5 items-center justify-center bg-background p-1">
    <HeaderLinkWrapper justify="end">
        <HeaderLink link="https://google.com" text="Home" />
        <HeaderLink link="https://google.com" text="Das Team" />
        <HeaderLink link="https://google.com" text="Projekte" />
    </HeaderLinkWrapper>

    <HeaderLogo />

    <HeaderLinkWrapper justify="start">
        <HeaderLink link="https://google.com" text="Aktuelles" />
        <HeaderLink link="https://google.com" text="Partner" />
        <HeaderLink link="https://google.com" text="Discord" />
    </HeaderLinkWrapper>
</nav>