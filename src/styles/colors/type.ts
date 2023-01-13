import { lightColor } from './light';
import { darkColor } from './dark';
import { baseColor } from './colors';
import { ThemeMode as ThemeColorType } from '@/types/themeType';
import { paletteColor, themeColor } from './constant';

/** 기본 팔레트 타입 */
type Color = string;
type PalletteType = 'standard' | ThemeColorType;
type BaseColorType = 'common' | 'gray' | 'status' | 'orange' | 'teal';
type VariantColorType = 'background' | 'text';
type AllColorType = BaseColorType | VariantColorType;

/** base color TYPE  */
type ColorRange = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type CommColorType = 'white' | 'black';
type StatusType = 'success' | 'info' | 'warning' | 'error';

/** base color object  */
type CommonColorObject = Record<CommColorType, Color>;
type OrangeTealColorObject = Record<Exclude<ColorRange, 800 | 900>, Color>;
type GrayColorObject = Record<Exclude<ColorRange, 50>, Color>;
type StatusObject = Record<StatusType, string>;
type BaseColorObject = Record<BaseColorType, Color>;

/** theme color TYPE  */
type BackGroundColorType = 'default' | 'paper';
type TextColorType = 'primary' | 'secondary';

/** theme color object  */
type BackGroundColorObject = Record<BackGroundColorType, Color>;
type TextColorObject = Record<TextColorType, Color>;

interface ColorProperty {
  [key: string | number]: Color;
}

type BaseColor = typeof baseColor;
type ThemeColor = typeof darkColor | typeof lightColor;
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
type ThemeList = GetColorList<ThemeColor>;
type PaletteList = GetColorList<PaletteColor>;

type BaseColorOptions = GetColorOptions<BaseColor>;
type ThemeColorOptions = GetColorOptions<ThemeColor>;
export type {
  BackGroundColorObject,
  TextColorObject,
  TextColorType,
  CommColorType,
  OrangeTealColorObject,
  GrayColorObject,
  CommonColorObject,
  StatusObject,
  StatusType,
  Color,
  ColorProperty,
  AllColorType,
  BaseColorType,
  VariantColorType,
  BaseColorList,
};
