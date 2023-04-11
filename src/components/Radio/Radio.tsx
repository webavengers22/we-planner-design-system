import { RadioLabel, RadioInput } from './styles';
import { RadioProps } from './types';

const Radio: React.FC<RadioProps> = ({
  value = 'value',
  label = '',
  size = 'md',
  checked = false,
  onChange,
  type = 'primary',
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
  };

  return (
    <RadioLabel>
      <RadioInput
        type="radio"
        value={value}
        checked={checked}
        onChange={handleChange}
        size={size}
      />
      {label}
    </RadioLabel>
  );
};

export default Radio;
