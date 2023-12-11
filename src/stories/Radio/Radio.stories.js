import { Radio } from './Radio';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Radio',
  component: Radio,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Red = {
  args: {
    color: 'red',
    size: 'm',
  },
};
