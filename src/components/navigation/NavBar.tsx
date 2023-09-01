"use client";

import Link from "next/link";
import Text from "@/components/common/text";
import { useAuth } from "@/utils/auth.utils";

export type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = ({}): JSX.Element => {
  const currentUser = useAuth();
  console.log(currentUser);
  return (
    <section className="flex justify-between px-8 py-4">
      <Text variant="h3">my-jh-ca</Text>
      {currentUser ? (
        <nav className="flex gap-4">
          <Link href="/household/transactions">Transactions</Link>
          <Link href="/household/budgets">Budgets</Link>
        </nav>
      ) : (
        <nav className="flex gap-4">
          <Link href="/login">Login</Link>
        </nav>
      )}
    </section>
  );
};

export default NavBar;
