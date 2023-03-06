import React from 'react';
import { Story, Meta } from '@storybook/react';

import Checkbox, { CheckboxProps } from '.';

export default {
  title: 'Component/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => {
  return <Checkbox {...args} />;
};

export const Default = Template.bind({});
Default.args = {};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  indeterminate: true,
};

export const Colors: Story<CheckboxProps> = (args) => {
  return (
    <div className="flex flex-col items-center float-left gap-2">
      <Checkbox {...args} defaultChecked color="primary" />
      <Checkbox {...args} defaultChecked color="secondary" />
      <Checkbox {...args} defaultChecked color="on" />
    </div>
  );
};
Colors.args = {};

export const Sizes: Story<CheckboxProps> = (args) => {
  return (
    <div className="flex flex-col items-center float-left gap-2">
      <Checkbox {...args} defaultChecked size="xs" />
      <Checkbox {...args} defaultChecked size="sm" />
      <Checkbox {...args} defaultChecked size="md" />
      <Checkbox {...args} defaultChecked size="lg" />
    </div>
  );
};
Sizes.args = {};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const DisabledChecked = Template.bind({});
DisabledChecked.args = { checked: true, disabled: true };
