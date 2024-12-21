import { ElementType, FC, HTMLAttributes } from "react";
import { cn, formatCurrency, formatDateToLocal } from "../../utils/utils";
import { StatusIcon } from "./StatusIcon";
import { TableButtons } from "./TableButtons";

export interface InvoiceObj {
  _id: string;
  amount: number;
  status: string;
  date: string;
  id: string;
  name: string;
  email: string;
  image_url: string;
}

export interface InvoiceTableProps extends HTMLAttributes<HTMLDivElement> {
  invoices: InvoiceObj[];
  ImgComponent?: ElementType;
  tableHeader?: {
    className: string;
  };
  ButtonElement?: ElementType;
  deleteAction?: string | undefined;
}

export const InvoiceTable: FC<InvoiceTableProps> = ({
  invoices,
  ImgComponent = "img",
  ButtonElement = "a",
  deleteAction,
  tableHeader,
  className,
  ...props
}) => {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className={cn("rounded-lg bg-gray-50 p-2 md:pt-0", className)} {...props}>
          <div className="md:hidden">
            {invoices?.map(invoice => (
              <div key={invoice.id} className="mb-2 w-full rounded-md bg-white p-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <ImgComponent
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <StatusIcon status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">{formatCurrency(invoice.amount)}</p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <TableButtons
                      icon="edit"
                      className="rounded-md border p-2 hover:bg-gray-100"
                      ButtonType={ButtonElement}
                      href={`/dashboard/invoices/${invoice._id}/edit`}
                    />
                    <TableButtons icon="delete" className="rounded-md border p-2 hover:bg-gray-100" ButtonType={ButtonElement} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className={cn("rounded-lg text-left text-sm font-normal", tableHeader?.className)}>
              <tr>
                <th scope="col" className="px-4 py-5 font-medium">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {invoices?.map(invoice => (
                <tr
                  key={invoice.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <ImgComponent
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">{invoice.email}</td>
                  <td className="whitespace-nowrap px-3 py-3">{formatCurrency(invoice.amount)}</td>
                  <td className="whitespace-nowrap px-3 py-3">{formatDateToLocal(invoice.date)}</td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <StatusIcon status={invoice.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <TableButtons
                        icon="edit"
                        className="rounded-md border p-2 hover:bg-gray-100"
                        ButtonType={ButtonElement}
                        href={`/dashboard/invoices/${invoice._id}/edit`}
                      />
                      <form action={deleteAction}>
                        <input type="hidden" value={invoice.id} name="invoiceId" />
                        <TableButtons icon="delete" className="rounded-md border p-2 hover:bg-gray-100" ButtonType={"button"} type="submit" />
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
