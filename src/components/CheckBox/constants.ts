import { themes } from '@/theme';
import { CheckBoxType } from './types';
const { color } = themes;
export const sizeSets = {
  sm: '1rem',
  md: '1.25rem',
  lg: '1.5rem',
};

export interface CheckBoxColorScheme {
  background: string;
  hover: string;
  active: string;
  text: string;
}

export const schemes: Record<CheckBoxType, CheckBoxColorScheme> = {
  primary: {
    background: color['orange-500'],
    hover: color['orange-500'],
    active: color['orange-500'],
    text: color['common-white'],
  },
  secondary: {
    background: color['teal-500'],
    hover: color['teal-500'],
    active: color['teal-500'],
    text: color['common-white'],
  },
  tertiary: {
    background: color['gray-750'],
    hover: color['gray-750'],
    active: color['gray-750'],
    text: color['common-white'],
  },
  quinary: {
    background: color['gray-300'],
    hover: color['gray-300'],
    active: color['gray-300'],
    text: color['common-white'],
  },
};
