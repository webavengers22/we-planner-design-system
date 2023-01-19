import React, { forwardRef, useEffect } from 'react';
import { DocsContainer } from './DocsContainer';
import { darkTheme, lightTheme } from './theme';
import { WePlanWrapper } from '../src/components/wrapper';

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
    console.log('decorators');
    return (
      <>
        <Story />
      </>
    );
  },
];
