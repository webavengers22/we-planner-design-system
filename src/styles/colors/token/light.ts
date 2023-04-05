import { IVariantColorObject } from '../interface';
import { baseColor } from './colors';

const button = {
  primary: baseColor.orange[500],
  secondary: baseColor.orange[500],
  tertiary: baseColor.orange[500],
} as const;

const background = {
  default: baseColor.gray[200],
} as const;

const text = {
  default: baseColor.common.black,
} as const;

const storybook = {
  primary: baseColor.orange[500],
  secondary: baseColor.orange[500],
  background: baseColor.gray[800],
};

export const lightColor: IVariantColorObject = {
  button: button,
  background: background,
  text: text,
  storybook: storybook,
} as const;
