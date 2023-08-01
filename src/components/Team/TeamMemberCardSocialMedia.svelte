<script lang="ts">
  import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
  import { Icon } from "svelte-awesome";

  export let icon: IconDefinition;
</script>

<div class="text-xl w-full flex gap-3 items-center">
  <Icon data={icon} scale={1.5} />
  <slot />
</div>
