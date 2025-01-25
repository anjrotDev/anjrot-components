import { AnchorHTMLAttributes, ElementType, FC } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { cn, generatePagination } from "../../utils/utils";

interface IPagination {
  AnchorElement?: ElementType;
}

interface PaginationNumberProps extends IPagination, AnchorHTMLAttributes<HTMLAnchorElement> {
  page: number | string;
  position?: "first" | "last" | "middle" | "single";
  isActive: boolean;
}

const PaginationNumber: FC<PaginationNumberProps> = ({ page, position, isActive, AnchorElement = "a", href, ...props }) => {
  const className = cn("flex h-10 w-10 items-center justify-center text-sm border", {
    "rounded-l-md": position === "first" || position === "single",
    "rounded-r-md": position === "last" || position === "single",
    "z-10 bg-blue-600 border-blue-600 text-white": isActive,
    "hover:bg-gray-100": !isActive && position !== "middle",
    "text-gray-300": position === "middle"
  });

  return isActive || position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <AnchorElement href={href} className={className} {...props}>
      {page}
    </AnchorElement>
  );
};

interface PaginationArrowProps extends IPagination, AnchorHTMLAttributes<HTMLAnchorElement> {
  direction: "left" | "right";
  isDisabled?: boolean;
}

const PaginationArrow: FC<PaginationArrowProps> = ({ direction, isDisabled, AnchorElement = "a", href, ...props }) => {
  const className = cn("flex h-10 w-10 items-center justify-center rounded-md border", {
    "pointer-events-none text-gray-300": isDisabled,
    "hover:bg-gray-100": !isDisabled,
    "mr-2 md:mr-4": direction === "left",
    "ml-2 md:ml-4": direction === "right"
  });

  const icon = direction === "left" ? <FaArrowLeft className="w-4" /> : <FaArrowRight className="w-4" />;

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <AnchorElement className={className} href={href || "none"} {...props}>
      {icon}
    </AnchorElement>
  );
};

interface PaginationProps extends IPagination {
  totalPages: number;
  currentPage: number;
  createPageURL: (pageNumber: number | string) => string;
  paginationNumberOnClick?: () => void;
  paginationArrowOnClick?: () => void;
}

export const Pagination: FC<PaginationProps> = ({
  totalPages,
  currentPage,
  AnchorElement = "a",
  createPageURL,
  paginationArrowOnClick,
  paginationNumberOnClick
}) => {
  const allPages = generatePagination(currentPage, totalPages);

  return (
    <>
      <div className="inline-flex">
        <PaginationArrow
          direction="left"
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
          AnchorElement={AnchorElement}
          onClick={paginationArrowOnClick}
        />

        <div className="flex -space-x-px">
          {allPages.map((page, index) => {
            let position: "first" | "last" | "single" | "middle" | undefined;

            if (index === 0) position = "first";
            if (index === allPages.length - 1) position = "last";
            if (allPages.length === 1) position = "single";
            if (page === "...") position = "middle";

            return (
              <PaginationNumber
                key={page}
                href={createPageURL(page)}
                page={page}
                position={position}
                isActive={currentPage === page}
                AnchorElement={AnchorElement}
                onClick={paginationNumberOnClick}
              />
            );
          })}
        </div>

        <PaginationArrow
          direction="right"
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
          AnchorElement={AnchorElement}
        />
      </div>
    </>
  );
};
