import { ReactElement } from 'react';
export type RadioGroupType = 'primary' | 'secondary' | 'tertiary' | 'quinary';
export interface RadioGroupProps {
  children: ReactElement[];
  onChange: (value: string | number) => void;
  selectedValue?: string | number;
}
