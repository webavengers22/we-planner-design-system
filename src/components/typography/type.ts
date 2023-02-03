import { ElementType, ReactNode } from 'react';
import { TypographyStoryVariant, TypographyVariant } from '@styles/fonts';

/** Element h1~6 Type 정의 */
type HeadingElement = `h${1 | 2 | 3 | 4 | 5 | 6}`;
/** Element type 정의 */
type TypographyElement = 'label' | 'span' | 'p' | 'div' | 'strong' | 'a' | HeadingElement;

interface ITypographyProps {
  /** 정렬(text-align): center, left, right*/
  align?: 'center' | 'left' | 'right';
  /** Typography 적용 스타일
   *  display(1~3), headline(1,2), title, body(1,2) caption, button*/
  variant?: TypographyVariant;
  tagName?: TypographyElement;
  /** italic 허용  */
  italic?: boolean;
  /** bold 허용  */
  bold?: boolean;
  /** Typography 색상 : current, primary, secondary, warning, error, success */
  color?: 'current' | 'primary' | 'secondary' | 'warning' | 'error' | 'success';
  /** 텍스트 하위 Element*/
  children: ReactNode;
  /** HTML 태그 */
  as?: ElementType & TypographyElement;
}

export type { ITypographyProps, TypographyElement };
