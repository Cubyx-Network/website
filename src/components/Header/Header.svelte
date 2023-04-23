<script lang="ts">
    import HeaderMobile from './HeaderMobile.svelte';
    import HeaderLinkWrapper from './HeaderLinkWrapper.svelte';
    import HeaderLink from './HeaderLink.svelte';
    import HeaderLogo from './HeaderLogo.svelte';

    export let links: { link: string, text: string }[] = [];

    let leftLinks = [];
    let rightLinks = [];

    for (let i = 0; i < links.length; i++) {
        if (i < links.length / 2) {
            leftLinks.push(links[i]);
        } else {
            rightLinks.push(links[i]);
        }
    }
</script>

<nav class="fixed w-full h-24 gap-5 items-center justify-center bg-background p-1 z-10 hidden lg:flex">
    <HeaderLinkWrapper justify="end">
        {#each leftLinks as link}
            <HeaderLink link={link.link} text={link.text} />
        {/each}
    </HeaderLinkWrapper>

    <HeaderLogo />

    <HeaderLinkWrapper justify="start">
        {#each rightLinks as link}
            <HeaderLink link={link.link} text={link.text} />
        {/each}
    </HeaderLinkWrapper>


</nav>

<HeaderMobile links={links} />