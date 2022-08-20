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
  isError?: boolean;
  errorMsg?: string;
  ClassName?:ClassNameTypes;
}

interface ClassNameTypes {
  inputClassName?:string;
  containerClassName?:string;
  inputContainerClassName?:string;
  startComponentClassName?:string;
  endComponentClassName?:string;
  errorMSGClassName?:string;
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
  isError,
  errorMsg,
  ...htmlAttributes
}: PropTypes) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div id="container-id" className={`${containerClassName}`}>
      {label ? <label htmlFor="Input">{label}</label> : null}
      {required ? <span>*</span> : null}
      <div ref={containerRef}>
        {startComponent && (
          <div data-component-type="start">{startComponent}</div>
        )}
        <div className="input-container">
          <input
            placeholder={placeholder}
            type={type || "text"}
            {...htmlAttributes}
            className={`${className}`}
            onFocus={() => {
              if (containerRef.current != null && !isError) {
                containerRef.current.style.boxShadow =
                  "0 0 5px rgba(81, 203, 238, 1)";
              } else if (containerRef.current != null && isError) {
                containerRef.current.style.boxShadow = "0 0 5px #f44336";
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
        {endComponent && <div data-component-type="end">{endComponent}</div>}
      </div>
      {isError && <small>{errorMsg}</small>}
    </div>
  );
}
export default Input;
