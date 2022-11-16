import { create } from '@storybook/theming';
import brandImageLight from './assets/logo_text_main.svg';
export default create({
  // Typography
  colorPrimary: '#FF4500',
  colorSecondary: '#009688',
  fontBase: '"Pretendard", sans-serif',
  fontCode: 'monospace',
  brandTitle: 'WePlanner Storybook',
  brandUrl: 'https://design.weplanner.me',
  brandImage: brandImageLight,
  brandTarget: '_self',
});
