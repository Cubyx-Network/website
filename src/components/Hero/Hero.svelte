<script lang="ts">
    export let img: string;
    export let alt: string;
</script>

<div class="relative w-full h-60">
    <img src={img} alt={alt} class="w-full h-full object-cover" />
    <div class="absolute top-0 right-0 w-full h-full flex justify-center items-center">
        <slot />
    </div>
</div>

<style>
    div {
        background-size: cover;
        background-position: center;
    }
</style>