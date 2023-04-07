import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'quinary';
export type ButtonVariant = 'default' | 'outline' | 'ghost';
export type Size = 'sm' | 'md' | 'lg';

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
  type?: ButtonType;
  htmlType?: 'button' | 'reset' | 'submit';
  variant?: ButtonVariant;
  /** 버튼 사이즈 */
  size?: Size;
  /** 최대 넓이 적용 유무 */
  isFullWidth?: boolean;
  /** 아이콘 고정 */
  isStickIconToEnd?: boolean;
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
  isSquare?: boolean;
  target?: React.HTMLAttributeAnchorTarget;
  marginTop?: string | number;
}

export interface ButtonColorScheme {
  background: string;
  hover: string;
  active: string;
  text: string;
}
