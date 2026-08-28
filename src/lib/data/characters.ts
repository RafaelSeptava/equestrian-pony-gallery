// src/lib/data/characters.ts

import type { Character, Phase } from "../types/character";

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

    palette: ["#132248", "#243870", "#652D87", "#EA428B", "#FFFFFF"],

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
      background: "#1B98D1",
      card: "#5C96C9",
      primary: "#EC4141",
      secondary: "#FDE85F",
      text: "#FFFFFF",
    },

    palette: ["#1B98D1", "#5C96C9", "#EC4141", "#FDE85F", "#FFFFFF"],

    phases: {
      infant: new URL(
        "/src/assets/rainbow-dash/rainbow-dash-infant.webp",
        import.meta.url,
      ).href,
      filly: new URL(
        "/src/assets/rainbow-dash/rainbow-dash-filly.webp",
        import.meta.url,
      ).href,
      pegasus: new URL(
        "/src/assets/rainbow-dash/rainbow-dash-pegasus.webp",
        import.meta.url,
      ).href,
      future: new URL(
        "/src/assets/rainbow-dash/rainbow-dash-future.webp",
        import.meta.url,
      ).href,
    },

    available: true,
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

    palette: [],

    phases: {},

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

    palette: [],

    phases: {},

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

    palette: [],

    phases: {},

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

    palette: [],

    phases: {},

    available: false,
  },
];
