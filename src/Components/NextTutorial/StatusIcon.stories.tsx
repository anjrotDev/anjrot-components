import type { Meta, StoryObj } from "@storybook/react";
import { StatusIcon } from "./StatusIcon";

const meta: Meta<typeof StatusIcon> = {
  title: "Next Tutorial/StatusIcon",
  component: StatusIcon,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      type: "string",
      description: "Status for invoices in the next tutorial, 'paid' | 'pending'"
    },
    className: {
      description: "Prefer tailwind Classes, but custom classes also can be used"
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Paid: Story = {
  args: {
    status: "paid"
  }
};
export const Pending: Story = {
  args: {
    status: "pending"
  }
};
