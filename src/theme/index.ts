import {
  generateColorCss as colorCss,
  themePalette as color,
  paletteColorList,
} from '../styles/colors/index';
import {
  themeCssTypography as typographyCss,
  themeTypography as font,
} from '../styles/fonts';
import {
  themeStyleCss as styleCss,
  themeStyle as style,
} from '../styles/style';
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

console.log(themeCss);
export type themesKey = typeof themes;
export { themes, themeCss, paletteColorList };
