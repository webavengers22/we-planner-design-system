import { SizeType } from '@/types';
import { style } from './token/style';
import { Style } from './type';

/**
 * 스타일 요소  => style Css key로 data 커스터 마이징 fun
 * breakpoints-lg: 1200
 */
const generateStyle = Object.fromEntries(
  Object.entries(style).flatMap(([key, getObject]) => {
    return Object.entries(getObject).map(([secondKey, value]) => {
      return [`${key}-${secondKey}`, value];
    });
  }),
);

export { generateStyle };
