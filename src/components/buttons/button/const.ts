import { themes } from '@/theme';
import { keyframes, css } from '@emotion/react';
import styled from '@emotion/styled';

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
    border: 1px solid ${themes.orange_500};
    background: ${themes.orange_500};
    color: ${themes.common_white};
    :hover,
    :active {
      border: 1px solid ${themes.orange_500};
      background-color: ${themes.orange_500};
    }

    :disabled {
      border: 1px solid ${themes.orange_500};
      background-color: ${themes.orange_500};
      color: ${themes.common_white};
      pointer-events: none;
    }
  `,
  secondary: css`
    background: ${themes.common_black};
    color: ${themes.common_white};
  `,
} as const;
