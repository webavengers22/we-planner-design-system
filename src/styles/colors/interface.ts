import {
  Color,
  CommonType,
  ColorRange,
  StatusType,
  BackGroundColorType,
  TextColorType,
} from './type';

interface BaseColorObject {
  common: {
    [key in CommonType]: Color;
  };
  gray: {
    [key in Exclude<ColorRange, 50>]: Color;
  };
  orange: {
    [key in Exclude<ColorRange, 800 | 900>]: Color;
  };
  teal: {
    [key in Exclude<ColorRange, 800 | 900>]: Color;
  };
  status: {
    [key in StatusType]: Color;
  };
}

interface VariantObject {
  background: {
    [key in BackGroundColorType]: Color;
  };
  text: {
    [key in Exclude<TextColorType, 50>]: Color;
  };
}

export type { BaseColorObject, VariantObject };
