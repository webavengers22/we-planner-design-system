import { CommSize } from '@/types';
import { InputHTMLAttributes } from 'react';
export type CheckBoxType = 'primary' | 'secondary' | 'tertiary' | 'quinary';
export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** 버튼 색상 타입 */
  type?: CheckBoxType;
  size?: CommSize;
  className?: string;
  checked: boolean;
  disabled?: boolean;
  onToggle(): void;
}
