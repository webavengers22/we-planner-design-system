import { cssVar } from '../../utils/styled';
import { generateFont } from './constant';
import { Font, ThemeFont, PickThemeFont } from './type';

/**
 * Typography 요소들 모두 css로 variable 커스터마이징 concat
 * --background-default:#4A453C;\n
 */
const generateTypographyCss = Object.keys(generateFont).reduce(
  (acc, fontKey) => acc.concat(`--${fontKey}: ${generateFont[fontKey]};`, '\n'),
  '',
);

/**
 * Typography 요소들 =>style variable로 data 커스터 마이징 fun
 * background_default:"var(--${themeType}-${title})"
 */
const generateThemeFont = Object.keys(generateFont).reduce<
  Record<string, Font>
>((acc, colorKey) => {
  acc[colorKey] = cssVar(colorKey);
  return acc;
}, {}) as ThemeFont;

const themeTypography: ThemeFont = generateThemeFont;

export { generateTypographyCss, themeTypography };
