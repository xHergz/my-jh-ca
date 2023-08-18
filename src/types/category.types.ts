import { Database } from "./supabase.types";

export type Category = Database["public"]["Tables"]["Category"]["Row"];
