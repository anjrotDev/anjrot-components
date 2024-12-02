import type { Meta, StoryObj } from "@storybook/react";
import { TableButtons } from "./TableButtons";

const meta: Meta<typeof TableButtons> = {
  title: "Next Tutorial/TableButtons",
  component: TableButtons,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    ButtonType: {
      description: "anchor or Button element, could the Link component from NextJs"
    },
    href: {
      description: "If the ButtonType is an anchor it should have an href set"
    },
    title: {
      description: "Button Title"
    },
    icon: {
      description: "three types of icons, create | edit | delete",
      control: "select"
    },
    className: {
      description: "Prefer tailwind Classes, but custom classes also can be used"
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ButtonType: "a",
    href: "/",
    title: "El Botón",
    icon: "create"
  }
};

export const Edit: Story = {
  args: {
    ButtonType: "a",
    href: "/",
    title: "Edit Button",
    icon: "edit"
  }
};

export const Delete: Story = {
  args: {
    ButtonType: "a",
    href: "/",
    title: "Delete Button",
    icon: "delete"
  }
};
