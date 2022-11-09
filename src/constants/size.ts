import { ValueOf } from 'constants/index';

//  사이즈 정의
const Size = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  fw: 'fw',
} as const;

//  공통 사이즈 스타일 정의
const common = {
  size: {
    [Size.xs]: '1.625rem',
    [Size.sm]: '1.875rem',
    [Size.md]: '2.25rem',
    [Size.lg]: '2.75rem',
    [Size.xl]: '3.5rem',
    [Size.fw]: '3.5rem',
  },
  modalSize: {
    [Size.xs]: '15rem',
    [Size.sm]: '18rem',
    [Size.md]: '30rem',
    [Size.lg]: '50rem',
    [Size.xl]: '70rem',
    [Size.fw]: '100wv',
  },
  icon: {
    [Size.xs]: '0.75em',
    [Size.sm]: '0.875em',
    [Size.md]: '1em',
    [Size.lg]: '1.25em',
    [Size.xl]: '1.5em',
    [Size.fw]: '1.5em',
  },
  borderRadius: {
    [Size.xs]: '0.25em',
    [Size.sm]: '0.25em',
    [Size.md]: '0.25em',
    [Size.lg]: '0.5em',
    [Size.xl]: '0.5em',
    [Size.fw]: '0.5em',
  },
} as const;

export { Size, common };

export type SizeType = ValueOf<typeof Size>;
