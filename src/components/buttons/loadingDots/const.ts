import { themes } from '@theme/index';
import { css } from '@emotion/react';

export const LOADING_COLORS = {
  primary: css`
    background: ${themes.orange_500};
    color: ${themes.common_white};
  `,
  secondary: css`
    background: ${themes.common_black};
    color: ${themes.common_white};
  `,
} as const;
