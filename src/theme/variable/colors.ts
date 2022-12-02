import {
  ColorUniOnKey,
  ThemeColorVariables,
  ThemeMainType,
  lightColor,
  darkColor,
  commonColor,
} from '../colors';
import { cssVar, KeysOfUnion } from 'foundation/utils/index';

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
  light: buildCssVariables<ColorUniOnKey>(ThemeColorSets.light),
  dark: buildCssVariables<ColorUniOnKey>(ThemeColorSets.dark),
  common: buildCssVariables<ColorUniOnKey>(commonColor),
};

const buildColorPalette = <T extends Object>(variables: T) => {
  const keys = Object.keys(variables) as KeysOfUnion<T>[];
  return keys.reduce((acc, current) => {
    acc[current] = cssVar(current);
    return acc;
  }, {} as Record<KeysOfUnion<T>, string>);
};
const themePalette = buildColorPalette<ColorUniOnKey>(ThemeColorSets.light);
const commonPalette = buildColorPalette<ColorUniOnKey>(commonColor);

export const ColorPalette: Record<KeysOfUnion<ColorUniOnKey>, string> = {
  ...themePalette,
  ...commonPalette,
};