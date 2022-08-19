import React, { HTMLAttributes, ReactNode, useRef } from "react";
import "../global.css";
import "./input.css";
interface PropTypes extends HTMLAttributes<HTMLInputElement> {
  type?: "outlined" | "fill";
  varient?: "underlined" | "boxed";
  label?: string;
  className?: string;
  placeholder?: string;
  containerClassName?: string;
  startComponent?: ReactNode;
  endComponent?: ReactNode;
  required?: boolean;
}
function Input({
  type,
  varient,
  className,
  placeholder,
  containerClassName,
  startComponent,
  endComponent,
  required,
  label,
  ...htmlAttributes
}: PropTypes) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      id="container-id"
      className={`${containerClassName}`}
    >
      <div>{startComponent}</div>
      <div>
        <label htmlFor="Input">
          {`${label || ""}`} {required ? <span>*</span> : null}
        </label>
        <input
          placeholder={placeholder}
          type={type || "text"}
          {...htmlAttributes}
          className={`${className}`}
          onFocus={() => {
            if (containerRef.current != null) {
              containerRef.current.style.boxShadow =
                "0 0 5px rgba(81, 203, 238, 1)";
            }
          }}
          onBlur={() => {
            if (containerRef.current != null) {
              containerRef.current.style.boxShadow =
                "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px";
            }
          }}
        />
      </div>
      <div>{endComponent}</div>
    </div>
  );
}
export default Input;
