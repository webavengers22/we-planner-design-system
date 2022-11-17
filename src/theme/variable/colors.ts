import {
  CommonColorVariables,
  ThemeColorVariables,
  ThemeMainType,
  ColorKeys,
  PaletteType,
  lightColor,
  darkColor,
  commonColor,
} from '../colors';
import { cssVar, KeysOfUnion } from 'foundation/utils/index';
import { Type } from 'typescript';

// TODO: theme 저장
const buildCssVariables = <T extends Object>(variables: T): string => {
  const keys = Object.keys(variables) as KeysOfUnion<T>[];
  return keys.reduce(
    (acc, key) => acc.concat(`--${key.replace(/_/g, '-')}: ${variables[key]};`, '\n'),
    '',
  );
};

export const ThemeColorSets: Record<ThemeMainType, ThemeColorVariables> = {
  light: { ...lightColor },
  dark: { ...darkColor },
};

export const colorThemes = {
  light: buildCssVariables<ThemeColorVariables>(ThemeColorSets.light),
  dark: buildCssVariables<ThemeColorVariables>(ThemeColorSets.dark),
  common: buildCssVariables<CommonColorVariables>(commonColor),
};

console.log('colorThemes');
console.log(colorThemes);

const paletteKeys = Object.keys(ThemeColorSets.light) as ColorKeys[];

export const ColorPalette: Record<ColorKeys, string> = paletteKeys.reduce((acc, current) => {
  acc[current] = cssVar(current);
  return acc;
}, {} as PaletteType);
