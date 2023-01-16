import { lightColor, darkColor, baseColor } from './token';
import { ThemeMode as ThemeColorType } from '@/types/themeType';
import { paletteColor } from './constant';

/** 기본 팔레트 타입 */
type PalletteType = 'standard' | ThemeColorType;
type Color = string;
type BaseColorType = 'common' | 'gray' | 'status' | 'orange' | 'teal';
type VariantColorType = 'background' | 'text';
type AllColorType = BaseColorType | VariantColorType;

/** Base color 하위 TYPE  */
type ColorRange = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type CommonType = 'white' | 'black';
type StatusType = 'success' | 'info' | 'warning' | 'error';

/** Variant color 하위 TYPE  */
type BackGroundColorType = 'default' | 'paper';
type TextColorType = 'primary' | 'secondary';

/** Color type 속성 */
interface ColorProperty {
  [key: string | number]: Color;
}
type PickThemeColor = Pick<PalletteType, keyof ThemeColorType>;

type BaseColor = typeof baseColor;
type VariantColor = typeof darkColor | typeof lightColor;
type PaletteColor = typeof paletteColor;

type GetColorList<T> = {
  readonly [P in keyof T]: `${P extends number | string ? P : never}_${keyof T[P] extends
    | string
    | number
    ? keyof T[P]
    : never}`;
}[keyof T];

type GetColorOptions<T> = {
  readonly [P in keyof T]: keyof T[P];
};

type BaseColorList = GetColorList<BaseColor>;
type VariantColorList = GetColorList<VariantColor>;
type ColorObjectList = BaseColorList | VariantColorList;

type PickPalletteKeys = {
  [key in BaseColorList | VariantColorList]: Color;
};
type PaletteList = GetColorList<PaletteColor>;

type BaseColorOptions = GetColorOptions<BaseColor>;
type VariantColorOptions = GetColorOptions<VariantColor>;

export type {
  //컬러 타입
  Color,
  BaseColorType,
  VariantColorType,
  AllColorType,
  //Base Color 하위 Type
  ColorRange,
  CommonType,
  StatusType,
  // Variant color 하위TYPE
  BackGroundColorType,
  TextColorType,
  //Color List
  BaseColorList,
  VariantColorList,
  //Pick
  ColorProperty,
  PickThemeColor,
  ColorObjectList,
  PickPalletteKeys,
};
