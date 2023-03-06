import React from 'react';
import { Story, Meta } from '@storybook/react';

import Toggle, { ToggleProps } from '.';

export default {
  title: 'Component/Toggle',
  component: Toggle,
} as Meta;

const Template: Story<ToggleProps> = (args) => {
  return <Toggle {...args} />;
};

export const Default = Template.bind({});
Default.args = {};

export const Colors: Story<ToggleProps> = (args) => {
  return (
    <div className="flex flex-col items-center float-left gap-2">
      <Toggle {...args} defaultChecked color="primary" />
    </div>
  );
};
Colors.args = {};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const DisabledAndChecked = Template.bind({});
DisabledAndChecked.args = { disabled: true, checked: true };

export const Sizes: Story<ToggleProps> = (args) => {
  return (
    <div className="flex flex-col items-center float-left gap-2">
      <Toggle {...args} defaultChecked size="xs" />
      <Toggle {...args} defaultChecked size="sm" />
      <Toggle {...args} defaultChecked size="md" />
      <Toggle {...args} defaultChecked size="lg" />
    </div>
  );
};
