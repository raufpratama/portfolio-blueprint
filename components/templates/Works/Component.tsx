import React, { Fragment, ReactElement, useEffect, useRef, useState } from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import SectionIndicator from "../../atoms/SectionIndicator";
import Tron from "../../atoms/Tron";
import ProjectDesc from "../../organisms/ProjectDesc";
import contentData from "./content-data.json";

const transition = (delay: string) => {
  return `transition duration-1000 ease-in-out ${delay} transform -translate-y-5 opacity-100`;
};

function Component(): ReactElement {
  const [onLoad, setOnLoad] = useState<boolean>(false);
  const ref = useRef(null);
  const windowSize = useWindowSize();

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
      className="flex flex-col space-y-16 w-2/3 m-auto mobile:w-full mobile:px-4 mobile:space-y-8"
    >
      <SectionIndicator number="04. " sectionTitle="Works & Projects" />

      <div className="flex flex-col space-y-16 mobile:space-y-4">
        {contentData.projects?.map((project, index) => {
          return index % 2 === 0 ? (
            <div
              key={project.id}
              className={`flex items-center opacity-0 mobile:flex-col ${
                onLoad && transition(project.delay)
              }`}
            >
              <Fragment>
                <Tron {...project} />
                {!windowSize.mobile && <ProjectDesc position="right" {...project} />}
              </Fragment>
            </div>
          ) : (
            <div
              key={project.id}
              className={`flex items-center mt-6 opacity-0 mobile:mt-4 ${
                onLoad && transition(project.delay)
              }`}
            >
              <Fragment>
                {!windowSize.mobile && <ProjectDesc position="left" {...project} />}
                <Tron {...project} />
              </Fragment>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(Component);
