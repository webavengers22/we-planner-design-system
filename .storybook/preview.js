import React from 'react';
import { themes } from '@storybook/theming';
import { DocsContainer } from './DocsContainer';
import brandImageLight from './assets/logo_text_main.svg';
import brandImageDark from './assets/logo_text_white.svg';
import { ThemeSwitcher } from './components/ThemeSwitcher';

import { WePlanWrapper } from '../src/components/Wrapper';
const baseTheme = {
  brandTitle: 'WePlan Storybook',
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
      inputBg: '#3c3e46',
      brandImage: brandImageDark,
    },
    light: {
      ...themes.normal,
      ...baseTheme,
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
            <Story />
          </>
        </WePlanWrapper>
      </>
    );
  },
];
