import { IVariantColorObject } from '../interface';
import { baseColor } from './colors';

const button = {
  primary: baseColor.orange[500],
  secondary: baseColor.teal[500],
  tertiary: baseColor.gray[500],
} as const;

const background = {
  default: baseColor.gray[800],
};

const text = {
  default: baseColor.common.white,
} as const;

const storybook = {
  primary: baseColor.orange[500],
  secondary: baseColor.orange[500],
  background: baseColor.gray[800],
};

export const darkColor: IVariantColorObject = {
  button: { ...button },
  background: { ...background },
  text: { ...text },
  storybook: { ...storybook },
} as const;
