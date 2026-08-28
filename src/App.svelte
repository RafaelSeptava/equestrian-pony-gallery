<!-- src/App.svelte -->

<script lang="ts">
  import Header from "./lib/components/Header.svelte";
  import CharacterNavigation from "./lib/components/CharacterNavigation.svelte";
  import CharacterGallery from "./lib/components/CharacterGallery.svelte";
  import Footer from "./lib/components/Footer.svelte";

  import { characters } from "./lib/data/characters";
  import { getThemeStyle } from "./lib/utils/theme";
  import type { Character, Phase } from "./lib/types/character";

  let activeCharacterIndex = 0;
  let activePhase: Phase = "unicorn";

  let touchStartX = 0;
  let touchEndX = 0;

  $: activeCharacter = characters[activeCharacterIndex];

  function getDefaultPhase(character: Character): Phase {
    const phases: Phase[] = [
      "infant",
      "filly",
      "earth_pony",
      "unicorn",
      "pegasus",
      "alicorn",
      "future",
    ];

    return phases.find((phase) => character.phases[phase]) ?? "infant";
  }

  function selectCharacter(index: number) {
    activeCharacterIndex = index;
    activePhase = getDefaultPhase(characters[index]);
  }

  function previousCharacter() {
    activeCharacterIndex =
      (activeCharacterIndex - 1 + characters.length) % characters.length;

    activePhase = getDefaultPhase(characters[activeCharacterIndex]);
  }

  function nextCharacter() {
    activeCharacterIndex = (activeCharacterIndex + 1) % characters.length;

    activePhase = getDefaultPhase(characters[activeCharacterIndex]);
  }

  function selectPhase(phase: Phase) {
    if (!activeCharacter.available) {
      return;
    }

    if (!activeCharacter.phases[phase]) {
      return;
    }

    activePhase = phase;
  }

  function handleTouchStart(event: TouchEvent) {
    touchStartX = event.changedTouches[0].screenX;
  }

  function handleTouchEnd(event: TouchEvent) {
    touchEndX = event.changedTouches[0].screenX;

    const distance = touchEndX - touchStartX;

    if (Math.abs(distance) < 50) {
      return;
    }

    if (distance < 0) {
      nextCharacter();
    } else {
      previousCharacter();
    }
  }
</script>

<svelte:head>
  <title>Equestrian Pony Gallery</title>

  <meta
    name="description"
    content="My Little Pony: Friendship is Magic character gallery."
  />
</svelte:head>

<div
  class="flex min-h-screen flex-col overflow-hidden bg-(--theme-background) text-(--theme-text) transition-colors duration-500"
  style={getThemeStyle(activeCharacter)}
>
  <Header />

  <main
    class="flex flex-1 flex-col items-center px-4 py-6 md:px-8 md:py-10"
    on:touchstart={handleTouchStart}
    on:touchend={handleTouchEnd}
  >
    <CharacterNavigation
      {characters}
      activeIndex={activeCharacterIndex}
      onPrevious={previousCharacter}
      onNext={nextCharacter}
      onSelect={selectCharacter}
    />

    <CharacterGallery
      character={activeCharacter}
      {activePhase}
      onPhaseSelect={selectPhase}
    />

    <p class="mt-5 text-center text-xs font-medium opacity-50">
      ← Swipe left or right to explore other characters →
    </p>
  </main>

  <Footer />
</div>
