import { IStyleProperties } from '..';

/** styled breakpoints 정의 */
const breakpoints = {
  xs: 320,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1440,
} as const;

/** styled spacing  정의 */
const spacing = {
  xs: '0.4rem',
  sm: '0.8rem',
  md: '1.6rem',
  lg: '2.4rem',
  xl: '3.6rem',
} as const;

/** styled radius  정의 */
const radius = {
  xs: 0,
  sm: '0.4rem',
  md: '0.8rem',
  lg: '1.6rem',
  xl: '999px',
} as const;

/** styled radius  정의 */
const transition = {
  duration: 200,
  ease: 'ease-out',
} as const;

export const style: IStyleProperties = {
  breakpoints,
  radius,
  transition,
  spacing,
};
