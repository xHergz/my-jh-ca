import { SupabaseDataClient } from "./server.utils";
import { getTransactions } from "./transaction.utils";

export const getBudgetSummary = async (
  supabase: SupabaseDataClient,
  startDate: Date,
  endDate: Date
) => {
  const transactions = await getTransactions(supabase, startDate, endDate);
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
