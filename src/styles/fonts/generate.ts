import { cssVar } from '@/utils/styled';
import { generateFont } from './constant';
import { Font, FontList, FontStyleType, PickFontKeys } from './type';

type PickFontTheme = Record<FontStyleType, string>;
type PickFontTheme2 = Record<FontList, Font>;
const generateFontCssFont = Object.fromEntries(
  Object.entries(generateFont).map(([themeType, fontGroup]) => {
    const themeFont = Object.keys(fontGroup).reduce(
      (acc, fontKey) => acc.concat(`--${fontKey.replace(/_/g, '-')}: ${fontGroup[fontKey]};`, '\n'),
      '',
    );
    return [themeType, themeFont];
  }),
) as PickFontTheme;

type ThemeFont = Record<keyof PickFontKeys, string>;

const generateThemeFont = Object.fromEntries(
  Object.entries(generateFont).map(([themeType, colorGroup]) => {
    const themeColor = Object.keys(colorGroup).reduce<Record<string, Font>>((acc, colorKey) => {
      acc[colorKey] = cssVar(colorKey);
      return acc;
    }, {}) as ThemeFont;
    return [themeType, themeColor];
  }),
);
console.log(generateFontCssFont);

const themeTypography: ThemeFont = {
  ...generateThemeFont.common,
  ...generateThemeFont.lineHeight,
  ...generateThemeFont.size,
  ...generateThemeFont.weight,
};

const fontThemeCss: string = `
${generateFontCssFont.common}
${generateFontCssFont.lineHeight}
${generateFontCssFont.weight}
${generateFontCssFont.size}`;

export { fontThemeCss, generateThemeFont, themeTypography };
