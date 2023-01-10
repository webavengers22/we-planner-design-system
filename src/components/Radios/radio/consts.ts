import { theme } from 'theme';
import { css } from 'styled-components';

export const RADIO_SIZES = {
  sm: 1,
  md: 1.3,
  lg: 1.7,
} as const;

export const RADIO_FSIZES = {
  sm: 1.2,
  md: 1.4,
  lg: 1.7,
} as const;

export const RADIO_COLORS = {
  primary: css`
    border: 1px solid red;
    background: ${theme.orange500};
    color: ${theme.white};
    :hover,
    :active {
      border: 1px solid ${theme.orange500};
      background-color: blue;
    }

    :disabled {
      border: 1px solid ${theme.orange500};
      background-color: pink;
      color: ${theme.white};
      pointer-events: none;
    }
  `,
  secondary: css`
    background: ${theme.black};
    color: ${theme.white};
  `,
} as const;
