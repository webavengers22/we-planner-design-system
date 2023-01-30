import { generateThemeCssColor as themeCssColor, themedPalette } from '@/styles/colors/index';
export * from './DocsDarkThemeCompat';
export * from './StorybookThemeWrapper';
export * from './GlobalStyle';
export * from './DocsThemeWrapper';
const themes = {
  ...themedPalette,
};

export { themes, themeCssColor };
