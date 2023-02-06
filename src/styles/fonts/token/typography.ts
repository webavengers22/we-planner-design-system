import { fontStyle } from './fonts';
import { ITypographyStyle } from '../interface';
import { TypographyStoryProperty } from '../type';
const { common, size, lineHeight } = fontStyle;

export const typography = {
  fontFamily: common.family,
  display1: {
    fontSize: size[800],
    lineHeight: lineHeight[800],
  },
  display2: {
    fontSize: size[700],
    lineHeight: lineHeight[700],
  },
  display3: {
    fontSize: size[600],
    lineHeight: lineHeight[600],
  },
  headline1: {
    fontSize: size[600],
    lineHeight: lineHeight[600],
  },
  headline2: {
    fontSize: size[500],
    lineHeight: lineHeight[500],
  },
  title: {
    fontSize: size[400],
    lineHeight: lineHeight[400],
  },
  body1: {
    fontSize: size[300],
    lineHeight: lineHeight[300],
  },
  body2: {
    fontSize: size[200],
    lineHeight: lineHeight[200],
  },
  caption: {
    fontSize: size[100],
    lineHeight: lineHeight[200],
  },
  button: {
    fontSize: size[100],
    lineHeight: lineHeight[200],
  },
};

export const storybook_typography: TypographyStoryProperty = {
  display1: {
    fontSize: size[800],
    lineHeight: lineHeight[800],
    fontWeight: true,
  },
  display2: {
    fontSize: size[700],
    lineHeight: lineHeight[700],
    fontWeight: true,
  },
  display3: {
    fontSize: size[600],
    lineHeight: lineHeight[600],
    fontWeight: true,
  },
  headline1: {
    fontSize: size[600],
    lineHeight: lineHeight[600],
  },
  headline1_b: {
    fontSize: size[600],
    lineHeight: lineHeight[600],
    fontWeight: true,
  },
  headline2: {
    fontSize: size[500],
    lineHeight: lineHeight[500],
  },
  headline2_b: {
    fontSize: size[500],
    lineHeight: lineHeight[500],
    fontWeight: true,
  },
  title: {
    fontSize: size[400],
    lineHeight: lineHeight[400],
  },
  title_b: {
    fontSize: size[400],
    lineHeight: lineHeight[400],
    fontWeight: true,
  },
  body1: {
    fontSize: size[300],
    lineHeight: lineHeight[300],
  },
  body1_b: {
    fontSize: size[300],
    lineHeight: lineHeight[300],
    fontWeight: true,
  },
  body2: {
    fontSize: size[200],
    lineHeight: lineHeight[200],
  },
  body2_b: {
    fontSize: size[200],
    lineHeight: lineHeight[200],
    fontWeight: true,
  },
  caption: {
    fontSize: size[100],
    lineHeight: lineHeight[200],
  },
  button: {
    fontSize: size[100],
    lineHeight: lineHeight[200],
  },
};
