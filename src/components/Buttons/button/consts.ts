import { themes } from '@/theme';
import { css } from '@emotion/react';

const { color, font } = themes;
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
    border: 1px solid ${color.orange_500};
    background: ${color.orange_500};
    color: ${color.common_white};
    :hover,
    :active {
      border: 1px solid ${color.orange_500};
      background-color: ${color.orange_500};
    }

    :disabled {
      border: 1px solid ${color.orange_500};
      background-color: ${color.orange_500};
      color: ${color.common_white};
      pointer-events: none;
    }
  `,
  secondary: css`
    background: ${color.common_black};
    color: ${color.common_white};
  `,
} as const;
