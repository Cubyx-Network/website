<script>
    import HeaderArrow from './HeaderArrow.svelte';

    export let rotateDown;
</script>

<div class="flex items-center justify-center gap-5 w-max">
    <HeaderArrow rotation={rotateDown ? 270 : 180} largeRotation=0 />
    <img src="/img/logo/netzwerk.png" alt="Cubyx Netzwerk Logo" class="w-20" />
    <HeaderArrow rotation={rotateDown ? -90 : 0} largeRotation=180 />
</div>