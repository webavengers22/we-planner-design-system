import { color } from './colors';
import { KeysOfUnion, cssVar } from '@src/utils';
import { light, dark } from './palettes';
import { Theme } from './type';

export const ThemeColorSets: Theme = {
  dark: { ...dark },
  light: { ...light },
};

const buildCssVariables = <T extends Object, K>(variables: T) => {
  const colorListArray = Object.entries(variables)
    .map((color) => Object.keys(color[1]).map((value) => `${color[0]}-${value}`))
    .flat() as [keyof K];
  return colorListArray;
};

export const colorThemes = {
  light: buildCssVariables(ThemeColorSets.light),
  dark: buildCssVariables(ThemeColorSets.dark),
  common: buildCssVariables(color),
};

const buildColorPalette = <T extends Object>(variables: T) => {
  const keys = Object.keys(variables) as KeysOfUnion<T>[];
  return keys.reduce((acc, current) => {
    acc[current] = cssVar(current);
    return acc;
  }, {} as Record<KeysOfUnion<T>, string>);
};

//export const cssVar = (name: string) => `var(--${name.replace(/_/g, '-')})`;
