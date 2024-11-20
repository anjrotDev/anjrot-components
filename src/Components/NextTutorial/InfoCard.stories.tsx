import type { Meta, StoryObj } from "@storybook/react";
import { InfoCard } from "./InfoCard";

const meta: Meta<typeof InfoCard> = {
  title: "Next Tutorial/InfoCard",
  component: InfoCard,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      type: "string"
    },
    value: {
      type: "number",
      description: "Amount value for the info card, could be an string too"
    },
    type: {
      type: "string",
      description: "Renders an icon representing statuses",
      control: "select",
      options: ["invoices", "customers", "pending", "collected"]
    },
    currency: {
      description: "Optional a currency Object like {currency: 'USD', locale: 'en-US'}"
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50000,
    type: "invoices",
    title: "The Title",
    currency: {
      currency: "USD",
      locale: "en-US"
    }
  }
};
