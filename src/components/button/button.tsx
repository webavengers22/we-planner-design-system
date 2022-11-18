import React from 'react';

import type { ButtonProps } from './types';
import { ButtonRoot } from './styles';
import { Typography } from 'components/typography';
// import { Spinner } from 'components/Common/Spinner';

export function Button({
  className,
  disabled = false,
  variants = 'primary',
  size,
  loading = false,
  block = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonRoot
      className={className}
      size={size}
      variants={variants}
      disabled={disabled}
      block={block}
      {...props}
    >
      <Typography variant="button">{children}</Typography>
    </ButtonRoot>
  );
}
