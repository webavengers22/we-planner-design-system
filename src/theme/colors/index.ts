type ColorType = 'light' | 'dark';
import { lightColor } from './light';
import { darkColor } from './dark';
interface ColorInterface {
  white: string;
  black: string;
  orange100: string;
  orange200: string;
  orange300: string;
  orange400: string;
  orange500: string;
  orange600: string;
  orange700: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;
  error: string;
  info: string;
  masuccessin: string;
}

export const ColorTheme: Record<ColorType, ColorInterface> = {
  light: {
    white: '#FFFFFF',
    black: '#000000',
    orange100: '#FEE8E6',
    orange200: '#FFC7B4',
    orange300: '#FF855B',
    orange400: '#FF6C34',
    orange500: '#FF4500',
    orange600: '#E33400',
    orange700: '#CC2200',
    gray100: '#FFFAEE',
    gray200: '#f6f0e4',
    gray300: '#E9E3D7',
    gray400: '#C6C1B5',
    gray500: '#A8A297',
    gray600: '#7E796E',
    gray700: '#6A655A',
    gray800: '#4A453C',
    gray900: '#28241B',
    error: '#CC2200',
    info: '#127CB3',
    masuccessin: '#109867',
  },
  dark: {
    white: '#FFFFFF',
    black: '#000000',
    orange100: '#FEE8E6',
    orange200: '#FFC7B4',
    orange300: '#FF855B',
    orange400: '#FF6C34',
    orange500: '#FF4500',
    orange600: '#E33400',
    orange700: '#CC2200',
    gray100: '#FFFAEE',
    gray200: '#f6f0e4',
    gray300: '#E9E3D7',
    gray400: '#C6C1B5',
    gray500: '#A8A297',
    gray600: '#7E796E',
    gray700: '#6A655A',
    gray800: '#4A453C',
    gray900: '#28241B',
    error: '#CC2200',
    info: '#127CB3',
    masuccessin: '#109867',
  },
};
//css color로 변환
type ColorleKey = keyof ColorInterface;
type ColorPalette = Record<ColorleKey, string>;
const ColorleKeys = Object.keys(ColorTheme.light) as ColorleKey[];
const cssVar = (name: string) => `var(--${name.replace(/_/g, '-')})`;

export const themedPalette: Record<ColorleKey, string> = ColorleKeys.reduce((acc, current) => {
  acc[current] = cssVar(current);
  return acc;
}, {} as ColorPalette);
