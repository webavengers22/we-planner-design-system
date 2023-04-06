import { CommonColorType } from '@/styles/colors';
import { css } from '@emotion/react';
import { themes } from '@theme/index';

const { color } = themes;
export const LOADING_COLORS = {
  primary: css`
    background: ${color['orange-500']};
    color: ${color['common-white']};
  `,
  secondary: css`
    background: ${color['common-black']};
    color: ${color['common-white']};
  `,
} as const;
