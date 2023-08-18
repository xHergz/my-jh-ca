import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Database } from "@/types/supabase.types";

type SupabaseClientType = "server" | "super";

export class SupabaseDataClient {
  private _client: SupabaseClient;
  constructor(type: SupabaseClientType) {
    switch (type) {
      case "server":
        const cookieStore = cookies();
        this._client = createServerComponentClient<Database>({
          cookies: () => cookieStore,
        });
        break;
      case "super":
        this._client = createClient<Database>(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.SUPABASE_SERVICE_ROLE_KEY!,
          {
            auth: { persistSession: false },
          }
        );
        break;
    }
  }

  get client() {
    return this._client;
  }
}

export const useServerClient = () => {
  return new SupabaseDataClient("server");
};

export const useSuperClient = () => {
  return new SupabaseDataClient("super");
};
