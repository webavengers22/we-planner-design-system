import { forwardRef } from 'react';
import { VariantMapping, ITypographyProps } from '.';
import { StyledText } from './typography.styles';
export function Typography({
  variant = 'body1',
  color = 'current',
  bold = false,
  italic = false,
  children,
  tagName,
  as,
}: ITypographyProps) {
  const Component = StyledText(tagName || VariantMapping[variant]);
  return (
    <Component variant={variant} color={color} bold={bold} italic={italic}>
      {children}
    </Component>
  );
}
