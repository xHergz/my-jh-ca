import clsx from "clsx";
import { PropsWithChildren, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type SelectOptionsProps = PropsWithChildren<{
  value: string;
  selected?: boolean;
}>;

const SelectOption: React.FC<SelectOptionsProps> = ({
  children,
  value,
  selected,
}) => {
  return (
    <option key={value} value={value} selected={selected}>
      {children}
    </option>
  );
};
SelectOption.displayName = "SelectOption";

type SelectProps = Omit<
  React.InputHTMLAttributes<HTMLSelectElement>,
  "onChange"
> &
  PropsWithChildren<{
    onChange: (value: string) => void;
  }>;

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, className, onChange, ...props }, ref) => {
    const inputClasses = clsx({
      ["bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"]:
        true,
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(e.target.value);
    };

    return (
      <select
        className={twMerge(inputClasses, className)}
        ref={ref}
        {...props}
        onChange={handleChange}
      >
        {children}
      </select>
    );
  }
);
Select.displayName = "Select";

export type { SelectOptionsProps, SelectProps };

export { SelectOption };

export default Select;
