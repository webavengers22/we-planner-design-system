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

type cvTheme = keyof typeof generateColor.light;
type cvStandard = keyof typeof generateColor.standard;
type VariableKey = cvTheme & cvStandard;
type ThemedPalette = Record<VariableKey, string>;

const cssVar = (name: string) => `var(--${name.replace(/_/g, '-')})`;

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
