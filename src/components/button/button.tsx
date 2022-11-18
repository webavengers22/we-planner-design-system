import type { ButtonProps } from './types';
import { Styled } from './styles';
// import { Spinner } from 'components/Common/Spinner';

export function Button({
  className,
  disabled = false,
  variants = 'primary',
  size = 'md',
  loading = false,
  block = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <Styled
      className={className}
      size={size}
      variants={variants}
      disabled={disabled}
      block={block}
      {...props}
    >
      {children}
    </Styled>
  );
}
