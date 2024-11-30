import { FC, forwardRef, HTMLAttributes } from "react";
import { cn, generateYAxis, Revenue } from "../../utils/utils";

export interface RevenueChartProps extends HTMLAttributes<HTMLDivElement> {
  revenues: Revenue[];
  chartHeight: number;
}

export const RevenueChart: FC<RevenueChartProps> = forwardRef<HTMLDivElement, RevenueChartProps>(
  ({ revenues, chartHeight, className, ...props }, ref) => {
    const { yAxisLabels, topLabel } = generateYAxis(revenues);
    return (
      <div className={cn("rounded-xl bg-gray-50 p-4", className)} {...props} ref={ref}>
        <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
          <div className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex" style={{ height: `${chartHeight}px` }}>
            {yAxisLabels.map(label => (
              <p key={label}>{label}</p>
            ))}
          </div>
          {revenues.map(month => (
            <div key={month.month} className="flex flex-col items-center gap-0">
              <div
                className="w-full rounded-md bg-blue-300"
                style={{
                  height: `${(chartHeight / topLabel) * month.revenue}px`
                }}
              ></div>
              <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">{month.month}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
);
