import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "Next Tutorial/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
