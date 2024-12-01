import type { Meta, StoryObj } from "@storybook/react";
import SearchInput from "./SearchInput";

const meta: Meta<typeof SearchInput> = {
  title: "Next Tutorial/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      type: "string",
      description: "Place holder for the Search Input"
    },
    defaultValue: {
      description: "If the search needs a defaultValue"
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Search"
  }
};
