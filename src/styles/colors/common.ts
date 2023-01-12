import { Color, ColorGroup } from './type';

const common: Color = {
  white: '#FFFFFF',
  black: '#15130E', // 메인/블랙1
};

const orange: Color = {
  50: '#FEEFE6', //brand color
  100: '#FFE3DA',
  200: '#FFC7B4',
  300: '#FF855B',
  400: '#FF6C34',
  500: '#FF4500',
  600: '#E33400',
  700: '#CC2200',
} as const;

const teal: Color = {
  50: '#E0F2F1', //brand color
  100: '#82DFDB',
  200: '#80CBC4',
  300: '#4DB6AC',
  400: '#26A69A',
  500: '#009688',
  600: '#00796B',
  700: '#00695C',
} as const;

const gray: Color = {
  100: '#FAF6EC',
  200: '#F4EFE3',
  300: '#E9E3D7',
  400: '#C6C1B5',
  500: '#A8A297',
  600: '#7E796E',
  700: '#6A655A',
  800: '#4A453C',
  900: '#28241B',
} as const;

const status: Color = {
  success: '#109867',
  info: '#127CB3',
  warning: '#DC1B2C',
  error: '#DC1B2C',
} as const;

export const color: ColorGroup = {
  common: { ...common },
  orange: { ...orange },
  gray: { ...gray },
  teal: { ...teal },
  status: { ...status },
} as const;
