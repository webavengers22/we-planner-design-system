import React, { ReactFragment, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WePlanWrapper } from '.';
export default {
  title: 'Component/Wrapper',
  component: WePlanWrapper,
  argTypes: {},
} as ComponentMeta<typeof WePlanWrapper>;

const Template: ComponentStory<typeof WePlanWrapper> = (args) => <WePlanWrapper {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

const Link = React.forwardRef<HTMLAnchorElement, { to?: string; children: React.ReactNode }>(
  (props, ref) => {
    return (
      <a href={props?.to} ref={ref} {...props}>
        {props.children}
      </a>
    );
  },
);

const WithInitLinkTemplate: ComponentStory<typeof WePlanWrapper> = (args) => {
  return (
    <WePlanWrapper initLink={Link} {...args}>
      <a href="/">Link</a>
    </WePlanWrapper>
  );
};

export const WithInitLink = WithInitLinkTemplate.bind({});
Primary.args = {};
