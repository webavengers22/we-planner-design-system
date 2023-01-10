import React, { FC, useEffect } from 'react';
import { themes } from '@storybook/theming';
import { DocsContainer } from './DocsContainer';
import { WePlanWrapper } from '../src/components/wrapper';
import { useDarkMode } from 'storybook-dark-mode';
import { useColorTheme } from '../src/context/colorThemeContext';
import { ChildrenProps } from '../src/types/ComponentProps';
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
    },
    stylePreview: false,
  },
  docs: {
    container: DocsContainer,
  },
};

const StyledWrapper: FC<ChildrenProps> = ({ children }) => {
  const isDarkMode = useDarkMode();
  const { setColorTheme } = useColorTheme();

  useEffect(() => {
    setColorTheme(isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return <>{children}</>;
};

export const decorators = [
  (Story) => (
    <WePlanWrapper>
      <StyledWrapper />
      <Story />
    </WePlanWrapper>
  ),
];
