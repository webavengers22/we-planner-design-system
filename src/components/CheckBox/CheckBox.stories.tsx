import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import { Checkbox } from './CheckBox';
import { CheckboxProps } from './types';

export default {
  title: 'component/Checkbox',
  component: Checkbox,
  args: {
    size: 'md',
    children: 'Default',
    type: 'primary',
    checked: false,
  },
} satisfies Meta<CheckboxProps>;
type Template = StoryObj<typeof Checkbox>;
export const Basic: Template = {};
Basic.args = {
  type: 'primary',
  size: 'md',
};
export const Default: StoryFn<CheckboxProps> = (args) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  return (
    <Checkbox
      {...args}
      checked={checked}
      onToggle={() => {
        setChecked(!checked);
        args.onToggle();
      }}
    />
  );
};
