import { ThemeMode } from '@/types/themeType';
import { ValueOf } from '@/utils';

type Color = {
  [key: number | string]: string;
};

type PalletteType = 'common' | ThemeMode;
type ColorGroupType = 'common' | 'gray' | 'status' | 'orange' | 'teal';
type VariantGroupType = 'background' | 'text';
type PalletteGroupType = ColorGroupType & VariantGroupType;

type ColorObj = Record<number | string, string>;
type ColorGroupObj = Record<keyof ColorGroupType, Color>;
type PalletteGroupObj = Record<keyof PalletteGroupType, Color>;

type ColorGroup = {
  [key in ColorGroupType]: Color;
};

type ThemeGroup = {
  [key in VariantGroupType]: Color;
};

type PalletteGroup = {
  [key in PalletteGroupType]: Color;
};

type Pallette = {
  [key in PalletteType]: PalletteGroup;
};

type Theme = {
  [key in ThemeMode]: ThemeGroup;
};

type GetColorList<T> = {
  readonly [P in keyof T]: `${P extends number | string ? P : never}-${keyof T[P] extends
    | string
    | number
    ? keyof T[P]
    : never}`;
}[keyof T];

type ColorList = GetColorList<ColorGroup>;
type ThemeList = GetColorList<ThemeGroup>;
type PaletteList = GetColorList<PalletteGroup>;
type ColorDefine = ColorList & ThemeList;
type ColorDefineKey = keyof ColorDefine;

type GetColorOptions<T> = {
  readonly [P in keyof T]: keyof T[P];
};

type ColorOptions = GetColorOptions<ColorDefine>;
type Common = ColorOptions[keyof ColorList];
type Others = ValueOf<Omit<ColorOptions, keyof ThemeList>>;

type ColorArray = [ColorDefine, ThemeList | ColorList];

export type {
  ColorGroupType,
  VariantGroupType,
  Color,
  Theme,
  Pallette,
  PalletteGroup,
  ColorGroup,
  ThemeGroup,
  ColorDefine,
  ColorDefineKey,
  ColorList,
  ThemeList,
  PaletteList,
  PalletteGroupObj,
  ColorArray,
};
