import { color } from './common';
import { Color, ThemeGroup } from './type';

const background: Color = {
  default: color.common.white,
  paper: color.common.white,
} as const;

const text: Color = {
  primary: color.gray[900],
  secondary: color.gray[700],
} as const;

export const dark: ThemeGroup = {
  background: { ...background },
  text: { ...text },
} as const;
