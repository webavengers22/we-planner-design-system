import type { ButtonProps } from './types';
import { Styled } from './styles';
// import { Spinner } from 'components/Common/Spinner';
import { LoadingDots } from '@/component/Buttons/loadingDots';
import { forwardRef } from 'react';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled = false,
      color = 'primary',
      variant = 'round',
      size = 'md',
      loading = false,
      ...props
    },
    ref,
  ): JSX.Element => {
    return (
      <Styled
        ref={ref}
        className={className}
        size={size}
        variant={variant}
        disabled={disabled}
        color={color}
        {...props}
      >
        {loading ? <LoadingDots color={'primary'} /> : <>{children}</>}
      </Styled>
    );
  },
);

Button.displayName = 'Button';

export default Button;
