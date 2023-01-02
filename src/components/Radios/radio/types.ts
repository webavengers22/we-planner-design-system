import {
    // ChildrenProps,
    DisableProps,
    LoadingProps,
    CommonAttrProps,
    variantType,
  } from 'types/ComponentProps';
  
  // export type ButtonSizeType = 'xs' | 'sm' | 'md' | 'lg';
  export type RadioSizeType = 'sm' | 'md' | 'lg';
  
  export interface RadioProps
    extends 
        // ChildrenProps,
      DisableProps,
      LoadingProps,
      CommonAttrProps,
      React.HTMLAttributes<HTMLButtonElement> {
    variants: variantType;
    size: RadioSizeType;
  }
  