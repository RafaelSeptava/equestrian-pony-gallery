<!-- CharacterGallery.svelte -->

<script lang="ts">
  import type { Character, Phase } from "../types/character";
  import PhaseNavigation from "./PhaseNavigation.svelte";
  import CharacterPlaceholder from "./CharacterPlaceholder.svelte";

  export let character: Character;
  export let activePhase: Phase;

  export let onPhaseSelect: (phase: Phase) => void;
</script>

<section aria-label="Character gallery" class="w-full max-w-5xl">
  <div
    class="grid overflow-hidden rounded-3xl shadow-2xl md:grid-cols-[1fr_0.8fr]"
    style={`background-color: ${character.colors.card};`}
  >
    <!-- Image -->
    <div
      class="relative flex min-h-82.5 items-center justify-center p-5 md:min-h-140 md:p-10"
    >
      {#if character.available}
        <div
          class="absolute inset-8 rounded-full opacity-30 blur-3xl"
          style={`background-color: ${character.colors.primary};`}
        ></div>

        <img
          src={character.phases[activePhase]}
          alt={`${character.name} - ${activePhase}`}
          class="relative z-10 w-auto max-w-full max-h-125 rounded-2xl object-contain transition-all duration-300"
        />
      {:else}
        <CharacterPlaceholder
          characterName={character.name}
          primaryColor={character.colors.primary}
        />
      {/if}
    </div>

    <!-- Character Info -->
    <div class="flex flex-col justify-center p-6 md:p-10">
      <span
        class="mb-3 w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
      >
        {character.available ? "" : "Coming Soon"}
      </span>

      <h2 class="text-3xl font-black md:text-5xl">
        {character.name}
      </h2>

      <p class="mt-2 text-lg font-semibold opacity-80">
        {character.role}
      </p>

      <div class="my-7 h-px w-full bg-white/10"></div>

      {#if character.available}
        <PhaseNavigation
          {activePhase}
          secondaryColor={character.colors.secondary}
          backgroundColor={character.colors.background}
          onSelect={onPhaseSelect}
        />
      {:else}
        <p class="text-sm leading-6 opacity-70">
          This character is already available in the navigation menu, but the
          gallery content and character phases will be added in a later update.
        </p>
      {/if}
    </div>
  </div>
</section>
