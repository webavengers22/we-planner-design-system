import { lightColor, darkColor, baseColor } from './token';
import { ThemeMode as ThemeColorType } from '@/types/themeType';
import { paletteColor } from './constant';

type Color = string | undefined;

/** Base color 하위 TYPE  */
type CommonType = 'white' | 'black';
type StatusType = 'success' | 'info' | 'warning' | 'error';
type ColorRange = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type AllBaseColorType = CommonType & StatusType & ColorRange;

/** Variant color 하위 TYPE  */
type ButtonColorType = 'primary' | 'secondary' | 'tertiary';
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
type PickThemeColor = Pick<PalletteType, keyof ThemeColorType>;

type GetColorList<T> = {
  readonly [P in keyof T]: `${P extends number | string ? P : never}_${keyof T[P] extends
    | string
    | number
    ? keyof T[P]
    : never}`;
}[keyof T];

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
  ButtonColorType,
  // Variant color 하위TYPE
  BaseColorList,
  VariantColorList,
  //Pick
  ColorProperty,
  PickThemeColor,
  PickPalletteKeys,
  ColorObjectList,
};
