import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const fadeIn = keyframes`
    0% {
        transform: translate(0, 12px);
        opacity: 0;
    }
    100% {
        transform: translate(0px, 0px);
        opacity: 1;
    }
`;

const ColorsDiv = styled.div<{ bgColor: string }>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  margin: 0 auto;
`;

const ColorDiv = styled.div<{ delay: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0;
  animation: ${fadeIn} 1s cubic-bezier(0.08, 0.37, 0, 1.02) forwards;
  animation-delay: ${(props) => props.delay}ms;
`;

const ColorLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  div:first-of-type {
    color: var(--text-default);
    font-size: 14px;
    font-weight: 600;
  }

  div:last-child {
    color: var(--text-default);
    font-size: 14px;
  }
`;

const ColorShow = styled.div<{ color: string }>`
  width: 60%;
  height: 52px;
  background-color: ${(props) => {
    return props.color;
  }};
  border-radius: 8px;
`;

export { ColorsDiv, ColorDiv, ColorLabel, ColorShow };
