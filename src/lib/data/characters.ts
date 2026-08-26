// characters.ts

import type { Character, Phase } from "../types/character";

const emptyPhases = (): Record<Phase, string> => ({
  infant: "",
  filly: "",
  unicorn: "",
  alicorn: "",
  future: "",
});

export const characters: Character[] = [
  {
    name: "Twilight Sparkle",
    role: "Element of Magic",

    colors: {
      background: "#132248",
      card: "#243870",
      primary: "#652D87",
      secondary: "#EA428B",
      text: "#FFFFFF",
    },

    phases: {
      infant: new URL(
        "/src/assets/twilight-sparkle/twilight-sparkle-infant.webp",
        import.meta.url,
      ).href,
      filly: new URL(
        "/src/assets/twilight-sparkle/twilight-sparkle-filly.webp",
        import.meta.url,
      ).href,
      unicorn: new URL(
        "/src/assets/twilight-sparkle/twilight-sparkle-unicorn.webp",
        import.meta.url,
      ).href,
      alicorn: new URL(
        "/src/assets/twilight-sparkle/twilight-sparkle-alicorn.webp",
        import.meta.url,
      ).href,
      future: new URL(
        "/src/assets/twilight-sparkle/twilight-sparkle-future.webp",
        import.meta.url,
      ).href,
    },

    available: true,
  },

  {
    name: "Rainbow Dash",
    role: "Element of Loyalty",

    colors: {
      background: "#",
      card: "#",
      primary: "#",
      secondary: "#",
      text: "#",
    },

    phases: emptyPhases(),
    available: false,
  },

  {
    name: "Applejack",
    role: "Element of Honesty",

    colors: {
      background: "#",
      card: "#",
      primary: "#",
      secondary: "#",
      text: "#",
    },

    phases: emptyPhases(),
    available: false,
  },

  {
    name: "Fluttershy",
    role: "Element of Kindness",

    colors: {
      background: "#",
      card: "#",
      primary: "#",
      secondary: "#",
      text: "#",
    },

    phases: emptyPhases(),
    available: false,
  },

  {
    name: "Rarity",
    role: "Element of Generosity",

    colors: {
      background: "#",
      card: "#",
      primary: "#",
      secondary: "#",
      text: "#",
    },

    phases: emptyPhases(),
    available: false,
  },

  {
    name: "Pinkie Pie",
    role: "Element of Laughter",

    colors: {
      background: "#",
      card: "#",
      primary: "#",
      secondary: "#",
      text: "#",
    },

    phases: emptyPhases(),
    available: false,
  },
];
