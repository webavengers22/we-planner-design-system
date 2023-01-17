import {
  ChildrenProps,
  DisableProps,
  LoadingProps,
  CommonAttrProps,
  variantType,
  LabelProps,
} from '@/types/componentType';

export type RadioSizeType = 'sm' | 'md' | 'lg';

export interface RadioProps
  extends ChildrenProps,
    DisableProps,
    LoadingProps,
    CommonAttrProps,
    LabelProps,
    React.HTMLAttributes<HTMLButtonElement> {
  variants: variantType;
  size: RadioSizeType;
}
