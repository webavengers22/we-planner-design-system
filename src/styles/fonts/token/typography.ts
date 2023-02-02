import { fontStyle } from './fonts';
import { ITypographyStyle } from '../interface';
const { common, size, lineHeight } = fontStyle;

export const typography: ITypographyStyle = {
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
