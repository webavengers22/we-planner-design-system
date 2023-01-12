import { paletteColor, themeColor } from './constant';
import { baseColor } from './colors';
import { ThemeMode as ThemeColorType } from '@/types/themeType';

type PalletteType = 'common' | ThemeColorType;
type BaseColorType = 'common' | 'gray' | 'status' | 'orange' | 'teal';
type VariantColorType = 'background' | 'text';
type AllColorType = BaseColorType | VariantColorType;

type ColorObject = {
  [key in BaseColorType]: ColorProperty;
};
type ColorProperty = {
  [key: number | string]: string;
};
type ThemeObject = {
  [key in VariantColorType]: ColorProperty;
};

interface PalletteDefine {
  light: ThemeObject;
  dark: ThemeObject;
  common: ColorObject;
}

type BaseColor = typeof baseColor;
type ThemeColor = typeof themeColor.light;
type PaletteColor = typeof paletteColor;

type PickBaseColor = Record<BaseColorType, ColorObject>;
type PickThemeColor = Record<VariantColorType, ThemeObject>;
type PickPalletteColor = Record<AllColorType, ColorObject | ThemeObject>;

type GetColorList<T> = {
  readonly [P in keyof T]: `${P extends number | string ? P : never}-${keyof T[P] extends
    | string
    | number
    ? keyof T[P]
    : never}`;
}[keyof T];

type BaseColorList = GetColorList<BaseColor>;
type ThemeList = GetColorList<ThemeColor>;
type PaletteList = GetColorList<PaletteColor>;

type ColorDefine = BaseColorList | ThemeList;
type ColorDefineKey = keyof ColorDefine;
type GetColorDefine = Record<ColorDefine, string>;

const colorListArray = Object.entries(baseColor)
  // .map(color => Object.keys(color[1]).map(value => `${color[0]}-${value}`))
  .flat() as BaseColorList[];

type GetColorOptions<T> = {
  readonly [P in keyof T]: keyof T[P];
};
type ColorOptions = GetColorOptions<ColorDefine>;

/* type Common = ColorOptions['common'];
type Others = ValueOf<Omit<ColorOptions, 'common'>>;
type ColorArray = [ColorDefine, Common | Others]; */

export type {
  ColorProperty,
  ColorObject,
  ThemeObject,
  BaseColorType,
  VariantColorType,
  PalletteDefine,
};
