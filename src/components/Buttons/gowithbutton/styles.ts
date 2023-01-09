import styled, { css } from 'styled-components';
import { BUTTON_COLORS } from './consts';
import type { ButtonProps } from './types';

export const Styled = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 108px;
  height: 108px;
  border-radius: 10px;
  font-size: 16px;

  transition: 0.2s cubic-bezier(0.2, 0, 0, 1);
  cursor: pointer;

  ${({ variants }) => css`
    ${BUTTON_COLORS[variants]};
  `};
`;
