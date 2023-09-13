import { Typography } from './Typography';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Typography',
  component: Typography,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const h1 = {
  args: {
    variant: 'h1',
  },
};

export const h2 = {
  args: {
    variant: 'h2',
  },
};

export const h3 = {
  args: {
    variant: 'h3',
  },
};

export const h4 = {
  args: {
    variant: 'h4',
  },
};

export const h5 = {
  args: {
    variant: 'h5',
  },
};

export const h6 = {
  args: {
    variant: 'h6',
  },
};
