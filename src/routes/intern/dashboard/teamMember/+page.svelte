<script lang="ts">
	import TeamMemberCard from '../../../../components/Team/TeamMemberCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-col items-center">
	<div class="flex items-center gap-8">
		<h3>Teammitglieder</h3>
		<a class="btn-primary btn" href="/intern/dashboard/teamMember/create"> Neues Teammitglied </a>
	</div>

	{#if data.teamMembers.length === 0}
		<p>Keine Teammitglieder gefunden</p>
	{/if}

	<div class="m-auto w-2/3 space-y-4">
		{#each data.teamMembers as member}
			<div>
				<TeamMemberCard teamMember={member} />
				<div class="flex w-full justify-end px-8">
					<form method="POST" class="join join-horizontal">
						<a class="btn-neutral join-item btn" href="teamMember/{member.id}/edit">Bearbeiten</a>
						<input type="hidden" name="memberId" value={member.id} />
						<button class="btn-error join-item btn" type="submit" formaction="?/deleteTeamMember">
							Löschen
						</button>
					</form>
				</div>
			</div>
		{/each}
	</div>
</div>
