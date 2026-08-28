<!-- src/lib/components/CharacterPlaceholder.svelte -->

<script lang="ts">
  export let characterName: string;
</script>

<div class="relative z-10 text-center">
  <div
    class="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-twilight-primary text-5xl text-white shadow-xl"
  >
    ✨
  </div>

  <h2 class="text-2xl font-black md:text-3xl">{characterName}</h2>

  <p class="mt-2 opacity-70">Character gallery coming soon</p>
</div>
