import { style } from './token/style';
import { GetColorList, SizeType } from '@/types';

type Style = string | number;

/** Style 하위 Type key  */
type TransitionType = 'duration' | 'ease';
/**  Object Type key  */
type StyleType = 'breakpoints' | 'spacing' | 'radius' | 'transition';

type BaseStyle = typeof style;
type StyleList = GetColorList<BaseStyle>;

type PickStyleKeys = {
  [key in StyleList]: Style;
};

type TypographyProperty = {
  [key: string | number]: Style;
};

type stylesKey = keyof typeof style;
type PickThemeStyle = Record<StyleType, string>;
type ThemeStyle = Record<keyof PickStyleKeys, string>;

export type { TransitionType, Style, StyleType, PickThemeStyle, ThemeStyle };
