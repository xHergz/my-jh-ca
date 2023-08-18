import { ThemeColor } from "../types/theme.types";

// Important: Tailwind does some treeshaking/smart stuff to not include unused styles.
// This is why we have a getMainColor and getBackgroundColor. You could theoretically do
// `bg-${getMainColor('primary')}` but if bg-primary-700 is not somewhere else tailwind
// won't pick it up in the build. I could just list the strings somewhere but being more
// explicit seems less hacky.

export const getMainColor = (color: ThemeColor): string => {
  switch (color) {
    case "secondary":
      return "secondary-700";
    case "light":
      return "white";
    case "success":
      return "green-600";
    case "warning":
      return "yellow-400";
    case "error":
      return "red-600";
    case "primary":
    default:
      return "primary-700";
  }
};

export const getAlternateColor = (color: ThemeColor): string => {
  switch (color) {
    case "secondary":
    case "light":
    case "success":
    case "warning":
    case "error":
    case "primary":
    default:
      return "white";
  }
};

export const getBackgroundColor = (
  color: ThemeColor,
  inverted: boolean = false
): string => {
  switch (color) {
    case "secondary":
      return inverted ? "bg-white" : "bg-secondary-700";
    case "light":
      return inverted ? "bg-transparent" : "bg-white";
    case "success":
      return inverted ? "bg-white" : "bg-green-600";
    case "warning":
      return inverted ? "bg-black" : "bg-yellow-400";
    case "error":
      return inverted ? "bg-white" : "bg-red-600";
    case "primary":
    default:
      return inverted ? "bg-white" : "bg-primary-700";
  }
};

export const getBorderColor = (color: ThemeColor): string => {
  switch (color) {
    case "secondary":
      return "border-secondary-700";
    case "light":
      return "border-white";
    case "success":
      return "border-green-600";
    case "warning":
      return "border-yellow-400";
    case "error":
      return "border-red-600";
    case "primary":
    default:
      return "border-primary-700";
  }
};

export const getTextColor = (
  color: ThemeColor,
  inverted: boolean = false
): string => {
  switch (color) {
    case "secondary":
      return inverted ? "text-white" : "text-secondary-700";
    case "light":
      return inverted ? "text-black" : "text-white";
    case "success":
      return inverted ? "text-white" : "text-green-600";
    case "warning":
      return inverted ? "text-black" : "text-yellow-400";
    case "error":
      return inverted ? "text-white" : "text-red-600";
    case "primary":
    default:
      return inverted ? "text-white" : "text-primary-700";
  }
};
