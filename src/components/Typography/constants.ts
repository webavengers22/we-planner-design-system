import { typography } from '../../styles/fonts/token/typography';
import {
  TypographyVariant,
  TypographyStoryVariant,
  TypographyStoryProperty,
} from '@/styles/fonts';
import { ElementType } from 'react';
import { TypographyElement } from './type';

/** Typography 스타일과  */
const VariantMapping: {
  [key in TypographyVariant]: ElementType & TypographyElement;
} = {
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

/** Typography 스타일과  */
const StorybookMapping: { [key in TypographyStoryVariant]: TypographyVariant } =
  {
    display1: 'display1',
    display2: 'display2',
    display3: 'display3',
    headline1: 'headline1',
    headline1_b: 'headline1',
    headline2: 'headline2',
    headline2_b: 'headline2',
    title: 'title',
    title_b: 'title',
    body1: 'body1',
    body1_b: 'body1',
    body2: 'body2',
    body2_b: 'body2',
    caption: 'caption',
    button: 'button',
  };

export { VariantMapping, StorybookMapping };
