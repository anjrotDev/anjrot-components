import { ElementType, FC } from "react";
import { cn } from "../../utils/utils";

interface IBreadcrumb {
  label: string;
  href: string;
  active?: boolean;
  AnchorElement?: ElementType;
}

interface BreadCrumbsPros {
  breadcrumb: IBreadcrumb[];
  className?: string;
}

export const Breadcrumbs: FC<BreadCrumbsPros> = ({ breadcrumb, className }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 block">
      <ol className={cn("flex text-xl md:text-2xl", className)}>
        {breadcrumb.map((x, index) => {
          const Link = x.AnchorElement || "a";
          return (
            <li key={x.href} aria-current={x.active} className={cn(x.active ? "text-gray-900" : "text-gray-500")}>
              <Link href={x.href}>{x.label}</Link>
              {index < breadcrumb.length - 1 ? <span className="mx-3 inline-block">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
