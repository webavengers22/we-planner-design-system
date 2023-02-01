import { fontStyle } from './fonts';
import { ITypographyStyle } from '../interface';
const { common, size, lineHeight } = fontStyle;

export const typography: ITypographyStyle = {
  display1: {
    fontFamily: common.family,
    fontSize: size[800],
    lineHeight: lineHeight[800],
  },
  display2: {
    fontFamily: common.family,
    fontSize: size[700],
    lineHeight: lineHeight[700],
  },
  display3: {
    fontFamily: common.family,
    fontSize: size[600],
    lineHeight: lineHeight[600],
  },
  headline1: {
    fontFamily: common.family,
    fontSize: size[600],
    lineHeight: lineHeight[600],
  },
  headline2: {
    fontFamily: common.family,
    fontSize: size[500],
    lineHeight: lineHeight[500],
  },
  title: {
    fontFamily: common.family,
    fontSize: size[400],
    lineHeight: lineHeight[400],
  },
  body1: {
    fontFamily: common.family,
    fontSize: size[300],
    lineHeight: lineHeight[300],
  },
  body2: {
    fontFamily: common.family,
    fontSize: size[200],
    lineHeight: lineHeight[200],
  },
  caption: {
    fontFamily: common.family,
    fontSize: size[100],
    lineHeight: lineHeight[200],
  },
  button: {
    fontFamily: common.family,
    fontSize: size[100],
    lineHeight: lineHeight[200],
  },
};
