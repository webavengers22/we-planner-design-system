import { VariantColorObject } from '../interface';
import { baseColor } from './colors';

const button = {
  primary: baseColor.orange[500],
  secondary: baseColor.orange[500],
  tertiary: baseColor.orange[500],
} as const;

const background = {
  default: baseColor.gray[800],
};

const text = {
  default: baseColor.common.white,
} as const;

export const darkColor: VariantColorObject = {
  button: { ...button },
  background: { ...background },
  text: { ...text },
} as const;
