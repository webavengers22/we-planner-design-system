import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GoWithButton } from '.';

export default {
  title: 'Component/GoWithButton',
  component: GoWithButton,
  args: {
    disabled: false,
    variants: 'primary',
    size: 'md',
    loading: true,
  },
} as ComponentMeta<typeof GoWithButton>;

const Template: ComponentStory<typeof GoWithButton> = (args) => <GoWithButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'text',
  variants: 'primary',
  disabled: false,
};
