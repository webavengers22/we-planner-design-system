import {
  Color,
  CommonType,
  ColorRange,
  StatusType,
  BackGroundColorType,
  TextColorType,
  CommonColorType,
  StorybookColorType,
} from './type';

interface PalletteColor {
  standard: IBaseColorObject;
  dark: IVariantColorObject;
  light: IVariantColorObject;
}

/** BaseColor interface */
interface IBaseColorObject {
  common: {
    [key in CommonType]: Color;
  };
  gray: {
    [key in Exclude<ColorRange, 50>]: Color;
  };
  orange: {
    [key in Exclude<ColorRange, 750 | 800 | 900>]: Color;
  };
  teal: {
    [key in Exclude<ColorRange, 750 | 800 | 900>]: Color;
  };
  status: {
    [key in StatusType]: Color;
  };
}

/** Variant Color : light, dark interface */
interface IVariantColorObject {
  background: {
    [key in BackGroundColorType]: Color;
  };
  text: {
    [key in TextColorType]: Color;
  };
  button: {
    [key in CommonColorType]: Color;
  };
  storybook: {
    [key in StorybookColorType]: Color;
  };
}

export type { IBaseColorObject, IVariantColorObject };
