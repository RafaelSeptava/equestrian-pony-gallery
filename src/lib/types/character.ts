// character.ts

export type Phase = "infant" | "filly" | "unicorn" | "alicorn" | "future";

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
  phases: Record<Phase, string>;
  available: boolean;
};
