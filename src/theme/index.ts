import { baseColor } from './../styles/colors/colors';
import { BaseColorListArray } from '@/styles/colors/constant';

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

console.log(theme);

console.log(baseColor);
console.log(BaseColorListArray);
const cv = {
  theme,
};
export { cv };
