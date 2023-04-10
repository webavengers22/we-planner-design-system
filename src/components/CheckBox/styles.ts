import { CommSize } from '@/types';
import { css } from '@emotion/react';
import { sizeSets, CheckBoxColorScheme } from './constants';
import { themes } from '@/theme';
const { color } = themes;
const wrapper = (
  schemes: CheckBoxColorScheme,
  size: CommSize,
  disabled?: boolean,
) => css`
  position: relative;
  display: inline-flex;
  align-items: center;
  font-size: ${sizeSets[size]};
  cursor: pointer;
  &:hover {
    span:first-of-type {
      border-color: ${schemes.background};
    }
  }
`;
const invisibleCheckbox = css`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  left: 0;
  top: 0;
`;

const box = (checked: boolean, schemes: CheckBoxColorScheme) => css`
  align-items: center;
  justify-content: center;
  display: block;
  width: 1.125em;
  height: 1.125em;
  border-radius: 0.25rem;
  border: 1px solid ${schemes.background};
  margin-right: 0.5em;
  position: relative;
  svg {
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    display: block;
    width: 1em;
    height: 1em;
    fill: ${color['common-white']};
  }

  ${checked &&
  css`
    border-color: ${schemes.background};
    background: ${schemes.background};
    color: ${'element-text'};
  `}
`;

const textStyle = () => css`
  font-size: 1em;
  line-height: 1;
`;

export { wrapper, invisibleCheckbox, box, textStyle };
