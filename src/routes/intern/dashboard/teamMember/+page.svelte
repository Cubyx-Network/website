<script lang="ts">
  import CreateTeamMemberForm from "../../../../components/Intern/CreateTeamMemberForm.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

	let openCreateTeamMemberForm = false;
</script>

<CreateTeamMemberForm bind:open={openCreateTeamMemberForm} />

<div class="flex items-center gap-8">
  <h3>Teammitglieder</h3>
  <button class="btn-primary btn" on:click={() => (openCreateTeamMemberForm = true)}>
    Neues Teammitglied
  </button>
</div>

{#if data.teamMembers.length === 0}
	<p>Keine Teammitglieder gefunden</p>
{/if}

{#each data.teamMembers as member}
	<div class="card bg-secondary">
		<div class="card-body">
			<div class="card-title">
				<h2>{member.name}</h2>
			</div>
		</div>
	</div>
{/each}
