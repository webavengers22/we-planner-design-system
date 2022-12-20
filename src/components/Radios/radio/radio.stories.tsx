import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from '.';

export default {
  title: 'Component/Radio',
  component: Radio,
  args: {
    disabled: false,
    variants: 'primary',
    size: 'md',
    loading: true,
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'text',
  variants: 'primary',
  disabled: false,
};
