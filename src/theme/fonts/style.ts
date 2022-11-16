import { css } from 'styled-components';
import { theme } from '..';

const text = {
  display3: css`
    font-family: ${theme.fontFamily};
    font-weight: ${theme.fontWeightBold};
    font-display: ${theme.fontDisplay};
    font-size: ${theme.fontSize900};
    line-height: ${theme.lineHeight800};
  `,
  display2: css`
    font-family: ${theme.fontFamily};
    font-weight: ${theme.fontWeightBold};
    font-display: ${theme.fontDisplay};
    font-size: ${theme.fontSize800};
    line-height: ${theme.lineHeight700};
  `,
  display1: css`
    font-family: ${theme.fontFamily};
    font-weight: ${theme.fontWeightBold};
    font-display: ${theme.fontDisplay};
    font-size: ${theme.fontSize700};
    line-height: ${theme.lineHeight600};
  `,
  headline_b: css`
    font-family: ${theme.fontFamily};
    font-weight: ${theme.fontWeightBold};
    font-display: ${theme.fontDisplay};
    font-size: ${theme.fontSize600};
    line-height: ${theme.lineHeight500};
  `,
  headline: css`
    font-family: ${theme.fontFamily};
    font-weight: ${theme.fontWeightBold};
    font-display: ${theme.fontDisplay};
    font-size: ${theme.fontSize600};
    line-height: ${theme.lineHeight500};
  `,
  title_b: css`
    font-family: ${theme.fontFamily};
    font-weight: ${theme.fontWeightRegular};
    font-display: ${theme.fontDisplay};
    font-size: ${theme.fontSize500};
    line-height: ${theme.lineHeight400};
  `,
  title: css`
    font-family: ${theme.fontFamily};
    font-weight: ${theme.fontWeightRegular};
    font-display: ${theme.fontDisplay};
    font-size: ${theme.fontSize500};
    line-height: ${theme.lineHeight400};
  `,
  body1_b: css`
    font-family: ${theme.fontFamily};
    font-weight: ${theme.fontWeightBold};
    font-display: ${theme.fontDisplay};
    font-size: ${theme.fontSize400};
    line-height: ${theme.lineHeight300};
  `,
  body1: css`
    font-family: ${theme.fontFamily};
    font-weight: ${theme.fontWeightRegular};
    font-display: ${theme.fontDisplay};
    font-size: ${theme.fontSize400};
    line-height: ${theme.lineHeight300};
  `,
  body2_b: css`
    font-family: ${theme.fontFamily};
    font-weight: ${theme.fontWeightBold};
    font-display: ${theme.fontDisplay};
    font-size: ${theme.fontSize300};
    line-height: ${theme.lineHeight200};
  `,
  body2: css`
    font-family: ${theme.fontFamily};
    font-weight: ${theme.fontWeightBold};
    font-display: ${theme.fontDisplay};
    font-size: ${theme.fontSize300};
    line-height: ${theme.lineHeight200};
  `,
  caption: css`
    font-family: ${theme.fontFamily};
    font-weight: ${theme.fontWeightBold};
    font-display: ${theme.fontDisplay};
    font-size: ${theme.fontSize200};
    line-height: ${theme.lineHeight200};
  `,
  button: css`
    font-family: ${theme.fontFamily};
    font-weight: ${theme.fontWeightBold};
    font-display: ${theme.fontDisplay};
    font-size: ${theme.fontSize200};
    line-height: ${theme.lineHeight200};
  `,
};

export const style = {
  text,
};
