import { CommSize } from '@/types';
import styled from '@emotion/styled';
import { sizeSets } from './constants';

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 12px;
`;

export interface StyledProps {
  size: CommSize;
}

const RadioInput = styled.input<StyledProps>`
  appearance: none;
  display: inline-block;
  width: ${(props) => sizeSets[props.size].inner};
  height: 16px;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin-right: 8px;
  position: relative;
  top: 2px;
  &:before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: #000;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.2s ease-in-out;
  }

  &:checked:before {
    transform: translate(-50%, -50%) scale(1);
  }
`;

export { RadioLabel, RadioInput };
