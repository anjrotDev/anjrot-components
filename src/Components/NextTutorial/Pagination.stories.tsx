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
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    const handlePageChange = (page: number) => {
      console.log("page :>> ", page);
      if (page >= 1 && page <= args.totalPages) {
        setCurrentPage(page);
      }
    };

    const createPageURL = (pageNumber: number | string) => {
      return `#page=${pageNumber}`;
    };

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        createPageURL={createPageURL}
        AnchorElement={({ href, children, ...rest }) => (
          <a
            {...rest}
            href={createPageURL}
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
    totalPages: 40,
    currentPage: 1
  }
};
