<script lang="ts">
	export let text: string;
	export let link: string;
	export let onClick: () => void;
</script>

<a href={link} class="text-xl font-medium uppercase" on:click={onClick}>{text}</a>
