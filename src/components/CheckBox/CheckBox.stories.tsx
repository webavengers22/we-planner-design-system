import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './CheckBox';

export default {
  title: 'component/Checkbox',
  component: Checkbox,
  args: {
    size: 'md',
    children: 'Default',
    type: 'primary',
    checked: false,
  },
} as Meta<typeof Checkbox>;

type Template = StoryObj<typeof Checkbox>;
export const Template: Template = {};

export const Basic: Template = {};
Basic.args = {
  type: 'primary',
  size: 'md',
};
