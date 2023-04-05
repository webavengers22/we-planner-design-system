import { lightColor, darkColor, baseColor } from './token';
import { ColorProperty, ColorListProperty } from './type';

const paletteColor = {
  standard: { ...baseColor },
  light: { ...lightColor },
  dark: { ...darkColor },
};

/**
 * ThemeColor & BaseColor colorCode key => style Css key로 data 커스터 마이징 fun
 * background-default:"#4A453C"
 */
const generateColor = Object.fromEntries(
  Object.entries(paletteColor).map(([themeType, getData]) => {
    const colorGroup = Object.entries(getData).reduce<
      Record<string, ColorProperty>
    >((acc, [title, object]) => {
      Object.keys(object).map((data) => {
        acc[`${title}-${data}`] = object[data];
      });
      return acc;
    }, {});
    return [themeType, colorGroup];
  }),
);

/**
 * BaseColor colorCode key => style variable로 data 커스터 마이징 fun
 * background_default:"var(--${themeType}-${title})"
 */
const generateBaseColor = Object.fromEntries(
  Object.entries(baseColor).map(([themeType, getData]) => {
    const colorGroup = Object.entries(getData).reduce<ColorListProperty>(
      (acc, [title, value]) => {
        acc[`${themeType}-${title}`] = `var(--${themeType}-${title})`;
        return acc;
      },
      {},
    );
    return [themeType, colorGroup];
  }),
);

/**
 * ThemeColor colorCode key  =>style variable로 data 커스터 마이징 fun
 * background_default:"var(--${themeType}-${title})"
 */
const generateThemeColor = Object.fromEntries(
  Object.entries(darkColor).map(([themeType, getData]) => {
    const colorGroup = Object.entries(getData).reduce<ColorListProperty>(
      (acc, [title, value]) => {
        acc[`${themeType}-${title}`] = `var(--${themeType}-${title})`;
        return acc;
      },
      {},
    );
    return [themeType, colorGroup];
  }),
);
export { paletteColor, generateColor, generateBaseColor, generateThemeColor };
