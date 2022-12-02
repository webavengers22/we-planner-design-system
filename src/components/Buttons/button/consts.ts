import { theme } from 'theme';
import { css } from 'styled-components';

export const BUTTON_SIZES = {
  sm: 1,
  md: 1.3,
  lg: 1.7,
} as const;

export const BUTTON_FSIZES = {
  sm: 1.2,
  md: 1.4,
  lg: 1.7,
} as const;

export const BUTTON_COLORS = {
  primary: css`
    border: 1px solid ${theme.orange500};
    background: ${theme.orange500};
    color: ${theme.white};
    :hover,
    :active {
      border: 1px solid ${theme.orange500};
      background-color: ${theme.orange500};
    }

    :disabled {
      border: 1px solid ${theme.orange500};
      background-color: ${theme.orange500};
      color: ${theme.white};
      pointer-events: none;
    }
  `,
  secondary: css`
    background: ${theme.black};
    color: ${theme.white};
  `,
} as const;
