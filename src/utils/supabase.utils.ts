import { startCase } from "lodash";

export const startSnakeCase = (str: string) => {
  return startCase(str.replace("_", " ")).replace(" ", "_");
};

export const formatSupabaseResults = (results: Object[]) => {
  return results.map((result) => {
    const formattedResult: Record<string, any> = {};
    for (const [key, value] of Object.entries(result)) {
      formattedResult[startSnakeCase(key)] = value;
    }
    return formattedResult;
  });
};
