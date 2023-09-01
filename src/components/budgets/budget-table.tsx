"use client";

import { BudgetItem } from "@/types/budget.types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/table";
import { formatBudgetNumber } from "@/utils/budget.utils";

export type BudgetTableProps = {
  data: BudgetItem[];
};

const BudgetTable: React.FunctionComponent<BudgetTableProps> = ({
  data,
}: BudgetTableProps): JSX.Element => {
  return (
    <Table>
      <TableCaption>A summary of budgeted transactions</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Subcategory</TableHead>
          <TableHead>Budget</TableHead>
          <TableHead>Actual</TableHead>
          <TableHead>Diff</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => {
          const background =
            item.Actual_Amount < item.Budget_Amount
              ? "bg-red-500/20"
              : "bg-green-500/20";
          return (
            <TableRow key={item.Subcategory_Id} className={background}>
              <TableCell>{item.Subcategory_Description}</TableCell>
              <TableCell>{formatBudgetNumber(item.Budget_Amount)}</TableCell>
              <TableCell>{formatBudgetNumber(item.Actual_Amount)}</TableCell>
              <TableCell>
                ${(item.Actual_Amount - item.Budget_Amount).toFixed(2)}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default BudgetTable;
