// src/lib/utils/theme.ts

import type { Character } from "../types/character";

export function getThemeStyle(character: Character): string {
  return `
    --theme-background: ${character.colors.background};
    --theme-card: ${character.colors.card};
    --theme-primary: ${character.colors.primary};
    --theme-secondary: ${character.colors.secondary};
    --theme-text: ${character.colors.text};
  `;
}
