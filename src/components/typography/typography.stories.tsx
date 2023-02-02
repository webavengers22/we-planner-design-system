import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Typography } from './typography';

export default {
  title: 'component/Typography',
  component: Typography,
} as Meta<typeof Typography>;

type Template = StoryObj<typeof Typography>;

export const Basic: Template = {
  render: (args) => <Typography variant="display1" children="text"></Typography>,
};
