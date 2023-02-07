import { lightColor, darkColor, baseColor } from './token';
import { ThemeMode as ThemeColorType } from '@/types/themeType';
import { paletteColor } from './constant';
import { GetColorList } from '@/types';

type Color = string | undefined;

/** Base color 하위 TYPE  */
type CommonType = 'white' | 'black';
type StatusType = 'success' | 'info' | 'warning' | 'error';
type ColorRange = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type AllBaseColorType = CommonType & StatusType & ColorRange;

/** Variant color 하위 TYPE  */
type CommonColorType = 'primary' | 'secondary' | 'tertiary';
type StorybookColorType = 'primary' | 'secondary' | 'background';
type BackGroundColorType = 'default';
type TextColorType = 'default';

/** Color 타입 */
type BaseColorType = 'common' | 'gray' | 'status' | 'orange' | 'teal';
type VariantColorType = 'background' | 'text';
type PalletteType = 'standard' & ThemeColorType;

/** Pick Data */
type ColorProperty = {
  [key: string | number]: Color;
};
type ColorListProperty = {
  [key: string | number]: string;
};
type PickThemeColor = Pick<PalletteType, keyof ThemeColorType>;

/** Color Data  */
type BaseColor = typeof baseColor;
type VariantColor = typeof darkColor | typeof lightColor;
type PaletteColor = typeof paletteColor;

type BaseColorList = GetColorList<BaseColor>;
type VariantColorList = GetColorList<VariantColor>;
type ColorObjectList = BaseColorList | VariantColorList;

type PickPalletteKeys = {
  [key in BaseColorList | VariantColorList]: Color;
};
type ThemePalette = Record<keyof PickPalletteKeys, string>;
export type ColorToken = `${ColorObjectList}` | 'outline' | (string & Record<never, never>);

export type {
  //컬러 타입
  Color,
  BaseColorType,
  VariantColorType,
  CommonType,
  ColorRange,
  StatusType,
  BackGroundColorType,
  TextColorType,
  CommonColorType,
  StorybookColorType,
  // Variant color 하위TYPE
  BaseColorList,
  VariantColorList,
  //Pick
  ColorProperty,
  ColorListProperty,
  PickThemeColor,
  PickPalletteKeys,
  ColorObjectList,
  ThemePalette,
};
