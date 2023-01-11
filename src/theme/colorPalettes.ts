import { color } from '@/styles/colors/colors';

export const lightPalette = {
  background: {
    default: color.common.white,
    paper: color.common.white,
  },
  text: {
    primary: color.gray[900],
    secondary: color.gray[700],
  },
};

export const darkPalette = {
  background: {
    default: color.gray[900],
    paper: color.gray[800],
  },
  text: {
    primary: color.common.white,
    secondary: color.gray[200],
  },
};

export const standardPalette = {
  ...color,
};
