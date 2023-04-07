import { CommSize } from '@/types';
import { css } from '@emotion/react';
import { sizeSets } from './constants';
import { CheckBoxType } from './types';

const wrapper = (type: CheckBoxType, size: CommSize, disabled?: boolean) => css`
  position: relative;
  display: inline-flex;
  align-items: center;

  font-size: ${sizeSets[size]};
  ${disabled
    ? css`
        span:first-of-type {
          border-color: ${'accent-4'};
          background: ${'accent-3'};
        }
        span:nth-of-type(2) {
          color: ${'accent-6'};
        }
        cursor: not-allowed;
        svg {
          color: ${'accent-6'};
        }
      `
    : css`
        cursor: pointer;
        &:hover {
          span:first-of-type {
            border-color: ${color};
          }
        }
      `}
`;
const invisibleCheckbox = css`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  left: 0;
  top: 0;
`;

const box = (checked: boolean, color: string) => css`
  align-items: center;
  justify-content: center;
  display: block;
  width: 1.125em;
  height: 1.125em;
  border-radius: 0.25rem;
  border: 1px solid ${'accent-6'};
  margin-right: 0.5em;
  position: relative;
  svg {
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    display: block;
    width: 0.625em;
    height: 0.625em;
  }

  ${checked &&
  css`
    border-color: ${color};
    background: ${color};
    color: ${'element-text'};
  `}
`;

const textStyle = () => css`
  font-size: 1em;
  line-height: 1;
  color: ${'accent-9'};
`;

export { wrapper, invisibleCheckbox, box, textStyle };
