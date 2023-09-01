import { Subcategory } from "./subcategory.types";
import { Database } from "./supabase.types";

export type Budget = Database["public"]["Tables"]["Budget"]["Row"];

export type BudgetEntry = Database["public"]["Tables"]["Budget_Entry"]["Row"];

export type BudgetItemType = "budgeted" | "earning" | "unbudgeted";

export type BudgetItem = {
  Subcategory_Id: Subcategory["Subcategory_Id"];
  Subcategory_Description: Subcategory["Description"];
  Budget_Amount: BudgetEntry["Amount"];
  Actual_Amount: BudgetEntry["Amount"];
  Type: BudgetItemType;
};

export type BudgetSummary = {
  [key in BudgetItemType]: BudgetItem[];
};
