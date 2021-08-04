import React, { Fragment, ReactElement } from "react";
import Typography from "../../atoms/Typography";

import { IDrawerProps } from "./interface";

import NavHeaderData from "../NavHeader/content-data.json";
import Image from "next/image";
import Button from "../../atoms/Button";

export default function Component(props: IDrawerProps): ReactElement {
  return (
    <Fragment>
      <div
        className={`fixed ${
          !props.isOpen && "hidden"
        } opacity-0 h-full w-full z-30 backdrop-filter backdrop-blur transition duration-1000 ease-in-out ${
          props.isOpen && "transform opacity-100"
        }`}
      />
      <div
        className={`transform translate-x-80 m-0 fixed right-0 w-2/3 h-full bg-card-main transition duration-700 ease-in-out z-40 ${
          props.isOpen && "transform -translate-x-0"
        }`}
      >
        <div className="flex flex-col p-4 h-full space-y-8">
          <div className="flex-none self-end" onClick={props.onClose}>
            <Image src="/icons/close-fill.svg" width="30" height="30" alt="close-button" />
          </div>
          <div className="flex-grow flex flex-col space-y-6 self-center">
            {NavHeaderData.indicator?.map((data) => (
              <Fragment key={data.id}>
                <div
                  onClick={() => {
                    props.onClose?.();
                    const id = document.getElementById(data.target);
                    id?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  <Typography
                    text={data.id}
                    textColor="text-secondary"
                    textAlign="text-center"
                    fontWeight="font-light"
                    fontSize="text-sm"
                  />
                  <Typography
                    text={data.title}
                    textColor="text-description"
                    textAlign="text-center"
                    fontWeight="font-light"
                    fontSize="text-sm"
                  />
                </div>
              </Fragment>
            ))}

            <a href="CV_RAUF_JKT.pdf" target="_blank">
              <Button label="Resume" color="secondary" type="outline" />
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
