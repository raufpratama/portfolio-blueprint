import React, { ReactElement, useEffect, useState } from "react";
import Image from "next/image";

import socialMedia from "./content-data.json";

import useWindowSize from "../../../hooks/useWindowSize";

const transition = "transition duration-1000 delay-1850 ease-in-out transform opacity-100";

export default function Component(): ReactElement {
  const [onLoad, setOnLoad] = useState<boolean>(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    setOnLoad(true);
  }, []);

  return (
    <div
      className={`${windowSize.mobile ? "block" : "fixed"} bottom-0 mobile:mb-4 opacity-0  ${
        onLoad && transition
      }`}
    >
      <div className="flex px-16 justify-between">
        <div className="flex flex-col space-y-6 items-center mobile:flex-row mobile:space-x-8 mobile:space-y-0">
          {socialMedia.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer transition duration-500 ease-out transform hover:-translate-y-2  hover:scale-125"
            >
              <a href={item.linkTo} target="_blank" rel="noreferrer">
                <Image src={item.src} width={20} height={20} alt="test" className="object-bottom" />
              </a>
            </div>
          ))}
          <div className="h-20 border-l border-main-light mt-24 mobile:hidden" />
        </div>
      </div>
    </div>
  );
}
