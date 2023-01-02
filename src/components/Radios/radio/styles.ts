import styled, { css } from 'styled-components';
import { RADIO_COLORS } from './consts';
import { Radio } from './radio';
import type { RadioProps } from './types';

// 가존 버튼 스타일
export const Styled = styled.div<RadioProps>`
  /* display: flex;
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
  `}; */

  color: pink;
`;

type Color = {
    name: string;
    hex: string;
  };

const Colors: Color[] = [
{ name: 'RED', hex: '#ffb598' },
{ name: 'ORANGE', hex: '#ffdcaa' },
{ name: 'PURPLE', hex: '#d7beff' },
{ name: 'CYAN', hex: '#c7f5ed' },
{ name: 'BLUE', hex: '#c2dbff' },
];


export const RadioStyled = styled.input.attrs({type:'radio'})<RadioProps>`
    display: inline-block;
    padding: 10px;
    accent-color: #FF4500; //컬러명으로 지정해야함
`

export const ColorSelectorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin-top: 8px;
  padding: 10px;
  border: 5px solid ${(props) => props.color};

`;

export const Label = styled.label`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${(props) => props.color};
`;

export const RadioButton = styled.input`
  display: none;
  
`;

