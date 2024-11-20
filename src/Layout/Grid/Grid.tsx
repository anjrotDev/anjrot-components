import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils/utils";
import { ElementType, forwardRef, ReactElement } from "react";
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from "../../utils/polmorphicsTypes";

// Define styles with cva
const gridStyles = cva("grid w-full", {
  variants: {
    gap: {
      0: "gap-0",
      1: "gap-1",
      2: "gap-2",
      4: "gap-4",
      6: "gap-6",
      8: "gap-8",
      10: "gap-10"
    },
    direction: {
      row: "grid-rows-1",
      column: "grid-cols-1"
    }
  },
  defaultVariants: {
    gap: 2,
    direction: "column"
  }
});

// Define the props for the Grid component
export type GridProps<C extends ElementType> = PolymorphicComponentPropsWithRef<
  C,
  VariantProps<typeof gridStyles> & {
    rows?: number;
    cols?: number;
  }
>;

export type GridComponent = <C extends ElementType = "div">(props: GridProps<C>) => ReactElement | null;

// Create the Grid component
export const Grid: GridComponent = forwardRef(
  <C extends ElementType = "div">({ as, children, gap, direction, rows, cols, className, ...props }: GridProps<C>, ref?: PolymorphicRef<C>) => {
    const Component = as || "div";
    console.log("direction :>> ", direction);
    console.log("rows :>> ", rows);

    return (
      <Component
        className={cn(
          gridStyles({ gap, direction }),
          direction === "row" && rows && `grid-rows-${rows}`,
          direction === "column" && cols && `grid-cols-${cols}`,
          className
        )}
        {...props}
        ref={ref}
      >
        {children}
      </Component>
    );
  }
) as GridComponent;
