import { generateColor, generateBaseColor, generateThemeColor } from '@/styles/colors/constant';
import { cssVar } from '@/utils/styled';
import { Color, ThemePalette } from './type';

const generateColorCss = Object.fromEntries(
  Object.entries(generateColor).map(([themeType, colorGroup]) => {
    const themeColor = Object.keys(colorGroup).reduce(
      (acc, colorKey) =>
        acc.concat(`--${colorKey.replace(/_/g, '-')}: ${colorGroup[colorKey]};`, '\n'),
      '',
    );
    return [themeType, themeColor];
  }),
);

const generateThemePallette = Object.fromEntries(
  Object.entries(generateColor).map(([themeType, colorGroup]) => {
    const themeColor = Object.keys(colorGroup).reduce<Record<string, Color>>((acc, colorKey) => {
      acc[colorKey] = cssVar(colorKey);
      return acc;
    }, {}) as ThemePalette;
    return [themeType, themeColor];
  }),
);

const themePalette: ThemePalette = {
  ...generateThemePallette.dark,
  ...generateThemePallette.standard,
};
const paletteColorList = { ...generateBaseColor, ...generateThemeColor };

export { generateColorCss, themePalette, paletteColorList };
