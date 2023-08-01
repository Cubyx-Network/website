<script lang="ts">
  import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
  import { Icon } from "svelte-awesome";

  export let icon: IconDefinition;
  export let color = "primary";
</script>

<div class="badge-primary badge-secondary badge-neutral badge-accent hidden"></div>

<div class="badge font-bold badge-{color} gap-2">
  <Icon data={icon} />
  <slot />
</div>
