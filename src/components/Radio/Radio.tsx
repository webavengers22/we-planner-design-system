import { useState } from 'react';
import Icon from '../Icon/Icon';
import { schemes } from './constants';
import { box, invisibleRadio, textStyle, wrapper } from './styles';
import { RadioProps } from './types';

export function Radio({
  children,
  size = 'sm',
  checked,
  onChange,
  type = 'primary',
  ...rest
}: RadioProps) {
  const scheme = schemes[type];
  const [focused, setFocused] = useState(false);
  const isChecked = checked || value === rest.value;
  return (
    <label css={wrapper(size, color)}>
      <input
        type="radio"
        {...rest}
        onChange={(e) => {
          onChange?.(e);
          onChangeValue?.(e.target.value);
        }}
        checked={isChecked}
        onFocus={(e) => {
          setFocused(true);
        }}
        onBlur={(e) => {
          setFocused(false);
        }}
      />
      <span css={circle(!!isChecked, focused, themeColor)}>
        <span css={smallDot(isChecked)}></span>
      </span>
      <span>{children}</span>
    </label>
  );
}
