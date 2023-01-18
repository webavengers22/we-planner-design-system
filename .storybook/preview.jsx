import React, { forwardRef, useEffect } from 'react';
import { themes } from '@storybook/theming';
import brandImageLight from './assets/logo_text_main.svg';
import brandImageDark from './assets/logo_text_white.svg';
import { WePlanWrapper } from '../src/components/wrapper';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { DocsContainer } from './DocsContainer';
import { useDarkMode } from 'storybook-dark-mode';
const baseTheme = {
  colorPrimary: '#FF4500',
  colorSecondary: '#009688',
  fontBase: '"Pretendard", sans-serif',
  fontCode: 'monospace',
  brandTitle: 'WePlanner Storybook',
  brandUrl: 'https://design.weplanner.me',
  brandTarget: '_self',
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: {
      ...themes.dark,
      ...baseTheme,
      appBg: '#252629',
      appContentBg: '#1a1b1d',
      barBg: '#252629',
      inputBg: '#3c3e46', //controll 색상
      brandImage: brandImageDark,
    },
    light: {
      ...themes.normal,
      ...baseTheme,
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
    },
    stylePreview: false,
  },
  docs: {
    container: DocsContainer,
  },
};

const Link = React.forwardRef((props, ref) => {
  return (
    <a href={props?.to} ref={ref} {...props}>
      {props.children}
    </a>
  );
});

export const decorators = [
  (Story) => {
    return (
      <>
        <WePlanWrapper initLink={Link}>
          <>
            <ThemeSwitcher />
            {Story()}
          </>
        </WePlanWrapper>
      </>
    );
  },
];
