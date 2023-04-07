import { CommSize } from '@/types';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'quinary';
export type ButtonVariant = 'default' | 'outline' | 'ghost';
export type ButtonShape = 'round' | 'circle' | 'square';

export interface ButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'type'
  > {
  /** 자식 요소 */
  children: React.ReactNode;
  /** 버튼 색상 타입 */
  type?: ButtonType;
  /** 버튼 형태 타입 */
  shape?: ButtonShape;
  /** html 타입 */
  htmlType?: 'button' | 'reset' | 'submit';
  /** 버튼 타입 */
  variant?: ButtonVariant;
  /** 버튼 사이즈 */
  size?: CommSize;
  /** 최대 넓이 적용 유무 */
  isFullWidth?: boolean;
  /** 아이콘 끝에 고정 */
  isIconLocatedEnd?: boolean;
  /** 아이콘 */
  icon?: React.ReactNode;
  /** 아이콘 위치 */
  iconPosition?: 'left' | 'right';
  /** 오른쪽 아이콘 추가 */
  rightIcon?: React.ReactNode;
  /** 사용 유무 */
  disabled?: boolean;
  /** 링크 사용 유무 */
  asLink?: boolean;
  /** 링크 */
  href?: string;
  /** 링크 타겟 */
  target?: React.HTMLAttributeAnchorTarget;
  isSquare?: boolean;
  marginTop?: string | number;
}

export interface ButtonColorScheme {
  background: string;
  hover: string;
  active: string;
  text: string;
}
