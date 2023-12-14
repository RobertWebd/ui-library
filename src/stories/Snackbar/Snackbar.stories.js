import { Snackbar } from './Snackbar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Dark = {
  args: {
    size: 'm',
  },
};
