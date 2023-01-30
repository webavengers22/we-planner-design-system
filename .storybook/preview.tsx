import React, { forwardRef, useEffect } from 'react';
import { darkTheme, lightTheme } from './theme';
import { WePlanProvider } from '../src/contexts';
import { GlobalStyles } from '../src/theme/GlobalStyle';
import StorybookThemeWrapper from '../src/theme/StorybookThemeWrapper';
import './global.css';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: darkTheme,
    light: lightTheme,
  },
};

export const decorators = [
  (Story) => {
    let theme: 'default' | 'light' | 'dark' = 'default';
    try {
      const data = JSON.parse(localStorage.getItem('sb-addon-themes-3'));
      document.body.dataset.theme = data.current;
      theme = data.current;
    } catch (error) {}

    return (
      <WePlanProvider initialTheme={theme}>
        <StorybookThemeWrapper>
          <GlobalStyles />
          <Story />
        </StorybookThemeWrapper>
      </WePlanProvider>
    );
  },
];
