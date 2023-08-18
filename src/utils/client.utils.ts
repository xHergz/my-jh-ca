import { SupabaseClient } from "@supabase/supabase-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { Database } from "@/types/supabase.types";

export class ClientSupabase {
  private _client: SupabaseClient;
  constructor() {
    this._client = createClientComponentClient<Database>();
  }

  get client() {
    return this._client;
  }
}

export const useClient = () => {
  return new ClientSupabase();
};
