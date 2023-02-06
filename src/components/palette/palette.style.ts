import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { themes } from '@/theme';

const { color } = themes;

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

const PaletteDiv = styled.div<{ bgColor: string }>`
  display: flex;
  justify-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const ColorDiv = styled.div`
  display: flex;
  gap: 1rem 0;
  flex-direction: column;
  border-bottom: 1px solid;
  padding-bottom: 1.5rem;

  h3 {
    color: ${color.text_default};
  }
  &:last-child {
    border-bottom: 0;
  }
`;

const ColorRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 0;
  padding: 1rem 0;
  .gray &,
  .background & {
    background: var(--common-black);
  }
`;

const ColorItem = styled.div<{ delay: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10rem;
  gap: 0.5rem;
  opacity: 0;
  animation: ${fadeIn} 1s cubic-bezier(0.08, 0.37, 0, 1.02) forwards;
  animation-delay: ${(props) => props.delay}ms;
`;

const ColorLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-size: 0.8rem;
    color: ${color.text_default};
  }

  .gray & span,
  .background & span {
    color: ${color.common_white};
  }
  span.title {
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

const Color = styled.div<{ color: string }>`
  width: 4.5rem;
  height: 4rem;
  background-color: ${(props) => {
    return props.color;
  }};
  border-radius: 0.4rem;
`;

export { PaletteDiv, ColorDiv, ColorRow, ColorItem, ColorLabel, Color };
