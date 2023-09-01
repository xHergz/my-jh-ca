import { Database } from "./supabase.types";

export type Transaction = Database["public"]["Tables"]["Transaction"]["Row"];

export type TransactionSummary = {
  Month_Year: string;
  Subcategory_Id: number;
  Subcategory_Description: string;
  Debit_Sum: number;
  Credit_Sum: number;
};
