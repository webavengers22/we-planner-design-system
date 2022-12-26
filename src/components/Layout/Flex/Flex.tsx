import type { FlexProps } from './types';
import { Styled } from './styles';
import React from 'react';

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const { width, height, align, justify, gap, direction, wrap, children, className, ...rest } =
    props;

  return (
    <Styled
      ref={ref}
      className={className}
      width={width}
      height={height}
      direction={direction}
      align={align}
      justify={justify}
      gap={gap}
      wrap={wrap}
      {...rest}
    >
      {children}
    </Styled>
  );
});
