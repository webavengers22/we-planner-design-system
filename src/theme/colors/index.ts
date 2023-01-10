import { KeysOfUnion } from './../../utils/helper';
import { buildColorPalette, buildCssVariables } from '@src/utils';
import { color as lightColor } from './light';
import { color as darkColor } from './dark';
import { allColorsType, ThemeType } from './type';

export const ThemeColorSets: Record<ThemeType, allColorsType> = {
  light: { ...lightColor },
  dark: { ...darkColor },
};

export const colorThemes = {
  light: buildCssVariables<allColorsType>(ThemeColorSets.light),
  dark: buildCssVariables<allColorsType>(ThemeColorSets.dark),
};

const themePalette = buildColorPalette<allColorsType>(ThemeColorSets.light);

console.log(colorThemes);
console.log(themePalette);
export const ColorPalette: Record<KeysOfUnion<allColorsType>, string> = {
  ...themePalette,
};
