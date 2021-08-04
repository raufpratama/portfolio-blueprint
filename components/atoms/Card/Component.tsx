import React, { ReactElement } from "react";
import { ICardProps } from "./interface";

const defaultStyle = "flex flex-col bg-card-main";

export default function Component(props: ICardProps): ReactElement {
  return (
    <div className={`${defaultStyle} px-6 py-4 rounded-md ${props.className}`}>
      {props.children}
    </div>
  );
}
