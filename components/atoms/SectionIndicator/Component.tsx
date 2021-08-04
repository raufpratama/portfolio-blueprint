import React, { ReactElement } from "react";
import { ISectionIndicator } from "./interface";

import Typography from "../Typography";

export default function Component(props: ISectionIndicator): ReactElement {
  return (
    <div className="flex items-center space-x-3">
      <Typography
        text={props.number}
        textColor="text-secondary"
        fontSize="text-xl"
        className="mobile:text-lg"
      />
      <Typography
        text={props.sectionTitle}
        textColor="text-description"
        fontSize="text-2xl"
        fontWeight="font-medium"
        className="mobile:text-xl"
      />
    </div>
  );
}
