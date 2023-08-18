import { SupabaseDataClient } from "@/utils/server.utils";

export const getSubcategories = async (supabase: SupabaseDataClient) => {
  const { data: categories, error } = await supabase.client
    .from("Subcategory")
    .select("Subcategory_Id, Category_Id, Description");

  if (error) throw error;

  return categories;
};
