import { baseColor } from './colors';
import { darkColor } from './dark';
import { lightColor } from './light';
import { BaseColorList } from './type';

const paletteColor = {
  standard: { ...baseColor },
  light: { ...lightColor },
  dark: { ...darkColor },
};
const themeColor = {
  light: { ...paletteColor.light },
  dark: { ...paletteColor.light },
};

export const BaseColorListArray = Object.entries(baseColor)
  .map((color) => Object.keys(color[1]).map((value) => `${color[0]}-${value}`))
  .flat() as BaseColorList[];

const test = Object.entries(colors).reduce<Record<string, ColorProperty>>(
  (acc, [title, object]) => {
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
  },
  {},
);

export { paletteColor, themeColor };
