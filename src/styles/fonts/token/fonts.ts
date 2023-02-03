import { IFontStyleProperties } from '../interface';
import { FontStyleType } from '../type';

/** 기본 font data 정의 */
const common = {
  family: 'Pretendard sans-serif',
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
  normal: 16.5,
  200: 16.5,
  300: 18.7,
  400: 20.9,
  500: 24.2,
  600: 26.4,
  700: 31.9,
  800: 42.9,
} as const;

export const fontStyle: IFontStyleProperties = {
  common: { ...common },
  weight: { ...weight },
  size: { ...size },
  lineHeight: { ...lineHeight },
};
