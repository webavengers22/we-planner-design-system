import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '.';

export default {
  title: 'Component/Button',
  component: Button,
  args: {
    disabled: false,
    variants: 'primary',
    size: 'md',
    loading: true,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'text',
  variants: 'primary',
  disabled: false,
};
