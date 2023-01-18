import path from 'path';
import remarkGfm from 'remark-gfm';

import { loadConfigFromFile, mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { StorybookConfig } from '@storybook/builder-vite';
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/theming',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxCompileOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    config.plugins = config.plugins?.filter(
      (plugin) =>
        //@ts-expect-error -- https://github.com/storybookjs/builder-vite/issues/210
        !(Array.isArray(plugin) && plugin[0]?.name.includes('vite:react')),
    );

    return mergeConfig(config, {
      plugins: [
        react({
          jsxImportSource: '@emotion/react',
        }),
      ],
    });
  },
};
export default config;
