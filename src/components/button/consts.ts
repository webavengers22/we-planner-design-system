import { theme } from 'theme';
import { css } from 'styled-components';

// export const BUTTON_SIZES = {
//   small: {
//     height: '32px',
//     minWidth: '68px',
//   },
//   medium: {
//     height: '36px',
//     minWidth: '78px',
//   },
//   large: {
//     height: '44px',
//     minWidth: '108px',
//   },
//   xLarge: {
//     height: '52px',
//     minWidth: '116px',
//   },
// } as const;

export const BUTTON_SIZES = {
  xs: css`
    min-width: 6rem;
    height: 3.6rem;
    padding: 0 1.1rem;
    line-height: 1.9rem;
    border-radius: 0.9rem;
  `,
  sm: `
  min-width: 6.8rem;
  height: 4rem;
  padding: 0 1.1rem;
  line-height: 2.2rem;
  border-radius: 1rem;
`,
  md: css`
    min-width: 9.6rem;
    height: 4.8rem;
    padding: 0 1.1rem;
    line-height: 2.4rem;
    border-radius: 1.2rem;
  `,
  lg: css`
    min-width: 9.6rem;
    height: 5.6rem;
    padding: 0 1.1rem;
    line-height: 2.4rem;
    border-radius: 1.6rem;
  `,
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
} as const;
