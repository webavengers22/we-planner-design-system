import { ValueOf } from './../../utils/helper';
import { isArray, isObject } from 'util';
import { css } from '@emotion/react';
import { ITypographyStyle, ITypography, IFontStyleProperties, TypographyProperty, Font } from '.';
import { fontStyle } from './token/fonts';
import { object } from 'prop-types';

/**
 * Typography 스타일 별 css 반환
 */

const generateFont = Object.fromEntries(
  Object.entries(fontStyle).map(([key, getObject]) => {
    console.log(getObject);
    const fontGroup = Object.keys(getObject).map((value) => {
      console.log(getObject[value]);
      return {};
    });
    const themeColor = Object.keys(getObject).reduce((acc, fontKey) => {
      acc[fontKey] = fontKey;
      return acc;
    }, {});
    console.log(themeColor);
    return [key, fontGroup];
  }),
);

const generateFontCssColor = Object.fromEntries(
  Object.entries(generateFont).map(([themeType, fontGroup]) => {
    const themeColor = Object.keys(fontGroup).reduce(
      (acc, fontKey) => acc.concat(`--${fontKey.replace(/_/g, '-')}: ${fontGroup[fontKey]};`, '\n'),
      '',
    );
    return [themeType, themeColor];
  }),
);
console.log(generateFontCssColor);

/*
 * {@link https://github.com/orioncactus/pretendard#html-1}
 */
const PRETENDARD_FONT_FAMILY =
  "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif";

export { PRETENDARD_FONT_FAMILY, generateFont };
