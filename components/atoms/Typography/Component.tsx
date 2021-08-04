import React from "react";
import { ITypography } from "./interface";

const Component: React.FC<ITypography> = (props) => {
  return (
    <div>
      <p
        onClick={props.onClick}
        className={`${props.fontSize} ${props.responsiveFontSize} ${props.fontWeight} ${
          props.fontFamily
        } ${props.letterSpacing} 
        ${props.fontVariant} ${props.lineHeight} ${props.listType} ${props.listPosition} ${
          props.placeholderColor
        } 
        ${props.placeholderOpacity} ${props.textAlign} ${props.textColor} ${props.textOpacity} ${
          props.textDecoration
        } 
        ${props.textTransform} ${props.verticalAlign} ${props.whitespace} ${props.wordBreak} ${
          props.clickable ? "cursor-pointer" : ""
        } ${props.className} overflow-ellipsis`}
      >
        {props.text}
      </p>
    </div>
  );
};

export default Component;
