import { theme } from 'theme';
import { StyledCss } from 'foundation';
import { css } from 'styled-components';
import type { ButtonVariantType } from './types';

export const BUTTON_SIZES = {
  small: {
    height: '32px',
    minWidth: '68px',
  },
  medium: {
    height: '36px',
    minWidth: '78px',
  },
  large: {
    height: '44px',
    minWidth: '108px',
  },
  xLarge: {
    height: '52px',
    minWidth: '116px',
  },
} as const;

export const BUTTON_COLORS = {
  primary: css`
    background: ${theme.orange500};
    color: ${theme.white};
  `,
  secondary: css`
    background: ${theme.black};
    color: ${theme.white};
  `,
};
