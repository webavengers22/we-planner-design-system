import {
  ChildrenProps,
  CommonAttrProps,
  DisableProps,
  LoadingProps,
  SizeType,
  variantType,
} from '@/types';

// export type ButtonSizeType = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonSizeType = Extract<SizeType, 'sm' | 'md' | 'lg'>;

export interface ButtonProps
  extends ChildrenProps,
    DisableProps,
    LoadingProps,
    CommonAttrProps,
    React.HTMLAttributes<HTMLButtonElement> {
  variants: variantType;
  size: ButtonSizeType;
}
