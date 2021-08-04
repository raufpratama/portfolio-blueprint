import { ButtonHTMLAttributes } from "react";

export type IButtonColorType =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "danger"
  | "warning"
  | "disabled";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: IButtonColorType;
  type?: "outline" | "filled";
  width?: "full" | "auto" | string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  label?: string;
  loading?: boolean;
  fullStrecth?: boolean;
}
