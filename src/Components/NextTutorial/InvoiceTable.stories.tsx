import type { Meta, StoryObj } from "@storybook/react";
import { InvoiceTable } from "./InvoiceTable";

const invoices = [
  {
    _id: "672fc12c075affbd98c74316",
    amount: 234563,
    status: "paid",
    date: "2024-11-09T20:08:12.428Z",
    id: "672fc12c075affbd98c74316",
    name: "Brian Sullivan",
    email: "brian.sullivan@example.com",
    image_url: "https://randomuser.me/api/portraits/med/men/20.jpg"
  },
  {
    _id: "672d3c81ac768d903af27236",
    amount: 3321,
    status: "paid",
    date: "2024-11-04T22:17:37.075Z",
    id: "672d3c81ac768d903af27236",
    name: "Brian Sullivan",
    email: "brian.sullivan@example.com",
    image_url: "https://randomuser.me/api/portraits/med/men/20.jpg"
  },
  {
    _id: "672d3c81ac768d903af27262",
    amount: 8185,
    status: "pending",
    date: "2024-10-29T22:17:37.075Z",
    id: "672d3c81ac768d903af27262",
    name: "Brian Sullivan",
    email: "brian.sullivan@example.com",
    image_url: "https://randomuser.me/api/portraits/med/men/20.jpg"
  },
  {
    _id: "672d6364997af24546ba5b4f",
    amount: 7554,
    status: "paid",
    date: "2024-10-13T01:03:32.972Z",
    id: "672d6364997af24546ba5b4f",
    name: "Brian Sullivan",
    email: "brian.sullivan@example.com",
    image_url: "https://randomuser.me/api/portraits/med/men/20.jpg"
  },
  {
    _id: "672d3c81ac768d903af2721c",
    amount: 5886,
    status: "paid",
    date: "2024-10-09T22:17:37.075Z",
    id: "672d3c81ac768d903af2721c",
    name: "Brian Sullivan",
    email: "brian.sullivan@example.com",
    image_url: "https://randomuser.me/api/portraits/med/men/20.jpg"
  },
  {
    _id: "672d3c81ac768d903af27265",
    amount: 3449,
    status: "pending",
    date: "2024-09-18T22:17:37.075Z",
    id: "672d3c81ac768d903af27265",
    name: "Brian Sullivan",
    email: "brian.sullivan@example.com",
    image_url: "https://randomuser.me/api/portraits/med/men/20.jpg"
  }
];

const meta: Meta<typeof InvoiceTable> = {
  title: "Next Tutorial/InvoiceTable",
  component: InvoiceTable,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      description: "Prefer tailwind Classes, but custom classes also can be used"
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    invoices: invoices
  }
};
