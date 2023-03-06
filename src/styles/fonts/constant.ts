import { typography } from './token/typography';
import { fontStyle } from './token/fonts';
import { Font, PickFontKeys, typographyStylesKey } from './type';
import { cssVar } from '@/utils/styled';
import { ITypography } from './interface';

/*
 * {@link https://github.com/orioncactus/pretendard#html-1}
 */
const PRETENDARD_FONT_FAMILY = 'Pretendard sans-serif';

/**
 * Typography 스타일 별 css 반환
 */

const generateFont = Object.fromEntries(
  Object.entries(fontStyle).map(([key, getObject]) => {
    const themeColor = Object.keys(getObject).reduce<Record<string, Font>>(
      (obj, secondKey) => {
        obj[`${key}_${secondKey}`] = getObject[secondKey];
        return obj;
      },
      {},
    );
    return [key, themeColor];
  }),
);

/**
 * Typography 스타일 별 css 반환
 */
const getTypographyStyles = (typographyStyle: typographyStylesKey) => {
  const { fontSize, lineHeight } = typography[typographyStyle] as ITypography;
  return `
    font-size: ${fontSize}rem;
    line-height: ${lineHeight}rem;
    font-family: ${PRETENDARD_FONT_FAMILY};
    font-display: swap;
  `;
};

export { PRETENDARD_FONT_FAMILY, generateFont, getTypographyStyles };
