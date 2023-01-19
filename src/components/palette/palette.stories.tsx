import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { WePlanPallette } from '.';

export default {
  title: 'component/pallette',
  component: WePlanPallette,
  argTypes: {},
} as Meta<typeof WePlanPallette>;

type Template = StoryObj<typeof WePlanPallette>;
export const Primary: Template = {
  render: (args) => <WePlanPallette />,
  args: {},
};
