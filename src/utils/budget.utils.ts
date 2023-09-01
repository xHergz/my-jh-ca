import { Budget, BudgetSummary } from "@/types/budget.types";
import { SupabaseDataClient } from "./server.utils";
import { getTransactionSummary } from "./transaction.utils";
import { TransactionSummary } from "@/types/transaction.types";

export const getBudget = async (
  supabase: SupabaseDataClient,
  id: Budget["Budget_Id"]
) => {
  const { data: budgets, error } = await supabase.client
    .from("Budget")
    .select("Budget_Id, Name, Organization_Id, Budget_Entry(*, Subcategory(*))")
    .eq("Budget_Id", id);

  if (error) throw error;

  return budgets[0] ?? null;
};

export const getBudgets = async (supabase: SupabaseDataClient) => {
  const { data: budgets, error } = await supabase.client
    .from("Budget")
    .select("Budget_Id, Name, Budget_Entry(*, Subcategory(*))");

  if (error) throw error;

  return budgets;
};

export const getBudgetSummary = async (
  supabase: SupabaseDataClient,
  budgetId: Budget["Budget_Id"],
  startDate: Date,
  endDate: Date
): Promise<{
  budget: Pick<Budget, "Budget_Id" | "Name" | "Organization_Id">;
  transactions: TransactionSummary[];
  summary: BudgetSummary;
}> => {
  const budget = await getBudget(supabase, budgetId);
  const transactionSummary = await getTransactionSummary(
    supabase,
    budget.Organization_Id,
    startDate,
    endDate
  );
  const transactionMap = new Map<number, TransactionSummary>(
    transactionSummary.map((summary) => [summary.Subcategory_Id, summary])
  );

  const budgetSummary: BudgetSummary = {
    budgeted: [],
    earning: [],
    unbudgeted: [],
  };
  const budgetedSubcategories: number[] = [];
  const earningSubcategories: number[] = [];

  budget.Budget_Entry.forEach((entry) => {
    const transaction = transactionMap.get(entry.Subcategory_Id);
    if (entry.Amount > 0) {
      earningSubcategories.push(entry.Subcategory_Id);
      budgetSummary.earning.push({
        Subcategory_Id: entry.Subcategory.Subcategory_Id,
        Subcategory_Description: entry.Subcategory.Description,
        Budget_Amount: entry.Amount,
        Actual_Amount: transaction
          ? transaction.Credit_Sum - transaction.Debit_Sum
          : 0,
        Type: "earning",
      });
    } else {
      budgetedSubcategories.push(entry.Subcategory_Id);
      budgetSummary.budgeted.push({
        Subcategory_Id: entry.Subcategory.Subcategory_Id,
        Subcategory_Description: entry.Subcategory.Description,
        Budget_Amount: entry.Amount,
        Actual_Amount: transaction
          ? transaction.Credit_Sum - transaction.Debit_Sum
          : 0,
        Type: "budgeted",
      });
    }
  });

  transactionSummary
    .filter(
      (transaction) =>
        ![...budgetedSubcategories, ...earningSubcategories].includes(
          transaction.Subcategory_Id
        )
    )
    .forEach((transaction) => {
      budgetSummary.unbudgeted.push({
        Subcategory_Id: transaction.Subcategory_Id,
        Subcategory_Description: transaction.Subcategory_Description,
        Budget_Amount: 0,
        Actual_Amount: transaction.Credit_Sum - transaction.Debit_Sum,
        Type: "unbudgeted",
      });
    });

  return {
    budget,
    transactions: transactionSummary,
    summary: budgetSummary,
  };
};

export const formatBudgetNumber = (value: number) => {
  return `$${Math.abs(value).toFixed(2)}`;
};
/*
SELECT
    EXTRACT(YEAR FROM Transaction_Date) AS Month_Year,
    Subcategory_Id,
    Subcategory_Description,
    SUM(Debit_Amount) AS Debit_Sum,
    SUM(Credit_Amount) AS Credit_Sum
FROM
    Transaction_Details
WHERE
    Transaction_Date >= '2023-01-01'
    AND Transaction_Date <= '2023-01-31'
GROUP BY
    Month_Year,
    Subcategory_Id
ORDER BY
    Month_Year,
    Debit_Sum;
*/
