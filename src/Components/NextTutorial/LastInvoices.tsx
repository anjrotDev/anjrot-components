import { ElementType, FC, forwardRef, HTMLAttributes } from "react";
import { cn, formatCurrency } from "../../utils/utils";
import { HiArrowPath } from "react-icons/hi2";

export interface InvoicesProps {
  amount: number;
  id: string;
  name: string;
  image_url: string;
  email: string;
}

export interface LatestInvoicesProps extends HTMLAttributes<HTMLDivElement> {
  latestInvoices: InvoicesProps[];
  ImgComponent?: ElementType;
  footer?: {
    className: string;
  };
}

export const LatestInvoices: FC<LatestInvoicesProps> = forwardRef<HTMLDivElement, LatestInvoicesProps>(
  ({ latestInvoices, ImgComponent = "img", footer, className, ...props }, ref) => {
    return (
      <div className={cn("flex grow flex-col justify-between rounded-xl bg-gray-50 p-4", className)} {...props} ref={ref}>
        <div className="bg-white px-6">
          {latestInvoices.map((invoice, i) => {
            return (
              <div
                key={invoice.id}
                className={cn("flex flex-row items-center justify-between py-4", {
                  "border-t": i !== 0
                })}
              >
                <div className="flex items-center">
                  <ImgComponent
                    src={invoice.image_url}
                    alt={`${invoice.name}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">{invoice.name}</p>
                    <p className="hidden text-sm text-gray-500 sm:block">{invoice.email}</p>
                  </div>
                </div>
                <p className={`truncate text-sm font-medium md:text-base`}>{formatCurrency(invoice.amount)}</p>
              </div>
            );
          })}
        </div>
        <div className={cn("flex items-center pb-2 pt-6", footer?.className)}>
          <HiArrowPath className="h-5 w-5" />
          <h3 className="ml-2 text-sm ">Updated just now</h3>
        </div>
      </div>
    );
  }
);
