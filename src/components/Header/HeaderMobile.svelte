<script lang="ts">
    import HeaderLogo from './HeaderLogo.svelte';
    import { fly } from 'svelte/transition';
    import HeaderLink from './HeaderLink.svelte';

    export let links: { link: string, text: string }[] = [];

    let isOpen = false;

    function handleClick () {
        isOpen = !isOpen;
    }
</script>

<nav class="fixed w-full h-24 flex gap-5 items-center justify-center bg-background_darker p-1 z-10 flex lg:hidden">
    <div on:click={handleClick} class='z-10'>
        <HeaderLogo rotateDown={isOpen} />
    </div>

    {#if isOpen}
        <div transition:fly="{{ y: -200, duration: 300 }}" class='absolute top-0 bg-background_darker z-0 w-full h-screen flex flex-col items-center justify-center h-screen gap-5'>
            {#each links as link}
                    <HeaderLink link={link.link} text={link.text} onClick={handleClick} />
            {/each}
        </div>
    {/if}
</nav>