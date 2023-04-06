import { create } from '@storybook/theming';
//import brandImageLight from '@assets/logo_svg/logo_text_black.svg';
import brandImageLightLogo from './public/logo_text_main.svg';
import brandImageDarkLogo from './public/logo_text_white.svg';
export default create({
  // Typography
  colorPrimary: '#FF4500',
  colorSecondary: '#009688',
  fontBase: '"Pretendard Variable", sans-serif',
  fontCode: 'monospace',
  brandTitle: 'WePlanner Storybook',
  brandUrl: 'https://design.weplanner.me',
  brandImage: brandImageLightLogo,
  brandTarget: '_self',
});
