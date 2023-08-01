<script lang="ts">
	export let text: string;
	export let link: string;
	export let onClick: () => void;
</script>

<a href={link} class="text-xl text-base-content font-medium uppercase" on:click={onClick}>{text}</a>
