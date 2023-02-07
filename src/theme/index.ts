import {
  generateColorCss as colorCss,
  themePalette as color,
  paletteColorList,
} from '@/styles/colors/index';
import { themeCssTypography as typographyCss, themeTypography as font } from '@styles/fonts';
import { themeStyleCss as styleCss, themeStyle as style } from '@styles/style';
export * from './GlobalStyle';
const themes = {
  color,
  font,
  style,
};

const themeCss = {
  colorCss,
  typographyCss,
  styleCss,
};
export type themesKey = typeof themes;
export { themes, themeCss, paletteColorList };
declare module '@emotion/react' {
  export interface Theme extends themesKey {}
}
