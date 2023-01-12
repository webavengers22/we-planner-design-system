import { baseColor } from './colors';
import { ColorProperty, ThemeObject, VariantColorType } from './type';

const background: ColorProperty = {
  default: baseColor.common.white,
  paper: baseColor.common.white,
} as const;

const text: ColorProperty = {
  primary: baseColor.gray[900],
  secondary: baseColor.gray[700],
} as const;

export const dark: ThemeObject = {
  background: { ...background },
  text: { ...text },
} as const;
