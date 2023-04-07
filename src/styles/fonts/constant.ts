import { typography } from './token/typography';
import { fontStyle } from './token/fonts';
import { Font, PickFontKeys, typographyStylesKey } from './type';
import { cssVar } from '@/utils/styled';
import { ITypography } from './interface';

/*
 * {@link https://github.com/orioncactus/pretendard#html-1}
 */
const PRETENDARD_FONT_FAMILY = 'Pretendard Variable';
/**
 * Typography 스타일 별 css 반환
 */

/**
 * ThemeColor & BaseColor colorCode key => style Css key로 data 커스터 마이징 fun
 * weight-bold:"700
 */
const generateFont = Object.fromEntries(
  Object.entries(fontStyle).flatMap(([key, getObject]) => {
    return Object.entries(getObject).map(([secondKey, value]) => {
      return [`${key}-${secondKey}`, value];
    });
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
