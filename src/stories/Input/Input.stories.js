import { Input } from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Standart = {};

export const Filled = {
  args: {
    variant: 'filled',
  },
};

export const Outlined = {
  args: {
    variant: 'outlined',
  },
};
