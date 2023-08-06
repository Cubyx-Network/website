<script lang="ts">
	import { page } from '$app/stores';
	import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
	import { Icon } from 'svelte-awesome';
	import Formular from '../../../../../components/Common/Formular.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let error: string | null = null;

	let avatar: string = '';

	$: if (avatar && !avatar.toString().includes('cdn.cubyx.eu')) {
		error = 'Der Avatar muss auf cdn.cubyx.eu liegen. Siehe #send-to-cdn im Discord.';
	} else {
		error = null;
	}
</script>

<div class="m-auto w-1/2">
	<a class="btn-ghost btn" href=".">
		<Icon data={faArrowCircleLeft} scale={2} />
		Zurück
	</a>

	<div class="card bg-secondary">
		<div class="card-body">
			<Formular title="Neues Teammitglied" class="flex flex-col gap-2">
				<label for="name">Name: <span class="text-error">*</span></label>
				<input type="text" id="name" name="name" required />

				<label for="intro">Beschreibung: <span class="text-error">*</span></label>
				<textarea id="intro" class="textarea-bordered textarea" name="intro" required />

				<label for="avatar">Avatar URL (cdn.cubyx.eu):</label>
				<input type="text" id="avatar" name="avatar" bind:value={avatar} />

				<label for="youtube">YouTube:</label>
				<input type="text" id="youtube" name="youtube" />

				<label for="mastodon">Mastodon:</label>
				<input type="text" id="mastodon" name="mastodon" />

				<label for="discord">Discord:</label>
				<input type="text" id="discord" name="discord" />

				<label for="twitch">Twitch:</label>
				<input type="text" id="twitch" name="twitch" />

				<label for="reddit">Reddit:</label>
				<input type="text" id="reddit" name="reddit" />

				<label for="github">GitHub:</label>
				<input type="text" id="github" name="github" />

				<label for="status">Mitgliedschaftsstatus: <span class="text-error">*</span></label>
				<select id="status" name="status" class="select-bordered select" required>
					{#each data.statuses as status}
						<option value={status.id}>{status.name}</option>
					{/each}
				</select>

				{#if ($page.form && $page.form.error) || error}
					<div class="alert alert-error">{error || $page.form.error}</div>

					<input type="submit" value="Erstellen" class="btn-primary btn-disabled btn" />
				{:else}
					<input type="submit" value="Erstellen" class="btn-primary btn" />
				{/if}
			</Formular>
		</div>
	</div>
</div>
