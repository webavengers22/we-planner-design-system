import { paletteColor } from './constant';
import { ColorProperty } from './type';
/*
const customColorVariables = <Type extends ThemeObject | ColorObject>(colors: Type) => {
  return Object.entries(colors).reduce<Record<string, ColorProperty>>((acc, [title, object]) => {
    Object.keys(object).map((data) => {
      const test = {
        title: `${title}-${data}`,
        name: `--${title}-${data}\n`,
        value: object[data],
        css: `var(--${title}-${data})`,
      };
      acc[`${title}-${data}`] = test;
    });
    return acc;
  }, {});
};

export const colorThemes = {
  standard: customColorVariables<ColorObject>(paletteColor.standard),
  dark: customColorVariables<ThemeObject>(paletteColor.dark),
  light: customColorVariables<ThemeObject>(paletteColor.light),
}; */

/* const buildCssVariables = <Type extends ThemeObject | ColorObject>(color: Type) => {
  const array = Object.fromEntries(
    Object.entries(color).map(([title, object]) => {
      const colors = Object.keys(object).reduce(
        (acc, name) => acc.concat(`--${title}-${name}: ${object[name]};`, '\n'),
        '',
      );
      return [colors];
    }),
  ) as Type;
  return array;
}; */

/* function tailwindColorMap<T extends PickPalletteColor, K>(
  name: T,
): {
  [P in [T] as `${T}-${TailwindColorStop}`]: string;
} {
  // @ts-ignore: I promise the type is correct:
  return Object.fromEntries(
    Object.entries(colors[name]).map(([num, value]) => [`${name}-${num}`, value]),
  );
} */

/* const generateColorCssVar = () =>
  Object.entries(colors)
    .map(([key, hex]) => `--${key}: ${hex}`)
    .join(';'); */

/* Object.fromEntries(
  Object.entries(newPricesList).map(([priceKey, priceValue]) => [
    priceKey,
    priceValue * 2
  ])
); */

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
