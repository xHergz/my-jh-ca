"use client";

import { BudgetItem } from "@/types/budget.types";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

export type BudgetPieProps = {
  data: BudgetItem[];
  size: number;
};

const BudgetPie: React.FunctionComponent<BudgetPieProps> = ({
  data,
  size,
}: BudgetPieProps): JSX.Element => {
  const formattedData = data.map((item) => {
    return {
      name: item.Subcategory_Description,
      value: Math.abs(item.Actual_Amount),
    };
  });
  return (
    <PieChart width={size} height={size}>
      <Pie
        data={formattedData}
        labelLine={false}
        outerRadius={size * 0.45}
        fill="#8884d8"
        dataKey="value"
      />
    </PieChart>
  );
};

export default BudgetPie;
