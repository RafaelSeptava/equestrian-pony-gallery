<!-- App.svelte -->

<script lang="ts">
  import Header from "./lib/components/Header.svelte";
  import CharacterNavigation from "./lib/components/CharacterNavigation.svelte";
  import CharacterGallery from "./lib/components/CharacterGallery.svelte";
  import Footer from "./lib/components/Footer.svelte";

  import { characters } from "./lib/data/characters";
  import type { Phase } from "./lib/types/character";

  let activeCharacterIndex = 0;
  let activePhase: Phase = "unicorn";

  let touchStartX = 0;
  let touchEndX = 0;

  $: activeCharacter = characters[activeCharacterIndex];

  function selectCharacter(index: number) {
    activeCharacterIndex = index;
    activePhase = "unicorn";
  }

  function previousCharacter() {
    activeCharacterIndex =
      (activeCharacterIndex - 1 + characters.length) % characters.length;

    activePhase = "unicorn";
  }

  function nextCharacter() {
    activeCharacterIndex = (activeCharacterIndex + 1) % characters.length;

    activePhase = "unicorn";
  }

  function selectPhase(phase: Phase) {
    if (!activeCharacter.available) {
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
  class="min-h-screen flex flex-col overflow-hidden transition-colors duration-500"
  style={`background-color: ${activeCharacter.colors.background}; color: ${activeCharacter.colors.text};`}
>
  <Header cardColor={activeCharacter.colors.card} />

  <main
    class="flex flex-1 flex-col items-center px-4 py-6 md:px-8 md:py-10"
    on:touchstart={handleTouchStart}
    on:touchend={handleTouchEnd}
  >
    <CharacterNavigation
      {characters}
      activeIndex={activeCharacterIndex}
      primaryColor={activeCharacter.colors.primary}
      secondaryColor={activeCharacter.colors.secondary}
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

  <Footer cardColor={activeCharacter.colors.card} />
</div>
