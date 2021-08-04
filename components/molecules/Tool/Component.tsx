import React, { ReactElement } from "react";
import Image from "next/image";
import { IToolProps } from "./interface";
import Typography from "../../atoms/Typography";
import Card from "../../atoms/Card";

export default function Component(props: IToolProps): ReactElement {
  return (
    <Card
      className={`h-full opacity-0 p-6 transition duration-1000 ease-out ${props.delay} transform opacity-100 mobile:p-10`}
    >
      <div className="flex justify-between">
        <Image width={60} height={60} src={props.logo ?? ""} alt="logo" />
        <Image
          width={20}
          height={20}
          src={"/icons/github.svg"}
          alt={props.githubLink ?? ""}
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-col mt-16 space-y-4">
        <Typography
          text={props.title}
          fontSize="text-lg"
          textColor="text-description"
          fontWeight="font-semibold"
        />
        <Typography text={props.description} fontSize="text-sm" textColor="text-description-dark" />
      </div>
    </Card>
  );
}
