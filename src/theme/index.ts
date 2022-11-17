import { colorThemes, ColorPalette, builtfontVariable, fontPalette } from './variable';
import { cssVar } from 'foundation/utils/index';
import { typography } from './styles';

const theme = {
  ...ColorPalette,
  ...fontPalette,
};
console.log('theme');
console.log(theme);
console.log(typography);

const style = {
  typography,
};

export { theme, style, colorThemes, builtfontVariable, cssVar };
