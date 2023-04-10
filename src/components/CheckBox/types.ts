import { CommSize } from '@/types';
import { InputHTMLAttributes } from 'react';
export type CheckBoxType = 'primary' | 'secondary' | 'tertiary' | 'quinary';
export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** 색상 타입 */
  type?: CheckBoxType;
  /** 사이즈 */
  size?: CommSize;
  className?: string;
  /**disabled 처리 */
  disabled?: boolean;
  /** toggle  */
  onToggle(): void;
  /** checked 상태 */
  checked: boolean;
  /** 자식 요소 */
  children?: React.ReactNode;
}
