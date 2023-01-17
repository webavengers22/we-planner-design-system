import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { WePlanWrapper } from '.';

export default {
  title: 'component/wrapper',
  component: WePlanWrapper,
  argTypes: {},
} as Meta<typeof WePlanWrapper>;

type Template = StoryObj<typeof WePlanWrapper>;
export const Primary: Template = {};
Primary.args = {};

const WithInitLinkTemplate: Template = {
  render: (args) => (
    <WePlanWrapper {...args}>
      <a href="/">Link</a>
    </WePlanWrapper>
  ),
};

export const WithInitLink = WithInitLinkTemplate;
WithInitLink.args = {};
