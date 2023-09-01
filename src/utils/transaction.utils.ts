import { TransactionSummary } from "@/types/transaction.types";
import { SupabaseDataClient } from "@/utils/server.utils";
import { formatSupabaseResults } from "@/utils/supabase.utils";

export const getRecentTransactions = async (supabase: SupabaseDataClient) => {
  const { data: transactions, error } = await supabase.client
    .from("Transaction")
    .select(
      "Transaction_Id, Subcategory(Description, Category(Description)), Location, Debit_Amount, Credit_Amount, Transaction_Date, Entry_Date, Description"
    )
    .order("Transaction_Date", { ascending: false })
    .limit(10);

  if (error) throw error;

  return transactions;
};

export const getTransactions = async (
  supabase: SupabaseDataClient,
  startDate: Date,
  endDate: Date
) => {
  const { data: transactions, error } = await supabase.client
    .from("Transaction")
    .select(
      "Transaction_Id, User_Id, Subcategory(Subcategory_Id, Description, Category(Description)), Location, Debit_Amount, Credit_Amount, Transaction_Date, Entry_Date, Description"
    )
    .gte("Transaction_Date", startDate.toISOString())
    .lte("Transaction_Date", endDate.toISOString())
    .order("Transaction_Date", { ascending: false });

  if (error) throw error;

  return transactions;
};

export const getTransactionSummary = async (
  supabase: SupabaseDataClient,
  organizationId: string,
  startDate: Date,
  endDate: Date
) => {
  const { data: summary, error } = await supabase.client.rpc(
    "gettransactionsummary",
    {
      _organizationid: organizationId,
      _startdate: startDate,
      _enddate: endDate,
    }
  );

  if (error) throw error;

  return formatSupabaseResults(summary) as TransactionSummary[];
};
