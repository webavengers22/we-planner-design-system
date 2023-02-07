import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '.';

const meta: Meta<typeof Button> = {
  title: 'Component/Button',
  component: Button,
  args: {
    variants: 'primary',
    size: 'md',
    loading: true,
    disabled: false,
  },
} as Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variants: 'primary',
    size: 'md',
  },
};
