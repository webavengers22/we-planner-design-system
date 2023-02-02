import { ElementType } from 'react';
import { TypographyElement, TypographyVariant } from './type';

/** Typography 스타일과  */
const VariantMapping: { [key in TypographyVariant]: ElementType & TypographyElement } = {
  display1: 'h1',
  display2: 'h2',
  display3: 'h3',
  headline1: 'h3',
  headline2: 'h4',
  title: 'h5',
  body1: 'p',
  body2: 'p',
  caption: 'p',
  button: 'span',
};

export { VariantMapping };
