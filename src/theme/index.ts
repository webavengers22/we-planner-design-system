import {
  generateThemeCssColor as colorCss,
  themedPalette as color,
  paletteColorList,
} from '@/styles/colors/index';
import { fontThemeCss, themeTypography as font } from '@/styles/fonts/generate';
export * from './GlobalStyle';
const themes = {
  color,
  font,
};

const themeCssColor = {
  colorCss,
  fontThemeCss,
};
export type themesKey = typeof themes;
export { themes, themeCssColor, paletteColorList };

declare module '@emotion/react' {
  export interface Theme extends themesKey {}
}
