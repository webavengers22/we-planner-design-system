import styled from 'styled-components';
import type { GridProps } from './types';

export const Styled = styled.div<Partial<GridProps>>`
  box-sizing: border-box;
  display: grid;
  width: ${({ width = '100%' }) => width};
  height: ${({ height = '100%' }) => height};
  align-items: ${({ align = 'center' }) => align};
  justify-content: ${({ justify = 'center' }) => justify};
  grid-auto-flow: ${({ flow = 'center' }) => flow};
  grid-template-columns: ${({ columns = 1 }) => `repeat(${columns}, 1fr)`};
  gap: ${({ gap = '0px' }) => gap};
  column-gap: ${({ columnGap = '0px' }) => columnGap};
  row-gap: ${({ rowGap = '0px' }) => rowGap};
`;
