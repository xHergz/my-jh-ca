import { parse, startOfMonth, startOfYear } from "date-fns";

import Text from "@/components/common/text";
import { useServerClient } from "@/utils/server.utils";
import { getTransactionSummary } from "@/utils/transaction.utils";
import { getBudget, getBudgetSummary } from "@/utils/budget.utils";
import Card from "@/components/common/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/table";
import { sumBy } from "lodash";
import { Progress } from "@/components/shadcn/progress";
import BudgetPie from "@/components/budgets/budget-pie";
import BudgetTable from "@/components/budgets/budget-table";
import BudgetProgress from "@/components/budgets/budget-progress";

type SummaryItem = {
  Subcategory_Id: number;
  Subcategory_Description: string;
  Amount: number;
};

const BUDGET_ID = "68017976-5e6e-44c1-9332-473a178a8304";
const START_DATE = parse("2023-08-01", "yyyy-MM-dd", new Date());
const END_DATE = parse("2023-08-31", "yyyy-MM-dd", new Date());

export default async function Budgets() {
  const supabase = useServerClient();
  const { budget, transactions, summary } = await getBudgetSummary(
    supabase,
    BUDGET_ID,
    START_DATE,
    END_DATE
  );

  const earningsEarned = sumBy(summary.earning, (item) => item.Actual_Amount);
  const earningsBudgeted = sumBy(summary.earning, (item) => item.Budget_Amount);

  const budgetedSpent = sumBy(summary.budgeted, (item) => item.Actual_Amount);
  const budgetedBudgeted = sumBy(
    summary.budgeted,
    (item) => item.Budget_Amount
  );

  return (
    <main className="grid grid-rows-[auto_auto_1fr] grid-columns-2 gap-4 p-8">
      <div>August 2023 Budget</div>
      <Card className="max-w-full" title="Earnings">
        <div className="grid grid-rows-[1fr_auto] grid-cols-2 gap-4 justify-center align-center">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subcategory</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Actual</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {summary.earning.map((item) => {
                return (
                  <TableRow key={item.Subcategory_Id}>
                    <TableCell>{item.Subcategory_Description}</TableCell>
                    <TableCell>{item.Budget_Amount}</TableCell>
                    <TableCell>{item.Actual_Amount}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <BudgetPie data={summary.earning} size={100} />
          <BudgetProgress data={summary.earning} />
        </div>
      </Card>
      <div className="flex gap-4">
        <Card className="flex-1 max-w-full" title="Budgeted">
          <div className="grid grid-cols-2 gap-4 justify-center align-center">
            <BudgetTable data={summary.budgeted} />
            <div>
              <BudgetPie data={summary.budgeted} size={400} />
            </div>
          </div>
          <BudgetProgress data={summary.budgeted} />
        </Card>
        <Card className="flex-1 max-w-full" title="Unbudgeted">
          <div className="grid grid-cols-2 gap-4 justify-center align-center">
            <BudgetTable data={summary.unbudgeted} />
            <div>
              <BudgetPie data={summary.unbudgeted} size={400} />
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
