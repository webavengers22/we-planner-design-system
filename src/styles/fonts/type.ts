import { type } from 'os';
import { ITypography } from './interface';

type Font = string | number;

/** Font Style 하위 Type key  */
type CommonType = 'family' | 'display';
type WeightType = 'bold' | 'regular';
type FontRange = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 'normal';

/** Font Object Type key  */
type FontStyleType = 'common' | 'weight' | 'size' | 'lineHeight';
type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

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

type TypographyProperty = {
  [key: string | number]: Font;
};

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
};
