import { colorType } from './type';

const common: colorType<'white' | 'black'> = {
  white: '#FFFFFF',
  black: '#15130E', // 메인/블랙1
};

const orange = {
  orange50: '#FEEFE6', //brand color
  orange100: '#FFE3DA',
  orange200: '#FFC7B4',
  orange300: '#FF855B',
  orange400: '#FF6C34',
  orange500: '#FF4500',
  orange600: '#E33400',
  orange700: '#CC2200',
} as const;

const teal = {
  teal50: '#E0F2F1', //brand color
  teal100: '#82DFDB',
  teal200: '#80CBC4',
  teal300: '#4DB6AC',
  teal400: '#26A69A',
  teal500: '#009688',
  teal600: '#00796B',
  teal700: '#00695C',
} as const;

const gray = {
  gray100: '#FAF6EC',
  gray200: '#F4EFE3',
  gray300: '#E9E3D7',
  gray400: '#C6C1B5',
  gray500: '#A8A297',
  gray600: '#7E796E',
  gray700: '#6A655A',
  gray800: '#4A453C',
  gray900: '#28241B',
} as const;

const status = {
  success: '#109867',
  info: '#127CB3',
  warning: '#DC1B2C',
  error: '#DC1B2C',
} as const;

export const color = {
  common: { ...common },
  orange: { ...orange },
  gray: { ...gray },
  teal: { ...teal },
  status: { ...status },
};
