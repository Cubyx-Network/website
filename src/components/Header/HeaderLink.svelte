<script lang="ts">
    export let text: string;
    export let link: string;
		export let onClick: () => void;
</script>

<a href="{link}" class="font-medium text-xl uppercase" on:click={onClick}>{text}</a>