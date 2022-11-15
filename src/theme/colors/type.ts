export interface ColorVariables {
  white: string;
  black: string;
  primary: string;
  secondary: string;
  tertiary: string;
  background: string;
  error: string;
  success: string;
  info: string;
  text: string;
}

type ThemeMainType = 'light' | 'dark';
type ColorKeys = keyof ColorVariables;
type PaletteType = Record<ColorKeys, string>;

export type { ThemeMainType, ColorKeys, PaletteType };
