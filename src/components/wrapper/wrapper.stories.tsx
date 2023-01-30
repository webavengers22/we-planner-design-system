import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { WePlanWrapper } from '.';

export default {
  title: 'component/wrapper',
  component: WePlanWrapper,
} as Meta<typeof WePlanWrapper>;

type Template = StoryObj<typeof WePlanWrapper>;

export const Basic: Template = {
  render: (args) => <WePlanWrapper {...args} />,
};

/* export const WithInitLink: Template = {
  render: (args) => (
    <WePlanWrapper {...args}>
      <a href="/">Link</a>
    </WePlanWrapper>
  ),
}; */
