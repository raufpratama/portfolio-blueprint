import React from "react";
import { IButton, IButtonColorType } from "./interface";

const Component: React.FC<IButton> = (props) => {
  const outline = props.type === "outline";
  const color = {
    primary: `${outline ? "text-primary border border-primary" : "bg-primary text-white"}`,
    secondary: `${
      outline ? "text-secondary border border-secondary" : "bg-secondary text-textDefault"
    }`,
    success: `${outline ? "text-success border border-success" : "bg-success text-white"}`,
    info: `${outline ? "text-info border border-info" : "bg-info text-white"}`,
    warning: `${outline ? "text-warning border border-warning" : "bg-warning text-white"}`,
    danger: `${outline ? "text-danger" : "bg-danger text-white"}`
  };
  const pColor = props.disabled
    ? "bg-disabled text-gray-300"
    : props.color
    ? (color[props.color] as IButtonColorType)
    : outline
    ? "text-primary border border-primary"
    : "bg-primary text-white";
  return (
    <button
      onClick={props.onClick}
      className={`border-0 text-sm bg-opacity-0 bg-secondary ${pColor} rounded-md py-2.5 px-4 text-md ${
        props.fullStrecth ? "w-full" : props.width ?? ""
      } ${props.className} transform duration-500 ease-out transform hover:bg-opacity-40`}
      disabled={props.disabled}
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex w-full item-center">
          <span className="text-center w-full">{props.label}</span>
        </div>
        {props.endIcon && <span className="self-center">{props.endIcon}</span>}
      </div>
    </button>
  );
};

export default Component;
