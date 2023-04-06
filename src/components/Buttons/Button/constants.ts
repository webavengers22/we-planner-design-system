import { CommonColorType } from '@/styles/colors';
import { themes } from '@/theme';
import { ComponentColor } from '@/types';
import { keyframes, css, CSSObject } from '@emotion/react';
import { CSSProperties } from 'react';
const { color } = themes;
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
    border: 1px solid ${color['orange-500']};
    background: ${color['orange-500']};
    color: ${color['common-white']};
    :hover,
    :active {
      border: 1px solid ${color['orange-500']};
      background-color: ${color['orange-500']};
    }

    :disabled {
      border: 1px solid ${color['orange-500']};
      background-color: ${color['orange-500']};
      color: ${color['common-white']};
      pointer-events: none;
    }
  `,
  secondary: css`
    background: ${color['common-black']};
    color: ${color['common-white']};
  `,
  off: css``,
  accent: css``,
};
