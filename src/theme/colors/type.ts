import { KeysOfUnion } from '@src/utils';
import { allColors } from './constants';

type ThemeType = 'light' | 'dark';
type allColorsType = typeof allColors;
type allColorsKeys = keyof typeof allColors;

export type { ThemeType, allColorsType, allColorsKeys };
