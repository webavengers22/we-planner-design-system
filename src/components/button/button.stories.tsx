import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from 'components/typography';
import { Button } from './button';

export default {
  title: 'Component/Button',
  component: Button,
  args: {
    disabled: false,
    variants: 'primary',
    outline: false,
    size: 'md',
    loading: true,
    block: false,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    <Typography variant="button">Button</Typography>
  </Button>
);

export const Primary = Template.bind({});
