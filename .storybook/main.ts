import react from '@vitejs/plugin-react';
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/theming',
    '@storybook/addon-interactions',
    'storybook-dark-mode-v7',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  staticDir: './public',
  async viteFinal(config) {
    config.plugins = config.plugins.filter(
      (plugin) =>
        !(Array.isArray(plugin) && plugin[0]?.name.includes('vite:react')),
    );
    config.plugins.push(
      react({
        exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
    );
    return config;
  },
  docs: {
    autodocs: true,
  },
};
export default config;
