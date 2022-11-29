import { theme } from 'theme';
import { css } from 'styled-components';

export const LOADING_COLORS = {
  primary: css`
    background: ${theme.orange500};
    color: ${theme.white};
  `,
  secondary: css`
    background: ${theme.black};
    color: ${theme.white};
  `,
} as const;
