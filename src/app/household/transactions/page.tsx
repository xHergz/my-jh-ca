import { startOfYear } from "date-fns";

import Text from "@/components/common/text";
import { useServerClient } from "@/utils/server.utils";
import { getTransactions } from "@/utils/transaction.utils";
import Button from "@/components/common/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/table";
import Image from "next/image";

export const JUSTINS_ID = "fec8d3fb-48e3-4a23-be7b-d0a3751fb312";

export default async function Transactions() {
  const supabase = useServerClient();
  const transactions = await getTransactions(
    supabase,
    startOfYear(new Date()),
    new Date()
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <div className="flex w-full justify-between items-center">
        <Text variant="h3">2023 Transaction List</Text>
        <Link href="/household/transactions/new">
          <Button variant="contained">+ Add Transaction</Button>
        </Link>
      </div>
      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>Transaction Date</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Subcategory</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Entry Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.Transaction_Id}>
              <TableCell>
                {transaction.User_Id === JUSTINS_ID ? (
                  <Image
                    className="bg-white rounded-full"
                    src="/assets/male-icon.png"
                    alt="male-icon"
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    src="/assets/female-icon.png"
                    alt="female icon"
                    width={24}
                    height={24}
                  />
                )}
              </TableCell>
              <TableCell>{transaction.Transaction_Date}</TableCell>
              <TableCell>
                {(transaction.Subcategory as any).Category.Description}
              </TableCell>
              <TableCell>
                {(transaction.Subcategory as any).Description}
              </TableCell>
              <TableCell>
                {transaction.Debit_Amount ? (
                  <Text className="text-red-600" color="error">
                    -${transaction.Debit_Amount.toFixed(2)}
                  </Text>
                ) : (
                  <Text className="text-green-600" color="success">
                    +${transaction.Credit_Amount.toFixed(2)}
                  </Text>
                )}
              </TableCell>
              <TableCell>{transaction.Location}</TableCell>
              <TableCell>{transaction.Description}</TableCell>
              <TableCell>{transaction.Entry_Date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
