import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from '.';

export default {
  title: 'Component/Radio',
  component: Radio,
  // args: {
  //   disabled: false,
  //   variants: 'primary',
  //   size: 'md',
  //   loading: true,
  // },
} as ComponentMeta<typeof Radio>; //스토리북 6.3부터 컴포넌트로부터 Props를 불러오기 위한

// Radio 컴포넌트 안의 인자들을 뿌려줌
const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;
// const Template: ComponentStory<typeof RadioGroups> = (args) => <RadioGroups {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'text',
  variants: 'primary',
  disabled: false,
  label: 'text',
  
};
