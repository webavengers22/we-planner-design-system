import { SizeType } from '@/types';
import { Style, TransitionType } from './type';
/** Style interface */
interface IStyleProperties {
  breakpoints: {
    [key in SizeType]: Style;
  };
  radius: {
    [key in SizeType]: Style;
  };
  spacing: {
    [key in SizeType]: Style;
  };
  transition: {
    [key in TransitionType]: Style;
  };
}

export type { IStyleProperties };
