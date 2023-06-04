<script lang="ts">
    import { Icon } from 'svelte-awesome';
    import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';

    export let rotation: 0 | 90 | 180 | -90 | 270 = 0;
    export let largeRotation: 0 | 90 | 180 | -90 | 270 = 0;
</script>

<div class="transition-all duration-[500ms] w-20 h-20 flex items-center justify-center rotate-[{rotation}deg] lg:rotate-[{largeRotation}deg]">
    <Icon data="{faChevronLeft}" scale="2" />
    <Icon data="{faChevronLeft}" scale="3" />
</div>

<!-- Ignore me, im just for tailwindcss -->
<div class='rotate-[90deg] rotate-[270deg] rotate-[180deg] rotate-[0deg] rotate-[-90deg] lg:rotate-[90deg] lg:rotate-[270deg] lg:rotate-[180deg] lg:rotate-[0deg] lg:rotate-[-90deg] hidden'></div>