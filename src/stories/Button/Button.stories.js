import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Filled = {
  args: {
    content: 'Filled',
  },
};

export const Outlined = {
  args: {
    variant: 'outlined',
    content: 'Outlined',
  },
};

// export const Secondary = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
