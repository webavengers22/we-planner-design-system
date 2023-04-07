import { box, invisibleCheckbox, textStyle, wrapper } from './styles';
import { CheckboxProps } from './types';

export function Checkbox({
  className,
  checked,
  onToggle,
  size = 'sm',
  type = 'primary',
  disabled,
}: CheckboxProps) {
  return (
    <label css={wrapper(type, size, disabled)} className={className}>
      <input
        type="checkbox"
        css={invisibleCheckbox}
        checked={checked}
        onChange={onToggle}
        disabled={disabled}
      />
      <span css={box(checked, type)} className="box">
        {checked && <Icon name="check" />}
      </span>

      <span css={textStyle}>Check me</span>
    </label>
  );
}
