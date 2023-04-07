import { generateStyle } from '../style';
import { cssVar } from '../../utils';
import { PickThemeStyle, Style, ThemeStyle } from './type';

/**
 * Style 요소들 모두 css로 variable 커스터마이징 concat
 * --background-default:#4A453C;\n
 */
const generateStyleCss = Object.keys(generateStyle).reduce(
  (acc, styleKey) =>
    acc.concat(`--${styleKey}: ${generateStyle[styleKey]};`, '\n'),
  '',
);

/**
 * Style 요소들 =>style variable로 data 커스터 마이징 fun
 * background_default:"var(--${themeType}-${title})"
 */
const generateThemeStyle = Object.keys(generateStyle).reduce<
  Record<string, Style>
>((acc, colorKey) => {
  acc[colorKey] = cssVar(colorKey);
  return acc;
}, {}) as ThemeStyle;

const themeStyle: ThemeStyle = generateThemeStyle;

export { generateStyleCss, themeStyle };
