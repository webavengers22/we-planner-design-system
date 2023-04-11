import { CommSize } from '@/types';
import { InputHTMLAttributes } from 'react';
export type RadioType = 'primary' | 'secondary' | 'tertiary' | 'quinary';
export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** 색상 타입 */
  type?: RadioType;
  /** 사이즈 */
  size: CommSize;
  className?: string;
  /** onchange  */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** checked 상태 */
  checked: boolean;
  value: string | number;
  label?: string;
}
