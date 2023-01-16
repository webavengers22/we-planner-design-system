import { generateColor } from '@/styles/colors/constant';
import { Color } from './type';

const generateThemeCssColor = Object.fromEntries(
  Object.entries(generateColor).map(([themeType, colorGroup]) => {
    const themeColor = Object.keys(colorGroup).reduce(
      (acc, colorKey) => acc.concat(`--${colorKey}: ${colorGroup[colorKey]};`, '\n'),
      '',
    );
    return [themeType, themeColor];
  }),
);

const cssVar = (name: string) => `var(--${name.replace(/_/g, '-')})`;

const generatePalletteColor = Object.fromEntries(
  Object.entries(generateColor).map(([themeType, colorGroup]) => {
    const themeColor = Object.keys(colorGroup).reduce<Record<string, Color>>((acc, colorKey) => {
      acc[colorKey] = cssVar(colorKey);
      return acc;
    }, {});
    return [themeType, themeColor];
  }),
);

export { generateThemeCssColor, generatePalletteColor };
