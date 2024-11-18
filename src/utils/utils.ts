import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Locales = "es-CL" | "es-MX" | "es-ES" | "en-US" | "en-GB" | "fr-FR" | "pt-BR";
export type Currencies = "CLP" | "MXN" | "EUR" | "USD" | "GBP" | "EUR" | "BRL";

export const formatCurrency = (amount: number | string, locale?: Locales, currency?: Currencies) => {
  if (typeof amount !== "number") {
    amount = Number(amount);
    if (isNaN(amount)) {
      amount = 0;
    }
  }
  return (amount / 100).toLocaleString(locale ? locale : "en-US", {
    style: "currency",
    currency: currency ? currency : "USD"
  });
};
