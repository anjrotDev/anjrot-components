import type { Meta, StoryObj } from "@storybook/react";
import { RevenueChart } from "./RevenueChart";
import { Revenue } from "../../utils/utils";

const revenues: Revenue[] = [
  {
    _id: "672d3c8cebdf38b892073a4a",
    month: "Jan",
    revenue: 2000
  },
  {
    _id: "672d3c8cebdf38b892073a4b",
    month: "Feb",
    revenue: 1800
  },
  {
    _id: "672d3c8cebdf38b892073a4c",
    month: "Mar",
    revenue: 2200
  },
  {
    _id: "672d3c8cebdf38b892073a4d",
    month: "Apr",
    revenue: 2500
  },
  {
    _id: "672d3c8cebdf38b892073a4e",
    month: "May",
    revenue: 2300
  },
  {
    _id: "672d3c8cebdf38b892073a4f",
    month: "Jun",
    revenue: 3200
  },
  {
    _id: "672d3c8cebdf38b892073a50",
    month: "Jul",
    revenue: 3500
  },
  {
    _id: "672d3c8cebdf38b892073a51",
    month: "Aug",
    revenue: 3700
  },
  {
    _id: "672d3c8cebdf38b892073a52",
    month: "Sep",
    revenue: 2500
  },
  {
    _id: "672d3c8cebdf38b892073a53",
    month: "Oct",
    revenue: 2800
  },
  {
    _id: "672d3c8cebdf38b892073a54",
    month: "Nov",
    revenue: 3000
  },
  {
    _id: "672d3c8cebdf38b892073a55",
    month: "Dec",
    revenue: 4800
  }
];

const meta: Meta<typeof RevenueChart> = {
  title: "Next Tutorial/RevenueChart",
  component: RevenueChart,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    revenues: {
      description: "Array of Revenues following the Nextjs Tutorial"
    },
    chartHeight: {
      type: "number",
      description: "Set Chart value height"
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
    chartHeight: 350,
    revenues: revenues
  }
};
