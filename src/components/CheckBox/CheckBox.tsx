import Icon from '../Icon/Icon';
import { schemes } from './constants';
import { box, invisibleCheckbox, textStyle, wrapper } from './styles';
import { CheckboxProps } from './types';

export function Checkbox({
  className,
  checked,
  onToggle,
  size = 'md',
  type = 'primary',
  disabled,
  children = 'Check me',
}: CheckboxProps) {
  const scheme = schemes[type];

  return (
    <label css={wrapper(scheme, size, disabled)} className={className}>
      <input
        type="checkbox"
        css={invisibleCheckbox}
        checked={checked}
        onChange={onToggle}
        disabled={disabled}
      />
      <span css={box(checked, scheme)} className="box">
        {checked && <Icon name="Check" />}
      </span>

      <span css={textStyle}>{children}</span>
    </label>
  );
}
