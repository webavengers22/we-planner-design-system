import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import RadioGroup from './RadioGroup';
import { RadioGroupProps } from './types';

export default {
  title: 'component/RadioGroup',
  component: RadioGroup,
} satisfies Meta<RadioGroupProps>;
type Template = StoryObj<typeof RadioGroup>;
export const Basic: Template = {};
Basic.args = {};
export const Default: StoryFn<RadioGroupProps> = (args) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  return <RadioGroup />;
};
