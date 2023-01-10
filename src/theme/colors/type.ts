import { KeysOfUnion } from '@src/utils';
import { color as lightColor } from './light';
import { color as darkColor } from './dark';

type ThemeType = 'light' | 'dark';
type allColorsType = typeof lightColor | typeof darkColor;
type allColorsKeys = keyof typeof lightColor | keyof typeof darkColor;

export type { ThemeType, allColorsType, allColorsKeys };
