import type { Meta, StoryObj } from "@storybook/react";
import { InvoicesProps, LatestInvoices } from "./LastInvoices";

const invoices: InvoicesProps[] = [
  {
    id: "672d3c81ac768d903af27216",
    amount: 23456,
    email: "tyler.prescott@example.com",
    image_url: "https://randomuser.me/api/portraits/med/men/65.jpg",
    name: "Tyler Prescott"
  },
  {
    id: "672d3c81ac768d903af27217",
    amount: 2058,
    email: "edward.perkins@example.com",
    image_url: "https://randomuser.me/api/portraits/med/men/67.jpg",
    name: "Edward Perkins"
  },
  {
    id: "672d3c81ac768d903af27218",
    amount: 8766,
    email: "kristina.holland@example.com",
    image_url: "https://randomuser.me/api/portraits/med/women/96.jpg",
    name: "Kristina Holland"
  },
  {
    id: "672d3c81ac768d903af27219",
    amount: 5911,
    email: "eva.ramos@example.com",
    image_url: "https://randomuser.me/api/portraits/med/women/96.jpg",
    name: "Eva Ramos"
  },
  {
    id: "672d3c81ac768d903af2721a",
    amount: 6149,
    email: "amanda.morris@example.com",
    image_url: "https://randomuser.me/api/portraits/med/women/86.jpg",
    name: "Amanda Morris"
  }
];

const meta: Meta<typeof LatestInvoices> = {
  title: "Next Tutorial/LatestInvoices",
  component: LatestInvoices,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    latestInvoices: {
      description: "Array of Invoices following the Nextjs Tutorial"
    },
    ImgComponent: {
      description: "img element or Image component from Nextjs, default= 'img'"
    },
    footer: {
      description: "just to pass custom classes to the box footer"
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    latestInvoices: invoices
  }
};
