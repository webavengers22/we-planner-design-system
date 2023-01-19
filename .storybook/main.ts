import { loadConfigFromFile, mergeConfig } from 'vite';

import { StorybookConfig, ViteFinal } from '@storybook/builder-vite';
import react from '@vitejs/plugin-react';

const viteFinal: ViteFinal = async (config, { configType }) => {
  // modify and return config
  config.plugins = config.plugins?.filter(
    (plugin) => !(Array.isArray(plugin) && plugin[0]?.name.includes('vite:react')),
  );

  return mergeConfig(config, {
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
      }),
    ],
  });
};

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
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
  viteFinal,
};
export default config;
