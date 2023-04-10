import type { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';

const meta = {
  title: 'component/Icon',
  component: Icon,
} as Meta<typeof Icon>;

export default meta;
type Template = StoryObj<typeof meta>;
export const Basic: Template = {};
Basic.args = {
  values: 'solid',
  size: 14,
  name: 'Add',
  solid: true,
};
