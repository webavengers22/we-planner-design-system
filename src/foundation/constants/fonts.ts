import { UnitMap } from 'foundation/utils';
import {
  typographyStylesKey,
  typographyWeightType,
  typographyTagNamesType,
} from 'foundation/typings';
import { fontVariable } from 'theme/fonts';
const TYPOGRAPHY_FONT = 'Pretendard';

const TYPOGRAPHY_STYLES = {
  display3: {
    fontSize: fontVariable.fontSize900,
    lineHeight: fontVariable.lineHeight800,
    fontFamily: fontVariable.fontWeightBold,
  },
  display2: {
    fontSize: fontVariable.fontSize800,
    lineHeight: fontVariable.lineHeight700,
    fontWeight: fontVariable.fontWeightBold,
  },
  display1: {
    fontSize: fontVariable.fontSize700,
    lineHeight: fontVariable.lineHeight600,
    fontWeight: fontVariable.fontWeightBold,
  },
  headline1: {
    fontSize: fontVariable.fontSize600,
    lineHeight: fontVariable.lineHeight500,
    fontWeight: fontVariable.fontWeightRegular,
  },
  headline2: {
    fontSize: fontVariable.fontSize600,
    lineHeight: fontVariable.lineHeight500,
    fontWeight: fontVariable.fontWeightRegular,
  },
  title: {
    fontSize: fontVariable.fontSize500,
    lineHeight: fontVariable.lineHeight400,
    fontWeight: fontVariable.fontWeightRegular,
  },
  body1: {
    fontSize: fontVariable.fontSize400,
    lineHeight: fontVariable.lineHeight300,
    fontWeight: fontVariable.fontWeightRegular,
  },
  body2: {
    fontSize: fontVariable.fontSize300,
    lineHeight: fontVariable.lineHeight200,
    fontWeight: fontVariable.fontWeightRegular,
  },
  caption: {
    fontSize: fontVariable.fontSize200,
    lineHeight: fontVariable.lineHeight200,
    fontWeight: fontVariable.fontWeightRegular,
  },
  button: {
    fontSize: fontVariable.fontSize200,
    lineHeight: fontVariable.lineHeight200,
    fontWeight: fontVariable.fontWeightRegular,
  },
};

const TYPOGRAPHY_STYLES_STORYBOOK = {
  display3: {
    fontName: 'Display3',
    fontVarint: 'display3',
    fontSize: fontVariable.fontSize900,
    lineHeight: fontVariable.lineHeight800,
    fontWeight: true,
  },
  display2: {
    fontName: 'Display2',
    fontVarint: 'display2',
    fontSize: fontVariable.fontSize800,
    lineHeight: fontVariable.lineHeight700,
    fontWeight: true,
  },
  display1: {
    fontName: 'Display1',
    fontVarint: 'display1',
    fontSize: fontVariable.fontSize700,
    lineHeight: fontVariable.lineHeight600,
    fontWeight: true,
  },

  headline1: {
    fontName: 'Headline1',
    fontVarint: 'headline1',
    fontSize: fontVariable.fontSize600,
    lineHeight: fontVariable.lineHeight500,
    fontWeight: false,
  },
  headline1_b: {
    fontName: 'Headline1 Bold',
    fontVarint: 'headline1',
    fontSize: fontVariable.fontSize600,
    lineHeight: fontVariable.lineHeight500,
    fontWeight: true,
  },
  headline2: {
    fontName: 'Headline2',
    fontVarint: 'headline2',
    fontSize: fontVariable.fontSize600,
    lineHeight: fontVariable.lineHeight500,
    fontWeight: false,
  },
  headline2_b: {
    fontName: 'Headline2 Bold',
    fontVarint: 'headline2',
    fontSize: fontVariable.fontSize600,
    lineHeight: fontVariable.lineHeight500,
    fontWeight: true,
  },
  title: {
    fontName: 'Title',
    fontVarint: 'title',
    fontSize: fontVariable.fontSize500,
    lineHeight: fontVariable.lineHeight400,
    fontWeight: false,
  },
  title_b: {
    fontName: 'Title Bold',
    fontVarint: 'title',
    fontSize: fontVariable.fontSize500,
    lineHeight: fontVariable.lineHeight400,
    fontWeight: true,
  },
  body1: {
    fontName: 'Body1',
    fontVarint: 'body1',
    fontSize: fontVariable.fontSize400,
    lineHeight: fontVariable.lineHeight300,
    fontWeight: false,
  },
  body1_b: {
    fontName: 'Body1 Bold',
    fontVarint: 'body1',
    fontSize: fontVariable.fontSize400,
    lineHeight: fontVariable.lineHeight300,
    fontWeight: true,
  },
  body2: {
    fontName: 'Body2',
    fontVarint: 'body2',
    fontSize: fontVariable.fontSize300,
    lineHeight: fontVariable.lineHeight200,
    fontWeight: false,
  },
  body2_b: {
    fontName: 'Body2 Bold',
    fontVarint: 'body2',
    fontSize: fontVariable.fontSize300,
    lineHeight: fontVariable.lineHeight200,
    fontWeight: true,
  },
  caption: {
    fontName: 'Caption',
    fontVarint: 'caption',
    fontSize: fontVariable.fontSize200,
    lineHeight: fontVariable.lineHeight200,
    fontWeight: false,
  },
  button: {
    fontName: 'button',
    fontVarint: 'button',
    fontSize: fontVariable.fontSize200,
    lineHeight: fontVariable.lineHeight200,
    fontWeight: false,
  },
};

const TYPOGRAPHY_COMPONENT: Record<typographyStylesKey, typographyTagNamesType> = {
  display1: 'h1',
  display2: 'h2',
  display3: 'h3',
  headline1: 'h4',
  headline2: 'h5',
  title: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'p',
  button: 'span',
};

const TYPOGRAPHY_WEIGHT: UnitMap<typographyWeightType, number> = {
  normal: 400,
  bold: 700,
};

export {
  TYPOGRAPHY_COMPONENT,
  TYPOGRAPHY_STYLES_STORYBOOK,
  TYPOGRAPHY_WEIGHT,
  TYPOGRAPHY_STYLES,
  TYPOGRAPHY_FONT,
};
