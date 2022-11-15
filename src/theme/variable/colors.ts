import {
  ColorVariables,
  ThemeMainType,
  ColorKeys,
  PaletteType,
  lightColor,
  darkColor,
} from '../colors';
import { cssVar } from 'util/index';

// TODO: theme 저장
const buildCssVariables = (variables: ColorVariables) => {
  const keys = Object.keys(variables) as (keyof ColorVariables)[];
  return keys.reduce(
    (acc, key) => acc.concat(`--${key.replace(/_/g, '-')}: ${variables[key]};`, '\n'),
    '',
  );
};

export const ThemeColorSets: Record<ThemeMainType, ColorVariables> = {
  light: { ...lightColor },
  dark: { ...darkColor },
};

export const colorThemes = {
  light: buildCssVariables(ThemeColorSets.light),
  dark: buildCssVariables(ThemeColorSets.dark),
};

const paletteKeys = Object.keys(ThemeColorSets.light) as ColorKeys[];

export const ColorPalette: Record<ColorKeys, string> = paletteKeys.reduce((acc, current) => {
  acc[current] = cssVar(current);
  return acc;
}, {} as PaletteType);
