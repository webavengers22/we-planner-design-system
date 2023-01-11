import { color } from './colors';
import { KeysOfUnion, cssVar } from '@/utils';
import { light, dark } from './palettes';
import { Theme, ColorObj, ColorGroup } from './type';

export const ThemeColorSets: Theme = {
  light: { ...light },
  dark: { ...dark },
};

const buildCssVariables = <T extends Object>(variables: T) => {
  const colorListArray = Object.entries(variables).map((color) => {
    const keys = Object.keys(color[1]);
    return keys.reduce(
      (acc, key) => acc.concat(`--${color[0]}-${key}: ${color[1][key]};`, '\n'),
      '',
    );
  });
  return colorListArray.join();
};
export const colorThemes = {
  light: buildCssVariables(ThemeColorSets.light),
  dark: buildCssVariables(ThemeColorSets.dark),
  common: buildCssVariables(color),
};

const buildColorPalette2 = <T extends Object>(variables: T) => {
  const keys = Object.keys(variables) as KeysOfUnion<T>[];
  return keys.reduce((acc, current) => {
    acc[current] = cssVar(current);
    return acc;
  }, {} as Record<KeysOfUnion<T>, string>);
};

const buildColorPalette = <T extends Object>(variables: T) => {
  const colorListArray = Object.entries(variables).map((color) => {
    const keys = Object.keys(color[1]);
    return keys.reduce(
      (acc, key) =>   acc[current]
    return acc;
  }, {} as Record<KeysOfUnion<T>, string>);
};

//export const cssVar = (name: string) => `var(--${name.replace(/_/g, '-')})`;

export const colorListArray = Object.entries(color)
  // .map(color => Object.keys(color[1]).map(value => `${color[0]}-${value}`))
  .flat() as ColorList[];
