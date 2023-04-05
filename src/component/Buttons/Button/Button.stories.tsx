import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from './Button';

import { ButtonProps } from '..';

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    startIcon: {
      control: false,
    },
    endIcon: {
      control: false,
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Colors: Story<ButtonProps> = (args) => {
  return (
    <div>
      <div>
        <Button {...args}>Default</Button>
        <Button {...args} color="primary">
          Primary
        </Button>
        <Button {...args} color="secondary">
          Secondary
        </Button>
      </div>
      <div>
        <Button {...args} color="accent">
          accent
        </Button>
        <Button {...args} color="off">
          off
        </Button>
      </div>
    </div>
  );
};
Colors.args = {
  className: 'm-1',
};

export const Variants: Story<ButtonProps> = (args) => {
  return (
    <div className="flex gap-x-2">
      <Button {...args}>Default</Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
  );
};
