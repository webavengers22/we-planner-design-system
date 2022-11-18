import styled, { css } from 'styled-components';
import { BUTTON_COLORS, BUTTON_SIZES } from './consts';
import type { ButtonProps } from './types';

export const ButtonRoot = styled.button<ButtonProps>`
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
    height: ${BUTTON_SIZES[size].height};
    min-width: ${BUTTON_SIZES[size].minWidth};
  `};

  ${({ variants }) => css`
    ${BUTTON_COLORS[variants]};
  `};

  &:disabled {
    cursor: not-allowed;
  }
`;
