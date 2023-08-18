import { SupabaseDataClient } from "@/utils/server.utils";

export const getCategories = async (supabase: SupabaseDataClient) => {
  const { data: categories, error } = await supabase.client
    .from("Category")
    .select("Category_Id, Description");

  if (error) throw error;

  return categories;
};
