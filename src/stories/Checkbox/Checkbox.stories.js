import { Checkbox } from './Checkbox';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Filled = {
  args: {
    content: 'Filled',
  },
};
