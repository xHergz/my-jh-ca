"use client";

import { useState } from "react";

import Button from "@/components/common/button";
import Select, { SelectOption } from "../common/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const MONTHS = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

const YEARS = [
  { value: "2019", label: "2019" },
  { value: "2020", label: "2020" },
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
  { value: "2023", label: "2023" },
  { value: "2024", label: "2024" },
];

export type MonthInputProps = {
  initialMonth: string;
  initialYear: string;
};

const MonthInput: React.FunctionComponent<MonthInputProps> = ({
  initialMonth,
  initialYear,
}: MonthInputProps): JSX.Element => {
  const pathname = usePathname();
  const params = useSearchParams();
  const router = useRouter();
  const [currentMonth, setCurrentMonth] = useState<string>(initialMonth);
  const [currentYear, setCurrentYear] = useState<string>(initialYear);

  const updateDate = () => {
    const newParams = new URLSearchParams(params);
    newParams.set("month", currentMonth);
    newParams.set("year", currentYear);
    router.push(`${pathname}?${newParams.toString()}`);
  };

  return (
    <div className="flex gap-2">
      <Select onChange={setCurrentMonth} defaultValue={initialMonth}>
        {MONTHS.map((month) => (
          <SelectOption key={month.value} value={month.value}>
            {month.label}
          </SelectOption>
        ))}
      </Select>
      <Select onChange={setCurrentYear} defaultValue={initialYear}>
        {YEARS.map((year) => (
          <SelectOption
            key={year.value}
            value={year.value}
            selected={year.value === currentYear}
          >
            {year.label}
          </SelectOption>
        ))}
      </Select>
      <Button onClick={updateDate}>GO</Button>
    </div>
  );
};

export default MonthInput;
