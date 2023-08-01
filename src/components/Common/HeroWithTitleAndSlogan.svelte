<script lang="ts">
  import Hero from "../Hero/Hero.svelte";

  export let img: string;
</script>

<Hero {img}}>
  <div class="dshadow text-center leading-[2rem] md:leading-[3rem] lg:leading-[4rem]">
    <h1 class="uppercase tracking-[.3em]">
      <slot />
    </h1>
    <h3>
      Quadratisch<span class="text-primary">.</span> Praktisch<span class="text-primary">.</span>
      Gut<span class="text-primary">.</span>
    </h3>
  </div>
</Hero>
