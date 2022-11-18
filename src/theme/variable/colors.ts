import {
  CommonColorVariables,
  ThemeColorVariables,
  ThemeMainType,
  ColorKeys,
  PaletteType,
  lightColor,
  darkColor,
  commonColor,
} from '../colors';
import { cssVar, KeysOfUnion } from 'foundation/utils/index';

// TODO: theme 저장
const buildCssVariables = <T extends Object>(variables: T): string => {
  const keys = Object.keys(variables) as KeysOfUnion<T>[];
  return keys.reduce(
    (acc, key) => acc.concat(`--${key.replace(/_/g, '-')}: ${variables[key]};`, '\n'),
    '',
  );
};

export const ThemeColorSets: Record<ThemeMainType, ThemeColorVariables> = {
  light: { ...lightColor },
  dark: { ...darkColor },
};

export const colorThemes = {
  light: buildCssVariables<ThemeColorVariables>(ThemeColorSets.light),
  dark: buildCssVariables<ThemeColorVariables>(ThemeColorSets.dark),
  common: buildCssVariables<CommonColorVariables>(commonColor),
};

type ColorUniOnKey = CommonColorVariables | ThemeColorVariables;
type ColorKeysOfUnion = KeysOfUnion<ColorUniOnKey>;
type PaletteKeysOfUnion = Record<ColorKeysOfUnion, string>;

const paletteKeys = Object.keys(ThemeColorSets.light) as ColorKeysOfUnion[];

export const ColorPalette: Record<ColorKeysOfUnion, string> = paletteKeys.reduce((acc, current) => {
  acc[current] = cssVar(current);
  return acc;
}, {} as PaletteKeysOfUnion);
