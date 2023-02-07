import { SizeType } from '@/types';
import { style } from './token/style';
import { Style } from './type';

/**
 * 스타일 별 css 반환
 */
const generateStyle = Object.fromEntries(
  Object.entries(style).map(([key, getObject]) => {
    const themeStyle = Object.keys(getObject).reduce<Record<string, Style>>((obj, secondKey) => {
      obj[`${key}_${secondKey}`] = getObject[secondKey];
      return obj;
    }, {});
    return [key, themeStyle];
  }),
);

export { generateStyle };
