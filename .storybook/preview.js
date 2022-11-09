import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/global-styles';
import theme from '../src/styles/theme';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import darkTheme from '../src/styles/darkTheme';

const ThemeWrapper = (props) => {
  console.log(useDarkMode());
  return <ThemeProvider theme={useDarkMode() ? darkTheme : theme}>{props.children}</ThemeProvider>;
};

export const decorators = [
  (renderStory) => (
    <ThemeWrapper>
      <GlobalStyle />
      {renderStory()}
    </ThemeWrapper>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on.*', handles: ['mouseover', 'click .btn'] },
  backgrounds: {
    default: 'dark',
    values: [
      { name: 'dark', value: '#000' },
      { name: 'white', value: '#ffffff' },
    ],
  },
};
