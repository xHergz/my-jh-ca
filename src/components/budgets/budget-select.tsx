"use client";

import { useState } from "react";

import Select, { SelectOption } from "../common/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Budget } from "@/types/budget.types";

export type BudgetSelectProps = {
  budgets: Pick<Budget, "Budget_Id" | "Name">[];
  initialBudgetId: string;
};

const BudgetSelect: React.FunctionComponent<BudgetSelectProps> = ({
  budgets,
  initialBudgetId,
}: BudgetSelectProps): JSX.Element => {
  const pathname = usePathname();
  const params = useSearchParams();
  const router = useRouter();
  const [currentBudgetId, setCurrentBudgetId] =
    useState<string>(initialBudgetId);

  const updateBudget = (newBudgetId: string) => {
    setCurrentBudgetId(newBudgetId);
    const paramString = params.keys.length > 0 ? `?${params.toString()}` : "";
    router.push(`${pathname}/${newBudgetId}${paramString}`);
  };

  return (
    <div className="flex gap-2">
      <Select onChange={updateBudget} defaultValue={initialBudgetId}>
        {budgets.map((budget) => (
          <SelectOption key={budget.Budget_Id} value={budget.Budget_Id}>
            {budget.Name}
          </SelectOption>
        ))}
      </Select>
    </div>
  );
};

export default BudgetSelect;
