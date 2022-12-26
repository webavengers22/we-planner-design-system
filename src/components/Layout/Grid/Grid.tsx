import type { GridProps } from './types';
import { Styled } from './styles';
import React from 'react';

export const Grid = React.forwardRef<HTMLDivElement, GridProps>((props, ref) => {
  const {
    columns,
    width,
    height,
    align,
    justify,
    flow,
    gap,
    columnGap,
    rowGap,
    children,
    className,
    ...otherProps
  } = props;

  return (
    <Styled
      ref={ref}
      className={className}
      width={width}
      height={height}
      align={align}
      justify={justify}
      flow={flow}
      gap={gap}
      columns={columns}
      columnGap={columnGap}
      rowGap={rowGap}
      {...otherProps}
    >
      {children}
    </Styled>
  );
});
