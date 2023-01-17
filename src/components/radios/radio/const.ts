import { themes } from '@theme/index';
import { css } from '@emotion/react';

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
    background: ${themes.orange_500};
    color: ${themes.common_white};
    :hover,
    :active {
      border: 1px solid ${themes.orange_500};
      background-color: blue;
    }

    :disabled {
      border: 1px solid ${themes.orange_500};
      background-color: pink;
      color: ${themes.common_white};
      pointer-events: none;
    }
  `,
  secondary: css`
    background: ${themes.common_black};
    color: ${themes.common_white};
  `,
} as const;
