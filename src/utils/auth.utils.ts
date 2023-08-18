import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

import { useClient } from "@/utils/client.utils";

export const useAuth = () => {
  const supabase = useClient();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const session = supabase.client.auth.getSession().then(({ data }) => {
      setUser(data?.session?.user ?? null);
    });

    const { data: authListener } = supabase.client.auth.onAuthStateChange(
      async (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [supabase.client.auth]);

  return user;
};
