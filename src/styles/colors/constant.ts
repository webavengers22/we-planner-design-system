import { baseColor } from './colors';
import { dark } from './dark';
import { light } from './light';
import { ThemeMode as ThemeColorType } from '@/types/themeType';
import { PalletteDefine, ColorObject } from './type';

const paletteColor: PalletteDefine = {
  common: { ...baseColor },
  light: { ...light },
  dark: { ...dark },
};
const themeColor = {
  light: { ...paletteColor.light },
  dark: { ...paletteColor.light },
};

export { paletteColor, themeColor };
