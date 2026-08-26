<!-- Header.svelte -->

<script lang="ts">
  export let cardColor: string;
</script>

<header
  class="flex items-center justify-center px-4 py-5 shadow-lg"
  style={`background-color: ${cardColor};`}
>
  <div class="text-center">
    <!-- <p class="mb-1 text-xs font-semibold tracking-[0.3em] opacity-70">
      FRIENDSHIP IS MAGIC
    </p> -->

    <h1 class="text-2xl font-black tracking-tight md:text-4xl">
      Equestrian Pony Gallery
    </h1>
  </div>
</header>
