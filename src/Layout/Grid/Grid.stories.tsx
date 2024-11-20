import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./Grid";
import { ComponentProps } from "react";

interface GridComponentProps extends ComponentProps<typeof Grid> {
  childrenQuantity?: number;
}

const meta: Meta<GridComponentProps> = {
  title: "Layout/Grid",
  component: Grid,
  tags: ["autodocs"],
  argTypes: {
    as: {
      description: "By default renders a 'div' but be free to change the element by whatever you want"
    },
    gap: {
      type: "string",
      control: "select",
      options: [0, 1, 2, 4, 6, 8, 10],
      description: "Controls the gap between child elements.",
      defaultValue: 4
    },
    direction: {
      control: "select",
      type: "string",
      options: ["row", "column"],
      description: "Defines the flex direction of the Stack.",
      defaultValue: "row"
    },
    rows: {
      control: "number",
      type: "number",
      description: "Rows numbers if direction is set to rows"
    },
    cols: {
      control: "number",
      type: "number",
      description: "Columns numbers if direction is set to columns"
    },
    childrenQuantity: {
      control: "number",
      description: "Specifies the number of child elements to render.",
      defaultValue: 3
    },
    className: {
      description: "Prefer tailwind Classes, but custom classes also can be used"
    },
    ref: {
      table: {
        disable: true
      }
    }
  }
};

export default meta;
type Story = StoryObj<GridComponentProps>;

const GridComponent: Story = {
  render: ({ childrenQuantity, ...props }) => (
    <Grid {...props}>
      {[...Array(childrenQuantity).keys()].map(n => (
        <div key={n} className="w-32 h-10 bg-slate-500 flex items-center justify-center text-3xl font-bold">
          {n + 1}
        </div>
      ))}
    </Grid>
  )
};

export const Default: Story = {
  ...GridComponent,
  args: {
    gap: 4,
    direction: "row",
    childrenQuantity: 3
  }
};
