import { color } from './common';
import { dark } from './dark';
import { light } from './light';
import { Pallette } from './type';

const colorPalette: Pallette = {
  common: { ...color },
  light: { ...light },
  dark: { ...dark },
};

export { colorPalette };
