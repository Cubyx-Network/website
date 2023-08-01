<script lang="ts">
  import type { TeamMember } from "@prisma/client";

  export let teamMember: TeamMember;
</script>

<a class="card w-full bg-secondary p-4 text-base-content no-underline" href="#{teamMember.id}">
  <figure>
    <img src={teamMember.avatar ?? "/img/logo/netzwerk.png"} alt={teamMember.name} class="w-full" />
  </figure>
  <div class="card-title m-auto mt-4">
    <p class="text-xl sm:text-2xl">{teamMember.name}</p>
  </div>
</a>
