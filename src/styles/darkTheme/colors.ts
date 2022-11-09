const ColorCode = {
  common: {
    white: '#FFFFFF',
    black: '#000000', // 메인/블랙1
  },
  main: {
    orange100: '#FFFFFF',
    orange200: '#FFFFFF',
    orange300: '#FFFFFF',
    orange400: '#FFFFFF',
    orange500: '#FFFFFF',
    orange600: '#FFFFFF',
    orange700: '#FFFFFF',
  },
  gray: {
    gray100: '#FFFAEE',
    gray200: '#f6f0e4',
    gray300: '#E9E3D7',
    gray400: '#C6C1B5',
    gray500: '#A8A297',
    gray600: '#7E796E',
    gray700: '#6A655A',
    gray800: '#4A453C',
    gray900: '#28241B',
  },
  status: {
    error: '#CC2200',
    info: '#127CB3',
    masuccessin: '#109867',
  },
};

export type ColorCode = typeof ColorCode;

export default ColorCode;
