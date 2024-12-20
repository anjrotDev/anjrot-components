import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "./Breadcrumb";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Next Tutorial/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
};

const breadCrumbs = [
  { label: "Invoices", href: "/dashboard/invoices" },
  {
    label: "Create Invoice",
    href: "/dashboard/invoices/create",
    active: true
  }
];

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    breadcrumb: breadCrumbs
  }
};
