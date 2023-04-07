import { IFontStyleProperties } from '../interface';
import { FontStyleType } from '../type';

/** 기본 font data 정의 */
const common = {
  family: 'Pretendard Variable',
  display: 'swap',
} as const;

/** font weight 정의 */
const weight = {
  bold: 700,
  regular: 400,
} as const;

/** font size 정의 : ream */
const size = {
  normal: 12,
  100: 0.75, //12px
  200: 0.875, //14px
  300: 1, //16px
  400: 1.25, //20px
  500: 1.5, //24px
  600: 2, //32px
  700: 2.5, //40px
  800: 3, //48px
} as const;

/** font lineHeight 정의 : px */
const lineHeight = {
  normal: 1.0,
  200: 1.0,
  300: 1.1,
  400: 1.3,
  500: 1.5,
  600: 1.7,
  700: 2,
  800: 2.7,
} as const;

export const fontStyle: IFontStyleProperties = {
  common,
  weight,
  size,
  lineHeight,
};
