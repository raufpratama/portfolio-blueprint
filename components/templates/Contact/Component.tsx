import React, { ReactElement, useEffect, useRef, useState } from "react";
import Button from "../../atoms/Button";
import SectionIndicator from "../../atoms/SectionIndicator";
import Typography from "../../atoms/Typography";

const transition =
  "transition duration-1000 ease-in-out delay-300 transform -translate-y-8 opacity-100";

function Component(): ReactElement {
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

  return (
    <div
      ref={ref}
      className={`flex flex-col w-1/2 m-auto mt-10 opacity-0 mobile:w-full mobile:px-4 ${
        onLoad && transition
      }`}
    >
      <SectionIndicator number="05. " sectionTitle="Get in touch" />

      <div className="flex flex-col mt-12 w-2/3 space-y-10 self-center mobile:w-full">
        <Typography
          text="What's Next?"
          fontSize="text-3xl"
          textAlign="text-center"
          fontWeight="font-semibold"
          textColor="text-description"
        />
        <Typography
          text="I’m currently active for opportunity. If you feel interested to know more about me, hit the “Say Hello” button below."
          textAlign="text-center"
          fontWeight="font-light"
          textColor="text-description-dark"
        />
      </div>

      <div className="self-center mt-20">
        <a href="mailto:pratamarauf8@gmail.com">
          <Button type="outline" label="Say Hello" color="secondary" />
        </a>
      </div>
    </div>
  );
}

export default React.memo(Component);
