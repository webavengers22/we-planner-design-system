import { generateStyle } from '@/styles/style';
import { cssVar } from '@/utils/styled';
import { PickThemeStyle, Style, ThemeStyle } from './type';

const generateStyleCss = Object.fromEntries(
  Object.entries(generateStyle).map(([themeType, fontGroup]) => {
    const themeFont = Object.keys(fontGroup).reduce(
      (acc, fontKey) => acc.concat(`--${fontKey.replace(/_/g, '-')}: ${fontGroup[fontKey]};`, '\n'),
      '',
    );
    return [themeType, themeFont];
  }),
) as PickThemeStyle;

const generateThemeStyle = Object.fromEntries(
  Object.entries(generateStyle).map(([themeType, colorGroup]) => {
    const themeColor = Object.keys(colorGroup).reduce<Record<string, Style>>((acc, colorKey) => {
      acc[colorKey] = cssVar(colorKey);
      return acc;
    }, {}) as ThemeStyle;
    return [themeType, themeColor];
  }),
);

const themeStyle: ThemeStyle = {
  ...generateThemeStyle.breakpoints,
  ...generateThemeStyle.radius,
  ...generateThemeStyle.spacing,
  ...generateThemeStyle.transition,
};

const themeStyleCss: string = `
${generateStyleCss.breakpoints}
${generateStyleCss.radius}
${generateStyleCss.transition}
${generateStyleCss.spacing}`;

export { themeStyleCss, generateThemeStyle, themeStyle };
