import React, { ReactElement } from "react";
import { IJobDescProps } from "./interface";

const positionStyle = "font-medium text-lg text-description mobile:text-base";
const companyStyle = "font-medium text-secondary";
const experienceTimeStyle = "font-light text-description-dark mobile:text-sm";
const descStyle = "font-light text-description-dark";

export default function Component(props: IJobDescProps): ReactElement {
  return (
    <div className="w-full">
      <span className={positionStyle}>
        {props.position} <span className={companyStyle}>@ {props.name}</span>
      </span>

      <div>
        <span className={experienceTimeStyle}>
          {props.from} - {props.until} - {props.status}
        </span>
      </div>

      <div className="ml-4 mt-4">
        <ul
          className={`list-disc list-disc-secondary list-outside space-y-4 text-left ${descStyle}`}
        >
          {props.descriptions?.map((description) => (
            <li className="ml-3 mobile:text-sm" key={description.id}>
              {description.item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
