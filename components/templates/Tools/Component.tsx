import React, { ReactElement, useEffect, useRef, useState } from "react";
import contentData from "./content-data.json";
import Tool from "../../molecules/Tool";
import Button from "../../atoms/Button";
import SectionIndicator from "../../atoms/SectionIndicator";

const divTransition =
  "transition duration-500 ease-out delay-300 transform -translate-y-4 opacity-100";

function Component(): ReactElement {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [onLoad, setOnLoad] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const topPosition = ref.current ? ref.current.getBoundingClientRect().top : 0;
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      if (topPosition < scrollPosition) {
        setOnLoad(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderTools = (): ReactElement[] => {
    const tools = [];
    for (let i = 0; i < contentData.tools.length; i++) {
      tools.push(
        <div
          className={`opacity-0 transition duration-1200 ease-out ${contentData.tools[i].delay} ${
            onLoad && "transform opacity-100"
          }`}
        >
          <Tool {...contentData.tools[i]} />
        </div>
      );
      if (!showMore && i === 5) {
        break;
      }
    }
    return tools;
  };

  return (
    <div
      ref={ref}
      className={`flex flex-col space-y-10 opacity-0 w-2/3 m-auto mobile:w-full mobile:px-4 ${
        onLoad && divTransition
      }`}
    >
      <SectionIndicator number="03." sectionTitle="Languages & Tools" />
      <div className="grid grid-cols-3 grid-rows-auto gap-x-2 gap-y-2 mobile:grid-cols-1 mobile:grid-flow-row">
        {renderTools()}
      </div>
      <div className="m-auto">
        <Button
          label={showMore ? "Show Less" : "Show More"}
          type="outline"
          color="secondary"
          onClick={() => setShowMore(!showMore)}
        />
      </div>
    </div>
  );
}

export default React.memo(Component);
