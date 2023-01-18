import React, { forwardRef, useEffect } from 'react';
import { DocsContainer } from './DocsContainer';
import { useDarkMode } from 'storybook-dark-mode';
import { darkTheme, lightTheme } from './theme';
import { WePlanWrapper } from '../src/components/wrapper';
import { useColorTheme } from '../src/hooks/useColorTheme';
import { DecoratorFn } from '@storybook/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    container: DocsContainer,
  },
  darkMode: {
    dark: darkTheme,
    light: lightTheme,
  },
};

const withTheme: DecoratorFn = (StoryFn) => {
  const isDarkMode = useDarkMode();
  const { setColorTheme } = useColorTheme();

  useEffect(() => {
    setColorTheme(isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <WePlanWrapper>
      <StoryFn />
    </WePlanWrapper>
  );
};
export const decorators = [withTheme];
