import {
    ChildrenProps,
    DisableProps,
    LoadingProps,
    CommonAttrProps,
    variantType,
    LabelProps,
  } from 'types/ComponentProps';
  
  // export type ButtonSizeType = 'xs' | 'sm' | 'md' | 'lg';
  export type RadioSizeType = 'sm' | 'md' | 'lg';
  
  export interface RadioProps
    extends 
        ChildrenProps,
      DisableProps,
      LoadingProps,
      CommonAttrProps,
      LabelProps,
      React.HTMLAttributes<HTMLButtonElement> {
    variants: variantType;
    size: RadioSizeType;
  }
  