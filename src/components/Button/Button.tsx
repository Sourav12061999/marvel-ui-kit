import React, { HTMLAttributes, ReactNode } from "react";
import "../global.css";
import "./button.css";
interface PropTypes extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  type?: "outlined" | "fill";
  color?: "primary" | "secondary" | "danger" | "gradiend" | "warning";
  className?: string;
}
function Button({
  children,
  color,
  type,
  className,
  ...htmlAttributes
}: PropTypes) {
  return (
    <button {...htmlAttributes} className={`${className} ${type || "fill"} ${color || "primary"}`}>
      {children || ""}
    </button>
  );
}
export default Button;
