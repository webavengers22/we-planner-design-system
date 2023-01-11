import { ValueOf } from '@src/utils';
import { DefaultTheme } from 'styled-components';
import { color } from './colors';
import { COLOR_GROUP, THEME_MODE, VARIANT_GROUP } from './constant';

type Color = {
  [key: number | string]: string;
};

type ColorGroup = {
  [key in keyof typeof COLOR_GROUP]: Color;
};

type ThemeGroup = {
  [key in keyof typeof VARIANT_GROUP]: Color;
};

type Theme = {
  [key in keyof typeof THEME_MODE]: ThemeGroup;
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

export type { Color, Theme, ColorGroup, ThemeGroup };
