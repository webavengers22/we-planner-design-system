import { VariantObject } from '../interface';
import { baseColor } from './colors';

const background = {
  default: baseColor.common.white,
  paper: baseColor.common.white,
} as const;

const text = {
  primary: baseColor.gray[900],
  secondary: baseColor.gray[700],
} as const;

export const darkColor: VariantObject = {
  background: { ...background },
  text: { ...text },
} as const;
