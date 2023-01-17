import {
  ChildrenProps,
  DisableProps,
  LoadingProps,
  CommonAttrProps,
  variantType,
} from '@/types/componentType';

// export type ButtonSizeType = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonSizeType = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends ChildrenProps,
    DisableProps,
    LoadingProps,
    CommonAttrProps,
    React.HTMLAttributes<HTMLButtonElement> {
  variants: variantType;
  size: ButtonSizeType;
}
