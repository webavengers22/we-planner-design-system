import { COLOR_GROUP, VARIANT_GROUP } from './constant';
import { ThemeMode } from '@/types/themeType';
type Color = {
  [key: number | string]: string;
};

type ColorObj = Record<number | string, string>;
type ColorGroupObj = Record<keyof typeof COLOR_GROUP, string>;
type ColorGroup = {
  [key in keyof typeof COLOR_GROUP]: Color;
};

type ThemeGroup = {
  [key in keyof typeof VARIANT_GROUP]: Color;
};

type Theme = {
  [key in ThemeMode]: ThemeGroup;
};

type getColorList<T> = {
  readonly [P in keyof T]: `${P extends number | string ? P : never}-${keyof T[P] extends
    | string
    | number
    ? keyof T[P]
    : never}`;
}[keyof T];

export type ColorList = getColorList<ColorGroup>;
export type ThemeList = getColorList<ThemeGroup>;
export type ColorDefinition = keyof ColorGroup;

type ColorArray = [ColorDefinition];

export type { Color, Theme, ColorGroup, ThemeGroup, ColorObj, ColorGroupObj };
