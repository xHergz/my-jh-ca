import { endOfMonth, startOfMonth } from "date-fns";

import { useServerClient } from "@/utils/server.utils";
import { getTransactions } from "@/utils/transaction.utils";

export default async function Budget() {
  const supabase = useServerClient();
  const transactions = await getTransactions(
    supabase,
    startOfMonth(new Date()),
    endOfMonth(new Date())
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Budget</div>
    </main>
  );
}
