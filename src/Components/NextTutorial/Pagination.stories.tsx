import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Next Tutorial/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SimulatedPagination: Story = {
  render: args => {
    console.log("args :>> ", args);
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    const handlePageChange = (page: number) => {
      console.log("page :>> ", page);
      if (page >= 1 && page <= args.totalPages) {
        setCurrentPage(page);
      }
    };

    const customHref = () => {
      return `#page=${currentPage}`;
    };

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        href={customHref()}
        AnchorElement={({ href, children, ...rest }) => (
          <a
            {...rest}
            href={href}
            onClick={e => {
              e.preventDefault();
              console.log("e.target :>> ", e.currentTarget.innerHTML);

              handlePageChange(Number(e.currentTarget.innerHTML));
            }}
          >
            {children}
          </a>
        )}
      />
    );
  },
  args: {
    href: "#",
    totalPages: 40,
    currentPage: 1
  }
};
