import React, { ReactElement, useEffect, useState } from "react";
import Button from "../../atoms/Button";
import Typography from "../../atoms/Typography";
import { IPageIndicatorProps } from "./interface";

const transition = "transform translate-y-2 opacity-100";

export default function Component(props: IPageIndicatorProps): ReactElement {
  const [onLoad, setOnload] = useState<boolean>(false);

  useEffect(() => {
    setOnload(true);
  }, []);

  return (
    <div className="flex items-center space-x-6">
      {props.indicator?.map((item) => (
        //<Link key={item.id} href={item.target} passHref>
        <div
          className={`flex opacity-0 mb-4 cursor-pointer items-center space-x-2 transition duration-500 ease-out ${
            item.delay
          } ${onLoad && transition}`}
          key={item.id}
          onClick={() => {
            const id = document.getElementById(item.target);
            id?.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          <Typography text={item.id} textColor="text-secondary" fontSize="text-xs" />
          <Typography
            text={item.title}
            textColor="text-description"
            fontSize="text-sm"
            className="transition duration-500 ease-out transform hover:text-secondary"
          />
        </div>
        //</Link>
      ))}
      <div
        className={`transition duration-500 ease-in-out delay-500 opacity-0 mb-4 ${
          onLoad && transition
        }`}
      >
        <a href="CV_RAUF_JKT.pdf" target="_blank">
          <Button label="Resume" color="secondary" type="outline" />
        </a>
      </div>
    </div>
  );
}
