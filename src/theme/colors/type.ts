
interface ThemeColorVariables {
  primary: string;
  secondary: string;
  tertiary: string;
  background: string;
  error: string;
  success: string;
  info: string;
  text: string;
}

interface CommonColorVariables {
  white: string;
  black: string; // 메인/블랙1
  orange50: string; //brand color
  orange100: string;
  orange200: string;
  orange300: string;
  orange400: string;
  orange500: string;
  orange600: string;
  orange700: string;
  teal50: string; //brand color
  teal100: string;
  teal200: string;
  teal300: string;
  teal400: string;
  teal500: string;
  teal600: string;
  teal700: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;
}

type ThemeMainType = 'light' | 'dark';
type ColorUniOnKey = CommonColorVariables | ThemeColorVariables;

export type { ColorUniOnKey, ThemeMainType, ThemeColorVariables, CommonColorVariables };
