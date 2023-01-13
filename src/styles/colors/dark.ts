import { baseColor } from './colors';
import { BackGroundColorObject, TextColorObject } from './type';

const background: BackGroundColorObject = {
  default: baseColor.common.white,
  paper: baseColor.common.white,
} as const;

const text: TextColorObject = {
  primary: baseColor.gray[900],
  secondary: baseColor.gray[700],
} as const;

export const darkColor = {
  background: { ...background },
  text: { ...text },
} as const;
