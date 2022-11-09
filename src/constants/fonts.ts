import { ValueOf } from 'constants/index';

const fontSize = {
  x2s: 'x2s',
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  fw: 'fw',
  x2l: 'x2l',
  x3l: 'x3l',
  x4l: 'x4l',
  x5l: 'x5l',
  x6l: 'x6l',
  x7l: 'x7l',
  x8l: 'x8l',
  x9l: 'x9l',
} as const;

const fonts = {
  fontSize: {
    [fontSize.x2s]: '0.625rem',
    [fontSize.xs]: '0.75rem',
    [fontSize.sm]: '0.875rem',
    [fontSize.md]: '1rem',
    [fontSize.lg]: '1.125rem',
    [fontSize.xl]: '1.25rem',
    [fontSize.fw]: '1.25rem',
    [fontSize.x2l]: '1.5rem',
    [fontSize.x3l]: '1.875rem',
    [fontSize.x4l]: '2.25rem',
    [fontSize.x5l]: '3rem',
    [fontSize.x6l]: '3.5rem',
    [fontSize.x7l]: '4rem',
    [fontSize.x8l]: '5rem',
    [fontSize.x9l]: '7rem',
  },
  lineHeight: {
    [fontSize.x2s]: '1.2',
    [fontSize.xs]: '1.3',
    [fontSize.sm]: '1.4',
    [fontSize.md]: '1.6',
    [fontSize.lg]: '1.7',
    [fontSize.xl]: '1.8',
    [fontSize.fw]: '1.8',
    [fontSize.x2l]: '1',
    [fontSize.x3l]: '1',
    [fontSize.x4l]: '1',
    [fontSize.x5l]: '1',
    [fontSize.x6l]: '1',
    [fontSize.x7l]: '1',
    [fontSize.x8l]: '1',
    [fontSize.x9l]: '1',
  },
} as const;

export { fonts, fontSize };

export type fontSizeType = ValueOf<typeof fontSize>;
