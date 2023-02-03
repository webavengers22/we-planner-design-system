import {
  generateThemeCssColor as themeCssColor,
  themedPalette,
  paletteColorList,
} from '@/styles/colors/index';
import { generateFont } from '@/styles/fonts';
export * from './DocsDarkThemeCompat';
export * from './StorybookThemeWrapper';
export * from './GlobalStyle';
const themes = {
  ...themedPalette,
};

console.log(generateFont);
export { themes, themeCssColor, paletteColorList };
