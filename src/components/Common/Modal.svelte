<script lang="ts">
  import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";
  import { Icon } from "svelte-awesome";

  export let open = false;
  export let closeable = true;
</script>

<dialog class="modal modal-bottom bg-secondary sm:modal-middle" {open}>
  <div class="modal-box">
    {#if closeable}
      <button class="btn btn-ghost absolute right-2 top-2" on:click={() => (open = false)}>
        <Icon data={faClose} />
      </button>
    {/if}

    <slot />
  </div>
</dialog>
