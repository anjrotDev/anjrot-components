import { FC, forwardRef, HTMLAttributes } from "react";
import { cn, Currencies, formatCurrency, Locales } from "../../utils/utils";
import { FaFileInvoiceDollar, FaRegClock, FaRegMoneyBillAlt, FaUsers } from "react-icons/fa";

const iconMap = {
  collected: FaRegMoneyBillAlt,
  customers: FaUsers,
  pending: FaRegClock,
  invoices: FaFileInvoiceDollar
};

export type InfoTypes = "invoices" | "customers" | "pending" | "collected";

export interface CurrencyObj {
  locale: Locales;
  currency: Currencies;
}

interface InfoCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  value: number | string;
  type?: InfoTypes;
  currency?: CurrencyObj;
}

export const InfoCard: FC<InfoCardProps> = forwardRef(({ title, value, type, currency, className, ...props }) => {
  const Icon = type && iconMap[type];
  return (
    <div className={cn("rounded-xl bg-slate-700 text-slate-700 p-2 shadow-sm", className)} {...props}>
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-white" /> : null}
        <h3 className="ml-2 text-sm text-white font-medium">{title}</h3>
      </div>
      <p className={`truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}>
        {currency ? formatCurrency(value, currency?.locale, currency?.currency) : value}
      </p>
    </div>
  );
});
