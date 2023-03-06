import { lightColor, darkColor, baseColor } from './token';
import { ColorProperty, ColorListProperty } from './type';

const paletteColor = {
  standard: { ...baseColor },
  light: { ...lightColor },
  dark: { ...darkColor },
};

const generateColor = Object.fromEntries(
  Object.entries(paletteColor).map(([themeType, getData]) => {
    const colorGroup = Object.entries(getData).reduce<Record<string, ColorProperty>>(
      (acc, [title, object]) => {
        Object.keys(object).map((data) => {
          acc[`${title}_${data}`] = object[data];
        });
        return acc;
      },
      {},
    );
    return [themeType, colorGroup];
  }),
);
const generateBaseColor = Object.fromEntries(
  Object.entries(baseColor).map(([themeType, getData]) => {
    const colorGroup = Object.entries(getData).reduce<ColorListProperty>((acc, [title, value]) => {
      acc[`${themeType}_${title}`] = `var(--${themeType}-${title})`;
      return acc;
    }, {});
    return [themeType, colorGroup];
  }),
);
const generateThemeColor = Object.fromEntries(
  Object.entries(darkColor).map(([themeType, getData]) => {
    const colorGroup = Object.entries(getData).reduce<ColorListProperty>((acc, [title, value]) => {
      acc[`${themeType}_${title}`] = `var(--${themeType}-${title})`;
      return acc;
    }, {});
    return [themeType, colorGroup];
  }),
);
export { paletteColor, generateColor, generateBaseColor, generateThemeColor };
