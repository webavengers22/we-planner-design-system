import { create, themes } from '@storybook/theming';
import brandImageLight from './assets/logo_text_main.svg';
import brandImageDark from './assets/logo_text_white.svg';
const brandTitle = 'WePlanner Storybook';
const brandUrl = 'https://design.weplanner.me';
const fontBase = '"Pretendard", sans-serif';
const fontCode = 'monospace';
const colorPrimary = '#FF4500';
const colorSecondary = '#009688';

const baseTheme = {
  base: 'light',
  appBg: '#FEEFE6',
  appContentBg: '#FAF6EC',
  appBorderColor: '#4A453C',
  appBorderRadius: 4,

  // Text colors
  textColor: '#1A1712',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Form colors
  inputBg: '#E0F2F1',
  inputBorder: '#009688',
  inputTextColor: '#009688',
  inputBorderRadius: 4,

  barSelectedColor: '#FF4500',
  barTextColor: '#A8A297',
  barBg: '#F4EFE3',
  colorPrimary,
  colorSecondary,
  brandTitle,
  brandUrl,
  fontBase,
  fontCode,
};

const darkTheme = {
  ...themes.dark,
  ...baseTheme,
  appBg: '#252629',
  appContentBg: '#1a1b1d',
  barBg: '#252629',
  inputBg: '#3c3e46', //controll 색상
  brandImage: brandImageDark,
};

const lightTheme = {
  ...themes.normal,
  // UI
  appBg: '#FEEFE6',
  appContentBg: '#FAF6EC',
  appBorderColor: '#4A453C',
  appBorderRadius: 4,

  // Text colors
  textColor: '#1A1712',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Form colors
  inputBg: '#E0F2F1',
  inputBorder: '#009688',
  inputTextColor: '#009688',
  inputBorderRadius: 4,

  barSelectedColor: '#FF4500',
  barTextColor: '#A8A297',
  barBg: '#F4EFE3',

  brandImage: brandImageLight,
};

export const docsTheme = {
  darkMode: {
    light: lightTheme,
    dark: darkTheme,
  },
  maxWidth: '100%',
};

export default create(baseTheme);
