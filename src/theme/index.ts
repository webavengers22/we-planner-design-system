import { generateThemeCssColor as themes, themedPalette } from '@/styles/colors/index';

const theme = (() => {
  if (typeof window === 'undefined') return 'light';
  const bodyTheme = document.querySelector('body')?.getAttribute('data-theme');
  if (!bodyTheme) {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
  return bodyTheme;
})();

const cv = {
  ...themedPalette,
  theme,
};

export { cv, themes };
