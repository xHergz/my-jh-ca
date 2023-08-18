import Text from "@/components/common/text";
import TransactionForm from "@/components/transactions/transaction-form";
import { getCategories } from "@/utils/category.utils";
import { getSubcategories } from "@/utils/subcategory.utils";
import { useServerClient } from "@/utils/server.utils";
import { getRecentTransactions } from "@/utils/transaction.utils";

export default async function NewTransaction() {
  const supabase = useServerClient();
  const categories = await getCategories(supabase);
  const subcategories = await getSubcategories(supabase);
  const last10Transactions = await getRecentTransactions(supabase);

  return (
    <main className="container mx-auto p-6">
      <div>New Transaction</div>
      <TransactionForm categories={categories} subcategories={subcategories} />
      <table className="mt-4">
        <thead>
          <tr>
            <th>Transaction Date</th>
            <th>Category</th>
            <th>Subcategory</th>
            <th>Location</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Entry Date</th>
          </tr>
        </thead>
        <tbody>
          {last10Transactions.map((transaction) => (
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
              <td>{transaction.Entry_Date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
