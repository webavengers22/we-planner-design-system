import { generateColor } from '../../styles/colors/constant';
import { cssVar } from '../../utils/styled';
import { Color, ThemePalette } from './type';

/**
 * ThemeColor & BaseColor 모두 css로 variable 커스터마이징 concat
 * --background-default:#4A453C;\n
 */
const generateColorCss = Object.fromEntries(
  Object.entries(generateColor).map(([themeType, colorGroup]) => {
    const themeColor = Object.keys(colorGroup).reduce(
      (acc, colorKey) =>
        acc.concat(`--${colorKey}: ${colorGroup[colorKey]};`, '\n'),
      '',
    );
    return [themeType, themeColor];
  }),
);

/**
 * ThemeColor & BaseColor colorCode key  =>style variable로 data 커스터 마이징 fun
 * background_default:"var(--${themeType}-${title})"
 */
const generateThemePallette = Object.fromEntries(
  Object.entries(generateColor).map(([themeType, colorGroup]) => {
    const themeColor = Object.keys(colorGroup).reduce<Record<string, Color>>(
      (acc, colorKey) => {
        acc[colorKey] = cssVar(colorKey);
        return acc;
      },
      {},
    ) as ThemePalette;
    return [themeType, themeColor];
  }),
);

/**
 * ThemeColor & BaseColor colorCode key  =>style variable로 data 커스터 마이징 fun
 * background_default:"var(--${themeType}-${title})"
 */
const themePalette: ThemePalette = {
  ...generateThemePallette.dark,
  ...generateThemePallette.standard,
};

export { generateColorCss, themePalette };
