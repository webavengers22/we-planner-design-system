import styled, { css } from 'styled-components';
import { BUTTON_COLORS, BUTTON_SIZES } from './consts';
import type { ButtonProps } from './types';

export const Styled = styled.button<ButtonProps>`
  all: unset;
  appearance: none;
  box-sizing: border-box;
  user-select: none;
  padding: 0 16px;

  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;

  ${({ block }) =>
    block &&
    css`
      flex-shrink: 1;
      width: 100%;
    `};

  ${({ size }) => css`
    ${BUTTON_SIZES[size]}
  `};

  ${({ variants }) => css`
    ${BUTTON_COLORS[variants]};
  `};

  &:disabled {
    cursor: not-allowed;
  }
`;
