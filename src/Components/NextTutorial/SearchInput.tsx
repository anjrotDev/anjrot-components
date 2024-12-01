import { FC, forwardRef, InputHTMLAttributes } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { cn } from "../../utils/utils";

interface SearchInputsProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  defaultValue?: string;
}

export const SearchInput: FC<SearchInputsProps> = forwardRef<HTMLInputElement, SearchInputsProps>(
  ({ placeholder, defaultValue, onChange, className, ...props }) => {
    return (
      <div className="relative flex flex-1 flex-shrink-0">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          className={cn("peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500", className)}
          placeholder={placeholder}
          onChange={onChange}
          defaultValue={defaultValue}
          {...props}
        />
        <FaMagnifyingGlass className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>
    );
  }
);
