import clsx from "clsx";
import { isNil } from "lodash";
import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { ThemeColor } from "../../../types/theme.types";
import {
  getBackgroundColor,
  getBorderColor,
  getTextColor,
} from "../../../utils/theme.utils";

export type ButtonVariant = "contained" | "outlined" | "text" | "auxiliary";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: ThemeColor;
  variant?: ButtonVariant;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  rounded?: boolean;
  size?: ButtonSize;
};

const Button: React.FC<ButtonProps> = (props): JSX.Element | null => {
  const {
    children,
    className,
    color = "primary",
    disabled,
    hidden,
    leftIcon,
    rightIcon,
    rounded,
    size,
    variant = "contained",
  } = props;
  const backgroundColor = getBackgroundColor(color, variant === "outlined");
  const borderColor = getBorderColor(color);
  const textColor = getTextColor(color, variant === "contained");

  const buttonClasses = clsx({
    ["font-semibold uppercase flex items-center gap-2.5 hover:bg-opacity-50"]:
      true,
    [`border ${borderColor}`]:
      variant === "contained" || variant === "outlined",
    [backgroundColor]: variant === "contained",
    ["bg-transparent"]: variant !== "contained",
    ["py-3 px-7"]: variant !== "auxiliary",
    ["rounded"]: rounded,
    ["text-base"]: isNil(size) || size === "lg",
    ["text-xs"]: size === "sm",
    ["opacity-50 cursor-not-allowed"]: disabled,
    [textColor]: true,
  });

  return hidden ? null : (
    <button {...props} className={twMerge(buttonClasses, className)}>
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </button>
  );
};

export default Button;
