import React from 'react';
import { Story, Meta } from '@storybook/react';

import Radio, { RadioProps } from '.';

export default {
  title: 'Component/Radio',
  component: Radio,
} as Meta;

const Template: Story<RadioProps> = (args) => {
  return (
    <div className="flex flex-col items-center float-left gap-2">
      <Radio {...args} name="radio1" />
      <Radio {...args} name="radio1" defaultChecked />
    </div>
  );
};
export const Default = Template.bind({});

export const Colors: Story<RadioProps> = (args) => (
  <div className="flex flex-col items-center float-left gap-2">
    <Radio {...args} defaultChecked color="primary" />
    <Radio {...args} defaultChecked color="secondary" />
  </div>
);
Colors.args = {};
