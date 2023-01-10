import { KeysOfUnion } from './../../utils/helper';
import { buildColorPalette, buildCssVariables } from '@src/utils';
import { allColors } from './constants';
import { ThemeType, allColorsType } from './type';

export const ThemeColorSets: Record<ThemeType, allColorsType> = {
  light: { ...allColors },
  dark: { ...allColors },
};

export const colorThemes = {
  light: buildCssVariables<allColorsType>(ThemeColorSets.light),
  dark: buildCssVariables<allColorsType>(ThemeColorSets.dark),
};

const themePalette = buildColorPalette<allColorsType>(ThemeColorSets.light);

export const ColorPalette: Record<KeysOfUnion<allColorsType>, string> = {
  ...themePalette,
};
