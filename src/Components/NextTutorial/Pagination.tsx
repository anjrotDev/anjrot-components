import { ElementType, FC } from "react";
import { cn, generatePagination } from "../../utils/utils";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface IPagination {
  href: string;
  AnchorElement?: ElementType;
}

interface PaginationArrowsProps extends IPagination {
  direction?: "left" | "right";
  isDisabled?: boolean;
}

const PaginationArrow: FC<PaginationArrowsProps> = ({ href, direction, AnchorElement = "a", isDisabled }) => {
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
    <AnchorElement className={className} href={href}>
      {icon}
    </AnchorElement>
  );
};

interface PaginationNumbersProps extends IPagination {
  page: number | string;
  isActive: boolean;
  position?: "first" | "last" | "middle" | "single";
}

const PaginationNumber: FC<PaginationNumbersProps> = ({ page, href, isActive, position, AnchorElement = "a" }) => {
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
    <AnchorElement href={href} className={className}>
      {page}
    </AnchorElement>
  );
};

interface PaginationProps extends IPagination {
  totalPages: number;
  currentPage: number;
}
export const Pagination: FC<PaginationProps> = ({ totalPages, href, currentPage, AnchorElement = "a" }) => {
  const allPages = generatePagination(currentPage, totalPages);

  return (
    <>
      {/*  NOTE: Uncomment this code in Chapter 11 */}

      <div className="inline-flex">
        <PaginationArrow direction="left" href={href} isDisabled={currentPage <= 1} AnchorElement={AnchorElement} />

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
                href={href}
                page={page}
                position={position}
                isActive={currentPage === page}
                AnchorElement={AnchorElement}
              />
            );
          })}
        </div>

        <PaginationArrow direction="right" href={href} isDisabled={currentPage >= totalPages} AnchorElement={AnchorElement} />
      </div>
    </>
  );
};
