<!-- CharacterNavigation.svelte -->

<script lang="ts">
  import type { Character } from "../types/character";

  export let characters: Character[];
  export let activeIndex: number;
  export let primaryColor: string;
  export let secondaryColor: string;

  export let onPrevious: () => void;
  export let onNext: () => void;
  export let onSelect: (index: number) => void;
</script>

<nav
  aria-label="Character navigation"
  class="mb-6 flex w-full max-w-5xl items-center justify-between gap-3"
>
  <button
    type="button"
    aria-label="Previous character"
    class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xl font-bold shadow-lg transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/80"
    style={`background-color: ${primaryColor};`}
    on:click={onPrevious}
  >
    ⮜
  </button>

  <div class="flex min-w-0 flex-1 justify-center gap-2 overflow-x-auto px-1">
    {#each characters as character, index}
      <button
        type="button"
        aria-label={`Pilih ${character.name}`}
        aria-current={activeIndex === index ? "true" : undefined}
        class="min-w-max1 rounded-full px-3 py-2 text-xs font-bold shadow transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/80 md:px-4 md:text-sm"
        style={`background-color: ${
          activeIndex === index ? secondaryColor : character.colors.card
        }; color: #FFFFFF; opacity: ${character.available ? "1" : "0.55"};`}
        on:click={() => onSelect(index)}
      >
        {character.name}
      </button>
    {/each}
  </div>

  <button
    type="button"
    aria-label="Next character"
    class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xl font-bold shadow-lg transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/80"
    style={`background-color: ${primaryColor};`}
    on:click={onNext}
  >
    ➤
  </button>
</nav>
