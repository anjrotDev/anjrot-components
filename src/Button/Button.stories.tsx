import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  component: Button,
  argTypes: {
    children: {
      description: "The button label"
    },
    variant: {
      type: "string",
      options: ["default", "primary", "success", "warning", "danger", "ghost"],
      control: "select",
      description: "Colors Variants"
    },
    outline: {
      type: "boolean",
      description: "Button Outline"
    },
    size: {
      type: "string",
      options: ["sm", "md", "lg", "full"],
      control: { type: "radio" },
      description: "Button Size"
    },
    rounded: {
      type: "string",
      options: ["basic", "sm", "md", "lg", "full"],
      control: { type: "radio" },
      description: "Button Border radious"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button"
  }
};

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary"
  }
};
export const Success: Story = {
  args: {
    children: "Button",
    variant: "success"
  }
};
export const Warning: Story = {
  args: {
    children: "Button",
    variant: "warning"
  }
};
export const Danger: Story = {
  args: {
    children: "Button",
    variant: "danger"
  }
};

export const Outline: Story = {
  args: {
    children: "Button",
    outline: false
  }
};
