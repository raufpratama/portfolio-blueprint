import React, { ReactElement, useEffect, useState } from "react";
import { INavHeaderProps } from "./interface";

import Image from "next/image";
import PageIndicator from "../../molecules/PageIndicator";
import useWindowSize from "../../../hooks/useWindowSize";

const transition = "transform -translate-y-20";

export default function Component(props: INavHeaderProps): ReactElement {
  const [state, setstate] = useState({ scrollTo: "", Ycoordinate: 0 });
  const windowSize = useWindowSize();

  useEffect(() => {
    const change = () => {
      setstate((prev) => ({
        ...prev,
        Ycoordinate: window.scrollY,
        scrollTo: prev.Ycoordinate > window.scrollY ? "top" : "down"
      }));
    };
    window.addEventListener("scroll", change);
    return () => {
      window.removeEventListener("scroll", change);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between w-full items-center px-8 py-2 bg-main bg-opacity-95 fixed z-40 shadow-lg mobile:py-1 transition duration-700 ease-in-out mobile:shadow-none ${
        state.scrollTo === "down" && transition
      }`}
    >
      <Image
        className="transition duration-500 ease-in-out opacity-0 transform opacity-100"
        src="/icons/logo.svg"
        width={50}
        height={50}
        alt="Rauf. logo"
      />
      {windowSize.mobile ? (
        <div onClick={props.onClick}>
          <Image width="25" height="25" src="/icons/burger-menu.svg" alt="burger-menu.svg" />
        </div>
      ) : (
        <PageIndicator indicator={props.indicator?.indicator} />
      )}
    </nav>
  );
}
