import { generateThemeCssColor as themes, generatePalletteColor } from '@/styles/colors/index';

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

const cssVar = (name: string) => `var(--${name.replace(/_/g, '-')})`;

type cvTheme = keyof typeof generatePalletteColor.dark;
type cvStandard = keyof typeof generatePalletteColor.standard;

type cvType = cvTheme | cvStandard;
const cv: Record<string, cvType> = {
  ...generatePalletteColor.dark,
  ...generatePalletteColor.standard,
  theme,
};

export { cv, themes, cssVar };
