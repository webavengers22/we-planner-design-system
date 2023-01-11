import { colorThemes } from '@/styles/colors';
import { darkPalette, lightPalette, standardPalette } from './colorPalettes';

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

console.log(colorThemes);
const cv = {
  theme,
};
export { cv };
