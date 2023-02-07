import { mergeConfig } from 'vite';
import { StorybookConfig } from '@storybook/builder-vite';
const react = require('@vitejs/plugin-react');

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/theming',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    '@storybook/addon-storysource',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },
  features: {
    storyStoreV7: true,
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
