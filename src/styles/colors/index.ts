import { generateColor } from '@/styles/colors/constant';
import { cssVar } from '@/utils/styled';
import { Color, PickPalletteKeys } from './type';

console.log(generateColor);
const generateThemeCssColor = Object.fromEntries(
  Object.entries(generateColor).map(([themeType, colorGroup]) => {
    const themeColor = Object.keys(colorGroup).reduce(
      (acc, colorKey) =>
        acc.concat(`--${colorKey.replace(/_/g, '-')}: ${colorGroup[colorKey]};`, '\n'),
      '',
    );
    return [themeType, themeColor];
  }),
);
type ThemedPalette = Record<keyof PickPalletteKeys, string>;

const generatePalletteColor = Object.fromEntries(
  Object.entries(generateColor).map(([themeType, colorGroup]) => {
    const themeColor = Object.keys(colorGroup).reduce<Record<string, Color>>((acc, colorKey) => {
      acc[colorKey] = cssVar(colorKey);
      return acc;
    }, {}) as ThemedPalette;
    return [themeType, themeColor];
  }),
);

const themedPalette: ThemedPalette = {
  ...generatePalletteColor.dark,
  ...generatePalletteColor.standard,
};

export { generateThemeCssColor, themedPalette };
