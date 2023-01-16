import { lightColor, darkColor, baseColor } from './token';
import { ColorProperty, PickThemeColor } from './type';

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
export { paletteColor, generateColor };
