import { fontStyle } from './token/fonts';
import { type } from 'os';
import { ITypography } from './interface';
import { typography } from './token';
import { GetColorList, SizeType } from '@/types';

type Font = string | number;

/** Font Style 하위 Type key  */
type CommonType = 'family' | 'display';
type WeightType = 'bold' | 'regular';
type FontRange = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 'normal';

/** Font Object Type key  */
type FontStyleType = 'common' | 'weight' | 'size' | 'lineHeight';
type FontSizeType = SizeType | Font;

/** Typography 스타일 Type */
type TypographyVariant =
  | `display${1 | 2 | 3}`
  | `headline${1 | 2}`
  | 'title'
  | `body${1 | 2}`
  | 'caption'
  | 'button';

type TypographyStoryVariant =
  | TypographyVariant
  | `headline${1 | 2}_b`
  | 'title_b'
  | `body${1 | 2}_b`;

type TypographyStoryProperty = {
  [key in TypographyStoryVariant]: ITypography;
};

type BaseFont = typeof fontStyle;
type FontList = GetColorList<BaseFont>;

type PickFontKeys = {
  [key in FontList]: Font;
};

type TypographyProperty = {
  [key: string | number]: Font;
};

type typographyStylesKey = keyof typeof typography;
type PickThemeFont = Record<FontStyleType, string>;
type ThemeFont = Record<keyof PickFontKeys, string>;

export type {
  Font,
  /** Font Style 하위 Type key  */
  CommonType,
  WeightType,
  FontRange,
  /** Font Object Type key  */
  FontStyleType,
  SizeType,
  TypographyVariant,
  TypographyStoryVariant,
  TypographyStoryProperty,
  TypographyProperty,
  /**const Font */
  PickFontKeys,
  FontList,
  typographyStylesKey,
  /** generate 타입 지정 */
  PickThemeFont,
  ThemeFont,
};
