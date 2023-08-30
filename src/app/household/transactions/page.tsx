import { startOfYear } from "date-fns";

import Text from "@/components/common/text";
import { useServerClient } from "@/utils/server.utils";
import { getTransactions } from "@/utils/transaction.utils";

export default async function Transactions() {
  const supabase = useServerClient();
  const transactions = await getTransactions(
    supabase,
    startOfYear(new Date()),
    new Date()
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>2023 Transaction List</div>
      <table className="mt-4">
        <thead>
          <tr>
            <th>Transaction Date</th>
            <th>Category</th>
            <th>Subcategory</th>
            <th>Location</th>
            <th>Description</th>
            <th>Amount</th>
            <th>User</th>
            <th>Entry Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.Transaction_Id}>
              <td>{transaction.Transaction_Date}</td>
              <td>{(transaction.Subcategory as any).Category.Description}</td>
              <td>{(transaction.Subcategory as any).Description}</td>
              <td>{transaction.Location}</td>
              <td>{transaction.Description}</td>
              <td>
                {transaction.Debit_Amount ? (
                  <Text color="error">-{transaction.Debit_Amount}</Text>
                ) : (
                  <Text color="success">+{transaction.Credit_Amount}</Text>
                )}
              </td>
              <td>{transaction.User_Id}</td>
              <td>{transaction.Entry_Date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
