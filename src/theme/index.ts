import { colorThemes, ColorPalette, builtfontVariable, fontPalette } from './variable';
import { cssVar } from 'util/index';

const theme = {
  ...ColorPalette,
  ...fontPalette,
};

export { theme, colorThemes, builtfontVariable, cssVar };
