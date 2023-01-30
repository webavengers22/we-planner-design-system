import { themes } from '@storybook/theming';
import React from 'react';
import { WePlanProvider } from '../src/contexts/WePlanProvider';
import StorybookThemeWrapper from '../src/theme/docs/StorybookThemeWrapper';
import { GlobalStyles } from '../src/components/GlobalStyles';
import './global.css';
import { DARK_MODE_EVENT_NAME, UPDATE_DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { useDarkMode } from 'storybook-dark-mode';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    const darkMode = useDarkMode();
    console.log(darkMode);
    return (
      <WePlanProvider initialTheme={darkMode}>
        <StorybookThemeWrapper>
          <GlobalStyles />
          <Story />
        </StorybookThemeWrapper>
      </WePlanProvider>
    );
  },
];
