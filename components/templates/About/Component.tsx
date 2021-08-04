import React, { ReactElement, useEffect, useRef, useState } from "react";
import SectionIndicator from "../../atoms/SectionIndicator";
import Typography from "../../atoms/Typography";
import contentData from "./content-data.json";

const transition = "transform -translate-x-4 -translate-y-3";
const divTransition =
  "transition duration-1000 ease-in-out delay-300 transform -translate-y-8 opacity-100";

function Component(): ReactElement {
  const [onHoverImg, setHoverImage] = useState<boolean>(false);
  const [onLoad, setOnLoad] = useState<boolean>(false);
  const ref = useRef(null);

  useEffect(() => {
    const topPosition = ref.current.getBoundingClientRect().top;
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      if (topPosition < scrollPosition) {
        setOnLoad(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`flex m-auto justify-center opacity-0 items-center w-1/2 space-x-10 mt-16 mobile:flex-col mobile:w-full mobile:px-4 mobile:space-y-8 ${
        onLoad && divTransition
      }`}
    >
      <div className="flex flex-col">
        <SectionIndicator number="01. " sectionTitle="About Me" />
        <div className="flex flex-col space-y-4 mt-8">
          {contentData.descriptions.map((data) => (
            <Typography
              key={data.id}
              text={data.paragraph}
              textColor="text-description-dark"
              fontWeight="font-light"
              className="mobile:text-sm"
            />
          ))}
        </div>
      </div>
      <div className="mobile:self-start relative top-5">
        <div
          onMouseEnter={() => setHoverImage(true)}
          onMouseLeave={() => setHoverImage(false)}
          className="w-60 h-60 relative z-10"
        >
          <div className="absolute bg-main-light bg-opacity-75 w-full h-full rounded-md transition duration-700 ease-out transform hover:bg-opacity-0"></div>
          <img
            className="object-cover w-full h-full object-bottom rounded-md"
            src={contentData.imagepath}
            alt="hero"
          />
        </div>
        <div
          className={`transition duration-500 ease-in-out border border-2 rounded-md border-secondary h-60 w-full absolute top-5 left-6 z-5 ${
            onHoverImg && transition
          }`}
        ></div>
        {/*<Image src={contentData.imagepath} className="object-cover object-bottom rounded-md" width={1000} height={1000} alt="hero"/>*/}
      </div>
    </div>
  );
}

export default React.memo(Component);
