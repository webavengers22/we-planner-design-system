import { allColors } from './constants';

type ThemeType = 'light' | 'dark';
type allColorsType = typeof allColors[keyof typeof allColors];
type allColorsKeys = keyof typeof allColors;

export type { ThemeType, allColorsType, allColorsKeys };
