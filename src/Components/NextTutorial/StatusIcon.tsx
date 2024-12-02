import { FC, forwardRef, HTMLAttributes } from "react";
import { FaCheck, FaRegClock } from "react-icons/fa6";
import { cn } from "../../utils/utils";

interface Status extends HTMLAttributes<HTMLSpanElement> {
  status: string;
}

export const StatusIcon: FC<Status> = forwardRef<HTMLSpanElement, Status>(({ status, className, ...props }, ref) => {
  return (
    <span
      className={cn("inline-flex items-center rounded-full px-2 py-1 text-xs", {
        "bg-gray-100 text-gray-500": status === "pending",
        "bg-green-500 text-white": status === "paid",
        className
      })}
      {...props}
      ref={ref}
    >
      {status === "pending" ? (
        <>
          Pending
          <FaRegClock className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === "paid" ? (
        <>
          Paid
          <FaCheck className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
});
