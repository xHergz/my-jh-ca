export const THEME_COLORS = [
  "primary",
  "secondary",
  "warning",
  "error",
  "success",
  "light",
] as const;

export type ThemeColor = (typeof THEME_COLORS)[number];
