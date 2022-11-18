import { TypographyProps } from '.';
import { TYPOGRAPHY_COMPONENT } from 'foundation/constants';
import { getTypographyComponent } from './typography.styles';

export function Typography({
  variant = 'body1',
  tagName,
  color,
  bold = false,
  children,
}: TypographyProps) {
  const Component = getTypographyComponent(tagName || TYPOGRAPHY_COMPONENT[variant]);
  return (
    <Component variant={variant} color={color} bold={bold}>
      {children}
    </Component>
  );
}
