module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/theming',
    'storybook-dark-mode',
    'storybook-addon-performance/register',
  ],
  framework: '@storybook/react',
  staticDir: './public',
};
