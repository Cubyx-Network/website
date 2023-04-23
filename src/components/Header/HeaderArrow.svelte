<script lang="ts">
    import {Icon} from "svelte-awesome";
    import {faChevronLeft} from "@fortawesome/free-solid-svg-icons/faChevronLeft";

    export let flip: boolean;
</script>

<div class="w-20 h-20 flex items-center justify-center {flip && 'rotate-180'}">
    <Icon data="{faChevronLeft}" scale="2" />
    <Icon data="{faChevronLeft}" scale="3" />
</div>