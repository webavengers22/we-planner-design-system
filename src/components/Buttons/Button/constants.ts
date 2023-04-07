import { themes } from '@/theme';
import { getCSSVarValue } from '@/utils';
import { lighten, darken } from 'polished';
import type { ButtonColorScheme, ButtonProps, ButtonType } from './types';

const { color } = themes;
export const schemes: Record<ButtonType, ButtonColorScheme> = {
  primary: {
    background: color['orange-500'],
    hover: getCSSVarValue(color['orange-500']),
    active: getCSSVarValue(color['orange-500']),
    text: color['common-white'],
  },
  secondary: {
    background: color['teal-500'],
    hover: getCSSVarValue(color['teal-500']),
    active: getCSSVarValue(color['teal-500']),
    text: color['common-white'],
  },
  tertiary: {
    background: color['common-black'],
    hover: getCSSVarValue(color['common-black']),
    active: getCSSVarValue(color['common-black']),
    text: color['common-white'],
  },
  quinary: {
    background: color['gray-300'],
    hover: getCSSVarValue(color['gray-300']),
    active: getCSSVarValue(color['gray-300']),
    text: color['common-white'],
  },
};
console.log(schemes);

export const sizeSets = {
  sm: {
    height: '1.5rem',
  },
  md: {
    height: '2.5rem',
  },
  lg: {
    height: '3rem',
  },
};
