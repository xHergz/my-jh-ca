import clsx from "clsx";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { ThemeColor } from "@/types/theme.types";
import { getTextColor } from "@/utils/theme.utils";

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  color?: ThemeColor;
};

const Text: React.FunctionComponent<TextProps> = ({
  className,
  color = "primary",
  children,
  variant = "p",
}: TextProps): JSX.Element => {
  const textColor = getTextColor(color);

  const textClasses = clsx({
    [textColor]: true,
    "text-foreground": color === "primary",
    "text-foreground-muted": color === "secondary",
    "text-white": color === "light",
    "text-5xl": variant === "h1",
    "text-4xl": variant === "h2",
    "text-3xl": variant === "h3",
    "text-2xl": variant === "h4",
    "text-xl": variant === "h5",
    "text-lg": variant === "h6",
    "text-base": variant === "p",
    "text-sm": variant === "span",
  });
  const TextTag = variant;

  return (
    <TextTag className={twMerge(textClasses, className)}>{children}</TextTag>
  );
};

export default Text;
