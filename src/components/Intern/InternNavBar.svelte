<script>
  import { page } from "$app/stores";
  import { signOut } from "@auth/sveltekit/client";
</script>

<div class="navbar bg-secondary">
  <div class="flex-1">
    <p class="font-bold">CUBYX INTERN DASHBOARD</p>
  </div>

  <div class="flex-none space-x-8">
    <div>
      <p class="font-bold">@{$page.data.session?.user?.name}</p>
      <button on:click={() => signOut()} class="btn btn-error btn-sm w-full">Ausloggen</button>
    </div>
    <div class="avatar">
      <div class="w-16 rounded-full">
        <img src={$page.data.session?.user?.image} alt="Profilbild" />
      </div>
    </div>
  </div>
</div>
