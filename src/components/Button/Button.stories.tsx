import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'component/Button',
  component: Button,
  args: {
    disabled: false,
    size: 'md',
    children: 'Default',
    type: 'primary',
    shape: 'circle',
    variant: 'default',
  },
} as Meta<typeof Button>;

type Template = StoryObj<typeof Button>;
export const Template: Template = {};

export const Basic: Template = {};
Basic.args = {
  type: 'primary',
  variant: 'default',
  size: 'md',
  disabled: false,
  isFullWidth: false,
};
