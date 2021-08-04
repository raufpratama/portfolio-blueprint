import React, { ReactElement } from "react";
import Image from "next/image";
import Card from "../../atoms/Card";
import Typography from "../../atoms/Typography";
import { IProjectDescProps } from "./interface";

const pos = (param: string) => {
  return param === "left" ? "text-left" : "text-right";
};
const toolPos = (param: string) => {
  return param === "left" ? "self-start" : "self-end";
};

export default function Component(props: IProjectDescProps): ReactElement {
  return (
    <div
      className={`flex flex-col space-y-6 w-1/2 ${
        props.position === "left" ? "-mr-4" : "-ml-4"
      } z-20`}
    >
      <div className="space-y-1">
        <Typography
          text={props.type}
          fontSize="text-sm"
          textAlign={pos(props.position)}
          fontWeight="font-light"
          textColor="text-secondary"
        />
        <Typography
          text={props.projectName}
          textAlign={pos(props.position)}
          fontWeight="font-semibold"
          fontSize="text-lg"
          textColor="text-description"
        />
      </div>

      <Card className="shadow-md">
        <Typography
          text={props.description}
          textColor="text-description"
          textAlign={pos(props.position)}
          fontSize="text-sm"
          fontWeight="font-light"
        />
      </Card>

      <div className={`grid grid-flow-col gap-x-6 ${toolPos(props.position)}`}>
        {props.libs?.map((lib) => (
          <Image key={lib.id} width="20" height="20" src={lib.libPic} alt={lib.alt} />
        ))}
      </div>
    </div>
  );
}
