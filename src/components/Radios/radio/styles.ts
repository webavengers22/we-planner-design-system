import styled, { css } from 'styled-components';
import { RADIO_COLORS } from './consts';
import type { RadioProps } from './types';

export const Styled = styled.div<RadioProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 54px;
  border-radius: 50px;
  transition: 0.2s cubic-bezier(0.2, 0, 0, 1);
  pointer-events: ${({ loading }) => (loading ? 'none' : 'auto')};
  cursor: pointer;

  ${({ variants }) => css`
    ${RADIO_COLORS[variants]};
  `};
`;
