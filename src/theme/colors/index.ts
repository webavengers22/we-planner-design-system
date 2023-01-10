import { KeysOfUnion } from './../../utils/helper';
import { buildColorPalette, buildCssVariables } from '@src/utils';
import { color as lightColor } from './light';
import { color as darkColor } from './dark';
import { allColorsType, ThemeType, PaletteType } from './type';

export const ThemeColorSets: PaletteType = {
  light: { ...lightColor },
  dark: { ...darkColor },
};

const buildCssVariables = <T extends Object>(variables: T): string => {
  const keys = Object.keys(variables) as KeysOfUnion<T>[];
  return keys.reduce(
    (acc, key) => acc.concat(`--${key.replace(/_/g, '-')}: ${String(variables)};`, '\n'),
    '',
  );
};

export const colorThemes = {
  light: buildCssVariables<allColorsType>(allColorsType),
  dark: buildCssVariables<allColorsType>(ThemeColorSets.dark),
};

const themePalette = buildColorPalette<allColorsType>(ThemeColorSets.light);

console.log(colorThemes);
console.log(themePalette);
export const ColorPalette = {
  ...themePalette,
};
