import React, { cloneElement } from 'react';
import { Container } from './styles';
import { RadioGroupProps } from './types';

const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  onChange,
  selectedValue,
}) => {
  const handleChange = (value: string | number) => {
    onChange(value);
  };

  return (
    <Container>
      {children.map((child) =>
        cloneElement(child, {
          key: child.props.value,
          checked: child.props.value === selectedValue,
          onChange: handleChange,
        }),
      )}
    </Container>
  );
};

export default RadioGroup;
