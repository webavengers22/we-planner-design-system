import { themes } from '@/theme';
const { color } = themes;
const sizes = {
  sm: '1rem',
  md: '1.25rem',
  lg: '1.5rem',
};

export const sizeSets = {
  sm: {
    size: '1rem',
    padding: '0.25rem 1rem',
  },
  md: {
    size: '1.25rem',
    padding: '0.5rem 1rem',
  },
  lg: {
    size: '1.5rem',
    padding: '1rem',
  },
};

export interface ButtonColorScheme {
  background: string;
  hover: string;
  active: string;
  text: string;
}
