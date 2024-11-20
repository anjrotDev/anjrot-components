import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils/utils";
import { ElementType, forwardRef, ReactElement } from "react";
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from "../../utils/polmorphicsTypes";

// Define styles with cva
const stackStyles = cva("flex w-full", {
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
      row: "flex-row",
      "row-reverse": "flex-row-reverse",
      column: "flex-col",
      "column-reverse": "flex-col-reverse"
    },
    align: {
      start: "content-start flex-wrap",
      center: "content-center flex-wrap",
      end: "content-end flex-wrap",
      stretch: "content-stretch flex-wrap",
      baseline: "content-baseline flex-wrap"
    },
    alignContent: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      stretch: "justify-stretch",
      "space-between": "justify-between",
      "space-around": "justify-around",
      "space-evenly": "justify-evenly"
    }
  },
  defaultVariants: {
    gap: 4,
    direction: "row",
    align: "stretch",
    alignContent: "stretch"
  }
});

// Define the props for the Stack component
export type StackProps<C extends ElementType> = PolymorphicComponentPropsWithRef<C, VariantProps<typeof stackStyles>>;

export type StackComponent = <C extends ElementType = "div">(props: StackProps<C>) => ReactElement | null;

// Create the Stack component
export const Stack: StackComponent = forwardRef(
  <C extends ElementType = "div">(
    { as, children, gap, direction, align, alignContent, className, ...props }: StackProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "div";

    return (
      <Component className={cn(stackStyles({ gap, direction, align, alignContent }), className)} {...props} ref={ref}>
        {children}
      </Component>
    );
  }
) as StackComponent;
