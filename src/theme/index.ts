import { colorThemes, ColorPalette, builtfontVariable, fontPalette } from './variable';
import { cssVar } from 'foundation/utils/index';
import { typography, viewport } from './styles';

const theme = {
  ...ColorPalette,
  ...fontPalette,
};

const style = {
  typography,
  viewport,
};

export { theme, style, colorThemes, builtfontVariable, cssVar };
