import { BudgetItem } from "@/types/budget.types";
import { Progress } from "../shadcn/progress";
import { sumBy } from "lodash";
import Text from "@/components/common/text";

export type BudgetProgressProps = {
  data: BudgetItem[];
};

const BudgetProgress: React.FunctionComponent<BudgetProgressProps> = ({
  data,
}: BudgetProgressProps): JSX.Element => {
  const actualSum = Math.abs(sumBy(data, (item) => item.Actual_Amount));
  const budgetSum = Math.abs(sumBy(data, (item) => item.Budget_Amount));
  return (
    <div className="col-span-2">
      <Progress
        className="w-full h-4"
        value={Math.round((actualSum / budgetSum) * 100)}
      />
      <Text variant="h6" color="primary">
        ${actualSum.toFixed(2)} / ${budgetSum.toFixed(2)}
      </Text>
    </div>
  );
};

export default BudgetProgress;
