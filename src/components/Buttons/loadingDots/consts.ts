import { themes } from '@theme/index';
import { css } from '@emotion/react';

const { color } = themes;

export const LOADING_COLORS = {
  primary: css`
    background: ${color.orange_500};
    color: ${color.common_white};
  `,
  secondary: css`
    background: ${color.common_black};
    color: ${color.common_white};
  `,
} as const;
