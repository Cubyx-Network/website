<script>
  import { Icon } from "svelte-awesome";
  import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord";
  import { signIn } from "@auth/sveltekit/client";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons/faXmarkCircle";

  const error = $page.url.searchParams.get('error')

  onMount(() => {
    if($page.data.session) goto('/intern/dashboard')
  })
</script>

<div class="hero min-h-[60vh]">
  <div class="hero-content text-center flex flex-col gap-4">
    {#if error}
      <div class="alert alert-error">
        <Icon data={faXmarkCircle} scale={2} />
        <p>Die Anmeldung konnte nicht durchgeführt werden. Bist du zur Anmeldung berechtigt?</p>
      </div>
    {/if}

    <h1>Interner Bereich - Login</h1>
    <button class="btn btn-secondary btn-lg" on:click={() => signIn("discord")}><Icon data={faDiscord} /> Mit Discord anmelden</button>
    <a href="/static" class="btn btn-ghost">Zurück zur Startseite</a>
  </div>
</div>
