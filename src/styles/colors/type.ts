import { lightColor } from './light';
import { darkColor } from './dark';
import { baseColor } from './colors';
import { ThemeMode as ThemeColorType } from '@/types/themeType';
import { paletteColor, themeColor } from './constant';

/** 기본 팔레트 타입 */
type Color = string;
type BaseColorType = 'common' | 'gray' | 'status' | 'orange' | 'teal';
type VariantColorType = 'background' | 'text';
type AllColorType = BaseColorType | VariantColorType;
type PalletteType = 'standard' | ThemeColorType;

/** Base color 하위 TYPE  */
type ColorRange = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type CommColorType = 'white' | 'black';
type StatusType = 'success' | 'info' | 'warning' | 'error';

/** Base color 하위 object  */
type CommonColorObject = Record<CommColorType, Color>;
type OrangeTealColorObject = Record<Exclude<ColorRange, 800 | 900>, Color>;
type GrayColorObject = Record<Exclude<ColorRange, 50>, Color>;
type StatusObject = Record<StatusType, string>;
type BaseLowObject = CommonColorObject | OrangeTealColorObject | GrayColorObject | StatusObject;

/** Variant color 하위 TYPE  */
type BackGroundColorType = 'default' | 'paper';
type TextColorType = 'primary' | 'secondary';

/** Variant color 하위 object  */
type BackGroundColorObject = Record<BackGroundColorType, Color>;
type TextColorObject = Record<TextColorType, Color>;
type VariantColorLowObject = BackGroundColorObject | TextColorObject;

/** Color type 속성 */
interface ColorProperty {
  [key: string | number]: Color;
}

/** Color Object  */
type BaseColorObject = Record<BaseColorType, BaseLowObject>;
type VariantColorObject = Record<VariantColorType, VariantColorLowObject>;

type BaseColor = typeof baseColor;
type VariantColor = typeof darkColor | typeof lightColor;
type PaletteColor = typeof paletteColor;

type GetColorList<T> = {
  readonly [P in keyof T]: `${P extends number | string ? P : never}-${keyof T[P] extends
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
  CommColorType,
  StatusType,
  //Base color 하위object
  CommonColorObject,
  OrangeTealColorObject,
  GrayColorObject,
  StatusObject,
  // Variant color 하위TYPE
  BackGroundColorType,
  TextColorType,
  //Variant color 하위 object
  BackGroundColorObject,
  TextColorObject,
  //Color List
  BaseColorList,
  VariantColorList,
  //Color Object
  VariantColorObject,
  BaseColorObject,
};
