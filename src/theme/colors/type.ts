import { KeysOfUnion } from '@src/utils';
import { allColors, status } from './constants';

type ThemeType = 'light' | 'dark';
type allColorsType = typeof allColors;
type allColorsKeys = keyof typeof allColors;

enum colorKeyEnum {
  Common = 'common',
  status = 'status',
  // color
  Gray = 'gray',
  Orange = 'orange',
  Teal = 'teal',
}

type grayRange = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type orangeRage = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700;
type tealRage = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700;

export type { ThemeType, allColorsType, allColorsKeys };
