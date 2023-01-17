import { keyframes, css } from '@emotion/react';
import styled from '@emotion/styled';

import { LoadingDotsProps, LOADING_COLORS } from '.';

const dotFlashing = keyframes`
    0% {
      opacity: 0.15;
      transform: scale(0.9);
    }

    50%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
`;
export const Layout = styled.div<LoadingDotsProps>`
  position: relative;
  height: 8px;

  > span,
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;

    width: 8px;
    height: 8px;
    border-radius: 50%;

    ${({ variants }) => css`
      ${LOADING_COLORS[variants]};
    `};
    animation: ${dotFlashing} 0.9s infinite linear alternate;
    opacity: 0;
    transform: scale(0.8);
  }

  &::before {
    left: -14px;
    animation-delay: 0s;
  }

  > span {
    left: 0;
    animation-delay: 0.3s;
  }

  &::after {
    left: 14px;
    animation-delay: 0.6s;
  }
`;
