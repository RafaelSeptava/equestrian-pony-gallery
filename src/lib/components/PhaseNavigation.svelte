<!-- src/lib/components/PhaseNavigation.svelte -->

<script lang="ts">
  import type { Character, Phase } from "../types/character";

  export let character: Character;
  export let activePhase: Phase;
  export let onSelect: (phase: Phase) => void;

  // Mengambil daftar fase yang hanya dimiliki oleh karakter aktif
  $: availablePhases = Object.keys(character.phases) as Phase[];
</script>

<div>
  <h3 class="mb-3 text-sm font-bold tracking-widest opacity-70">
    CHARACTER PHASE
  </h3>

  <div
    class="grid grid-cols-2 gap-2 sm:grid-cols-5 md:grid-cols-2 lg:grid-cols-5"
  >
    {#each availablePhases as phase}
      <button
        type="button"
        aria-pressed={activePhase === phase}
        class={`rounded-xl px-3 py-3 text-sm font-bold capitalize text-white shadow transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/80 ${
          activePhase === phase
            ? "bg-(--theme-secondary)"
            : "bg-(--theme-primary)/40 hover:bg-(--theme-primary)/60"
        }`}
        on:click={() => onSelect(phase)}
      >
        {phase.replace("_", " ")}
      </button>
    {/each}
  </div>

  <p class="mt-5 text-sm leading-6 opacity-70">
    Select {character.name}'s phase to change the character's appearance in the
    gallery.
  </p>
</div>
