import { SupabaseDataClient } from "@/utils/server.utils";

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
