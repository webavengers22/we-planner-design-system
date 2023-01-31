import {
  generateThemeCssColor as themeCssColor,
  themedPalette,
  paletteColorList,
} from '@/styles/colors/index';
export * from './DocsDarkThemeCompat';
export * from './StorybookThemeWrapper';
export * from './GlobalStyle';
const themes = {
  ...themedPalette,
};

export { themes, themeCssColor, paletteColorList };
