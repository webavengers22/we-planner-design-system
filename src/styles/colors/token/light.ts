import { VariantColorObject } from '../interface';
import { baseColor } from './colors';

const button = {
  primary: baseColor.orange[500],
  secondary: baseColor.orange[500],
  tertiary: baseColor.orange[500],
} as const;

const background = {
  default: baseColor.common.white,
};

const text = {
  default: baseColor.common.black,
} as const;

export const lightColor: VariantColorObject = {
  button: { ...button },
  background: { ...background },
  text: { ...text },
} as const;
