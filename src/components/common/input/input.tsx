import clsx from "clsx";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange: (value: string) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const inputClasses = clsx({
      ["flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"]:
        true,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      props.onChange(e.target.value);
    };

    return (
      <input
        type={type}
        className={twMerge(inputClasses, className)}
        ref={ref}
        {...props}
        onChange={handleChange}
      />
    );
  }
);
Input.displayName = "Input";

export default Input;
