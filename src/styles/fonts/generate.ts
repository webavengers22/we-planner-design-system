import { cssVar } from '@/utils/styled';
import { generateFont } from './constant';
import { Font, ThemeFont, PickThemeFont } from './type';

const generateFontCss = Object.fromEntries(
  Object.entries(generateFont).map(([themeType, fontGroup]) => {
    const themeFont = Object.keys(fontGroup).reduce(
      (acc, fontKey) => acc.concat(`--${fontKey.replace(/_/g, '-')}: ${fontGroup[fontKey]};`, '\n'),
      '',
    );
    return [themeType, themeFont];
  }),
) as PickThemeFont;

const generateThemeFont = Object.fromEntries(
  Object.entries(generateFont).map(([themeType, colorGroup]) => {
    const themeColor = Object.keys(colorGroup).reduce<Record<string, Font>>((acc, colorKey) => {
      acc[colorKey] = cssVar(colorKey);
      return acc;
    }, {}) as ThemeFont;
    return [themeType, themeColor];
  }),
);

const themeTypography: ThemeFont = {
  ...generateThemeFont.common,
  ...generateThemeFont.lineHeight,
  ...generateThemeFont.size,
  ...generateThemeFont.weight,
};

const themeCssTypography: string = `
${generateFontCss.common}
${generateFontCss.lineHeight}
${generateFontCss.weight}
${generateFontCss.size}`;

export { themeCssTypography, generateThemeFont, themeTypography };
