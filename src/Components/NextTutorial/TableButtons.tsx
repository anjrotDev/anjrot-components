import { ButtonHTMLAttributes, ElementType, FC, forwardRef } from "react";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

interface TableButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ButtonType?: ElementType;
  href?: string;
  title?: string;
  icon?: "create" | "edit" | "delete";
}

export const TableButtons: FC<TableButtonsProps> = forwardRef<HTMLButtonElement, TableButtonsProps>(
  ({ href, title, ButtonType = "a", className, icon, ...props }, ref) => {
    const Icon = () => {
      switch (icon) {
        case "create":
          return <FaPlus className="h-5 md:ml-4" />;
        case "edit":
          return <FaPencilAlt className="w-5" />;
        case "delete":
          return <FaRegTrashAlt className="w-5" />;
      }
    };

    return (
      <ButtonType
        {...(href ? { href } : {})}
        className={
          className ||
          "flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        }
        {...props}
        ref={ref}
      >
        {title ? (
          <>
            <span className="hidden md:block">{title}</span> {icon && <Icon />}
          </>
        ) : (
          icon && <Icon />
        )}
      </ButtonType>
    );
  }
);
