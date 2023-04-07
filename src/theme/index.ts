import {
  generateColorCss as colorCss,
  themePalette as color,
} from '../styles/colors/index';
import {
  generateTypographyCss as typographyCss,
  themeTypography as typography,
} from '../styles/fonts';
import {
  generateStyleCss as styleCss,
  themeStyle as style,
} from '../styles/style';

const themes = {
  color,
  typography,
  style,
};

const themeCss = {
  colorCss,
  buildCss: typographyCss + styleCss,
};

export type themesKey = typeof themes;
export { themes, themeCss };
