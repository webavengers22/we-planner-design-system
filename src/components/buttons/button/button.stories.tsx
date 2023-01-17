import { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

export default {
  title: 'component/Button',
  component: Button,
  args: {
    disabled: false,
    variants: 'primary',
    size: 'md',
    loading: true,
  },
} as Meta<typeof Button>;

type Template = StoryObj<typeof Button>;
export const Primary: Template = {};
Primary.args = {
  children: 'text',
  variants: 'primary',
  disabled: false,
};
