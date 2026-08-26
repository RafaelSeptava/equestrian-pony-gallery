<!-- PhaseNavigation.svelte -->

<script lang="ts">
  import type { Phase } from "../types/character";

  export let activePhase: Phase;
  export let secondaryColor: string;
  export let backgroundColor: string;

  export let onSelect: (phase: Phase) => void;

  const phases: Phase[] = ["infant", "filly", "unicorn", "alicorn", "future"];
</script>

<div>
  <h3 class="mb-3 text-sm font-bold tracking-widest opacity-70">
    CHARACTER PHASE
  </h3>

  <div
    class="grid grid-cols-2 gap-2 sm:grid-cols-5 md:grid-cols-2 lg:grid-cols-5"
  >
    {#each phases as phase}
      <button
        type="button"
        aria-pressed={activePhase === phase}
        class="rounded-xl px-3 py-3 text-sm font-bold capitalize shadow transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/80"
        style={`background-color: ${
          activePhase === phase ? secondaryColor : backgroundColor
        }; color: #FFFFFF;`}
        on:click={() => onSelect(phase)}
      >
        {phase}
      </button>
    {/each}
  </div>

  <p class="mt-5 text-sm leading-6 opacity-70">
    Select Twilight Sparkle's phase to change the character's appearance in the
    gallery.
  </p>
</div>
