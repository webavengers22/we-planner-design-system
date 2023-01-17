import type { ButtonProps } from './types';
import { Styled } from './styles';
// import { Spinner } from 'components/Common/Spinner';
import { LoadingDots } from '@components/buttons/loadingDots';

export function Button({
  className,
  disabled = false,
  variants = 'primary',
  size = 'md',
  loading = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <Styled className={className} size={size} variants={variants} disabled={disabled} {...props}>
      {loading ? <LoadingDots variants="primary" /> : <span>{children}</span>}
    </Styled>
  );
}
