import React, { ReactElement, useEffect, useState } from "react";
import Button from "../../atoms/Button";
import Typography from "../../atoms/Typography";
import contentData from "./content-data.json";

const transition = "transition duration-500 ease-out";
const fadeIn = "transform translate-y-2 opacity-100";

function Component(): ReactElement {
  const [onLoad, setOnLoad] = useState<boolean>();

  useEffect(() => {
    setTimeout(() => {
      setOnLoad(true);
    }, 800);
  }, []);

  return (
    <div className="flex flex-col w-4/5 h-screen m-auto justify-center">
      <div className={`${transition} delay-150 opacity-0 mb-2 mobile:mb-0 ${onLoad && fadeIn}`}>
        <Typography text={contentData.greet} textColor="text-secondary" />
      </div>
      <div className="flex flex-col space-y-2 mt-4 mb-6">
        <Typography
          text={contentData.name}
          textColor="text-description"
          fontWeight="font-bold"
          fontSize="text-6xl"
          className={`mobile:text-3xl ${transition} delay-250 opacity-0 ${onLoad && fadeIn}`}
        />
        <Typography
          text={contentData.addition}
          textColor="text-description-dark"
          fontWeight="font-bold"
          fontSize="text-6xl"
          className={`mobile:text-3xl ${transition} delay-350 mb-2 opacity-0 ${onLoad && fadeIn} `}
        />
      </div>
      <div
        className={`mb-2 opacity-0 w-2/3 mobile:w-full ${transition} delay-450 ${onLoad && fadeIn}`}
      >
        <span className="text-description-dark font-light leading-relaxed mobile:text-sm">
          {contentData.description}{" "}
          <span className="text-secondary cursor-pointer un">
            <a href={contentData.companyLinkTo} target="_blank" rel="noreferrer">
              {contentData.company}
            </a>
          </span>
        </span>
      </div>
      <div
        className={`${transition} delay-550 opacity-0 ${
          onLoad && "transform opacity-100 translate-y-12"
        }`}
      >
        <a href="mailto:pratamarauf8@gmail.com">
          <Button label="Get In Touch" type="outline" color="secondary" />
        </a>
      </div>
    </div>
  );
}

export default React.memo(Component);
