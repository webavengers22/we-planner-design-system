import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './button';

export default {
  title: 'Component/Button',
  component: Button,
  args: {
    disabled: false,
    variants: 'primary',
    outline: false,
    size: 'large',
    loading: true,
    block: false,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
