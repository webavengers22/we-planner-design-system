import { keyframes, css } from '@emotion/react';
import styled from '@emotion/styled';
import { BUTTON_COLORS } from './const';
import type { ButtonProps } from './types';

export const Styled = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 54px;
  border-radius: 4px;
  transition: 0.2s cubic-bezier(0.2, 0, 0, 1);
  pointer-events: ${({ loading }) => (loading ? 'none' : 'auto')};
  cursor: pointer;

  ${({ variants }) => css`
    ${BUTTON_COLORS[variants]};
  `};
`;
