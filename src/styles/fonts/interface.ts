import { CommonType, FontRange, WeightType, Font } from './type';

interface ITypography {
  fontWeight?: number | string;
  fontSize?: string | number;
  lineHeight?: number | string;
}

/** Typography interface */
interface ITypographyStyle {
  fontFamily: string | number;
  display3: ITypography;
  display2: ITypography;
  display1: ITypography;
  headline1: ITypography;
  headline2: ITypography;
  title: ITypography;
  body1: ITypography;
  body2: ITypography;
  caption: ITypography;
  button: ITypography;
}

/** FontStyle interface */
interface IFontStyleProperties {
  common: {
    [key in CommonType]: Font;
  };
  weight: {
    [key in WeightType]: Font;
  };
  size: {
    [key in FontRange]: Font;
  };
  lineHeight: {
    [key in Exclude<FontRange, 100>]: Font;
  };
}

interface FontProperty {
  [name: string]: Font;
}

export type { ITypographyStyle, ITypography, FontProperty, IFontStyleProperties };
