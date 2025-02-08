import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  args: {
    title:  'text' ,
    content:  'text' ,
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    title: "Default Title",
    content: "This is the default content for the accordion.",
    primaryColor: "#ccc",
    secondaryColor: "#f8f8f8",
  },
};
