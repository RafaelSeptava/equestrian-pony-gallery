// src/lib/types/character.ts

export type Phase =
  | "infant"
  | "filly"
  | "earth_pony"
  | "unicorn"
  | "pegasus"
  | "alicorn"
  | "future";

export type CharacterColors = {
  background: string;
  card: string;
  primary: string;
  secondary: string;
  text: string;
};

export type Character = {
  name: string;
  role: string;
  colors: CharacterColors;
  palette: string[];
  phases: Partial<Record<Phase, string>>;
  available: boolean;
};
