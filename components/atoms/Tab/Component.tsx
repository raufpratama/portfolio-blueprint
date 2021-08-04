import React, { ReactElement } from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import Typography from "../Typography";
import { ITabProps } from "./interface";

export default function Component(props: ITabProps): ReactElement {
  const windowSize = useWindowSize();

  const borderC = props.selected
    ? `${windowSize.mobile ? "border-b-secondary" : "border-l-secondary"}`
    : `${windowSize.mobile ? "border-b-main-light" : "border-l-secondary"}`;
  return (
    <div
      onClick={props.onClick ?? undefined}
      className={`flex py-4 pl-6 cursor-pointer ${
        !windowSize.mobile && "border-l-2"
      } mobile:border-b-2 mobile:px-10 mobile:py-2 mobile:items-center ${borderC}`}
    >
      <Typography
        text={props.companyName}
        textColor={props.selected ? "text-secondary" : "text-description-dark"}
        fontWeight="font-light"
        className="mobile:text-sm"
      />
    </div>
  );
}
