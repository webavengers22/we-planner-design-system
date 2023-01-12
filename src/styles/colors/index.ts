import { ThemeProvider } from '@emotion/react';
import { paletteColor } from './constant';
import { PalletteGroupObj, ColorGroup, ThemeGroup } from './type';

const buildCssVariables = <T>(PalletteGroup: PalletteGroupObj) => {
  const colorListArray = Object.entries(PalletteGroup)
    .map(([colorTitle, colorGroup]) => {
      const color = Object.keys(colorGroup).map((data) => ({
        title: `${colorTitle}-${data}`,
        name: `--${colorTitle}-${data}\n`,
        value: colorGroup[data],
        css: `var(--${colorTitle}-${data})`,
      }));
      return color;
    })
    .flat() as T[];
  return colorListArray;
};

const generateColorCssVar = () =>
  Object.entries(colors)
    .map(([key, hex]) => `--${key}: ${hex}`)
    .join(';');

export const colorThemes = {
  light: buildCssVariables<ColorGroup>(paletteColor.light),
  dark: buildCssVariables<ThemeGroup>(paletteColor.dark),
  common: buildCssVariables<ThemeGroup>(paletteColor.common),
};

const buildColorPalette = <T extends Object, K>(variables: T) => {
  const colorListArray = Object.entries(variables)
    .map((color) =>
      Object.keys(color[1]).map((value) => ({ [color[0] + '-' + value]: color[1][value] })),
    )
    .flat() as K[];
  return colorListArray.join();
};

/* export const themedPalette: Record<ColorDefine, string> = variableKeys.reduce((acc, current) => {
  acc[current] = cssVar(current);
  return acc;
}, {} as ThemedPalette); */

/* const variableKeys = Object.keys(themeVariableSets.light) as VariableKey[];
const themedPalette: Record<ColorDefineKey, string> = variableKeys.reduce((acc, current) => {
  acc[current] = cssVar(current);
  return acc;
}, {} as ThemedPalette);
 */
/* export const themedPalette: Record<VariableKey, string> = variableKeys.reduce((acc, current) => {
  acc[current] = cssVar(current);
  return acc;
}, {} as ThemedPalette); */
