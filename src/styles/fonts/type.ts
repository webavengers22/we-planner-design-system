import { type } from 'os';

type Font = string | number;

/** Font Style 하위 Type key  */
type CommonType = 'family' | 'display';
type WeightType = 'bold' | 'regular';
type FontRange = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 'normal';

/** Font Object Type key  */
type FontStyleType = 'common' | 'weight' | 'size' | 'lineHeight';
type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type FontSizeType = SizeType | Font;

export type {
  Font,
  /** Font Style 하위 Type key  */
  CommonType,
  WeightType,
  FontRange,
  /** Font Object Type key  */
  FontStyleType,
  SizeType,
};
