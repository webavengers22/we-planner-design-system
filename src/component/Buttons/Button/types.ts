import { CommSize, ComponentColor, IComponentBaseProps } from '@/types';
import { ReactNode } from 'react';
type buttonVariantType = 'outline' | 'link' | 'round';
export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'color'
> &
  IComponentBaseProps & {
    href?: string;
    //  shape?: ComponentShape;
    size?: CommSize;
    color?: ComponentColor;
    variant?: buttonVariantType;
    fullWidth?: boolean;
    responsive?: boolean;
    animation?: boolean;
    loading?: boolean;
    active?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
  };
