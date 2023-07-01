<script lang="ts">
	import { marked } from 'marked';
	import { page } from '$app/stores';
	import parseMD from 'parse-md';
	import { Buffer } from 'buffer/';

	const input = Buffer.from($page.data.article.content, 'base64').toString('utf-8');
	const html = marked(parseMD(input).content);
</script>

<section id="contentArea">
	<h1 class="mb-6 leading-none">{$page.data.article.title}</h1>
	{@html html}
</section>
