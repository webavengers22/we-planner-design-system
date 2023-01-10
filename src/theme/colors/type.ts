import { KeysOfUnion } from '@src/utils';
import { color as lightColor } from './light';
import { color as darkColor } from './dark';

type ThemeType = 'light' | 'dark';
type colorType<T> = {
  [key in keyof T]: string;
};
export type lightColorType = Record<keyof typeof lightColor, colorType>;
export type darkColorType = Record<keyof typeof darkColor, colorType>;
type allColorsType = lightColorType & darkColorType;
type allColorsKeys = keyof allColorsType;
type PaletteType = Record<ThemeType, allColorsType>;
export type { colorType, ThemeType, allColorsType, allColorsKeys, PaletteType };
