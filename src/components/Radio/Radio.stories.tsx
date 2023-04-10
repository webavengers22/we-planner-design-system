import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import { Radio } from './Radio';
import { RadioProps } from './types';

export default {
  title: 'component/Radio',
  component: Radio,
  args: {
    size: 'md',
    children: 'Default',
    type: 'primary',
    checked: false,
  },
} satisfies Meta<RadioProps>;
type Template = StoryObj<typeof Radio>;
export const Basic: Template = {};
Basic.args = {
  type: 'primary',
  size: 'md',
};
export const Default: StoryFn<RadioProps> = (args) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  return (
    <Radio
      {...args}
      checked={checked}
      onToggle={() => {
        setChecked(!checked);
        args.onToggle();
      }}
    />
  );
};
