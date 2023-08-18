import { Database } from "./supabase.types";

export type Transaction = Database["public"]["Tables"]["Transaction"]["Row"];
