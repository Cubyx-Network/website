<script lang="ts">
  import { twMerge } from "tailwind-merge";

  export let title: string | undefined = undefined;
  export let description: string | undefined = undefined;

  export let method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'POST';
  export let action: string | undefined = undefined;
  export let className: string | undefined = undefined;

  export { className as class };
</script>

<form {action} {method} class={twMerge('space-y-4', className)}>
  <h3 class="text-2xl font-bold">{title ?? ''}</h3>
  <p>{description ?? ''}</p>
  <slot />
</form>
