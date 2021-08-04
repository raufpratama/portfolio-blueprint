import React, { ReactElement, useEffect, useRef, useState } from "react";
import Jobdesc from "../../atoms/Jobdesc";
import SectionIndicator from "../../atoms/SectionIndicator";
import Tab from "../../atoms/Tab";
import contentData from "./content-data.json";

const divTransition =
  "transition duration-1000 ease-in-out delay-300 transform -translate-y-8 opacity-100";

function Component(): ReactElement {
  const [content] = useState<typeof contentData>(contentData);
  const [selected, setSelected] = useState<typeof contentData["companies"][0]>(
    contentData.companies[0]
  );
  const [onLoad, setOnLoad] = useState<boolean>(false);
  const [onSelect, setOnSelect] = useState<boolean>(true);
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

  useEffect(() => {
    setOnSelect(false);
    setTimeout(() => {
      setOnSelect(true);
    }, 300);
  }, [selected]);

  return (
    <div
      ref={ref}
      className={`flex flex-col space-y-6 opacity-0 w-1/2 m-auto mt-16 mobile:w-full mobile:px-4 ${
        onLoad && divTransition
      }`}
    >
      <SectionIndicator number="02." sectionTitle="Experience" />
      <div className="grid grid-flow-col w-full gap-x-10 mobile:grid-flow-row mobile:gap-y-5">
        <div className="mobile:flex overflow-x-scroll">
          {content.companies?.map((company) => (
            <Tab
              key={company.id}
              onClick={() => setSelected(company)}
              companyName={company.name}
              selected={company.id === selected.id}
            />
          ))}
        </div>

        <div
          className={`mt-2 opacity-0 ${
            onSelect && "transition duration-300 ease-out transform opacity-100"
          }`}
        >
          <Jobdesc {...selected} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Component);
