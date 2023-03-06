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
  (Story, options) => (
    <>
      <StoryLayout
        title={options.title}
        description={options.story}
        source={options.parameters.storySource.source
          /* TODO: clean up all this string formatting/regex */
          /* Removes the args arrow function */
          .replace(/\(.*args.*\)\s*=>\s*\{\s*\n/, '')
          /* Removes the last occurence of a closing bracket (from the lambda) */
          .replace(/}([^}]*)$/, '$1')}
      >
        <Story />
      </StoryLayout>
    </>
  ),
];
