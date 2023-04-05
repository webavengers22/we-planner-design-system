import React from 'react';
import StoryLayout from './story-layout';
import '../src/index.css';
import { docsTheme } from './theme.cjs';
import { themeCss } from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  docs: {
    theme: docsTheme,
    options: {
      layout: 'fullscreen',
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <StoryLayout>
        <Story />
      </StoryLayout>
    </>
  ),
];
