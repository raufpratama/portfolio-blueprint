import React, { ReactElement } from "react";
import { ITronProps } from "./interface";
import Image from "next/image";
import useWindowSize from "../../../hooks/useWindowSize";
import Typography from "../Typography";

export default function Component(props: ITronProps): ReactElement {
  const windowSize = useWindowSize();
  return (
    <div className="flex relative items-center">
      <div
        className={`absolute bg-main bg-opacity-80 w-full h-full rounded-sm ${
          !windowSize.mobile && "transition duration-700 ease-out transform hover:bg-opacity-0"
        } z-10`}
      >
        {windowSize.mobile && (
          <div className="flex flex-col space-y-8 justify-center px-4 py-4 h-full">
            <div>
              <Typography
                text="Featured Project"
                textColor="text-secondary"
                fontSize="text-sm"
                fontWeight="font-light"
              />
              <Typography
                text={props.projectName}
                textColor="text-secondary"
                fontSize="text-lg"
                fontWeight="font-bold"
              />
            </div>
            <div>
              <Typography
                text={props.description}
                textColor="text-description"
                fontSize="text-sm"
                fontWeight="font-light"
              />
            </div>
            <div className="flex space-x-4">
              {props.libs?.map((lib: ITronProps) => (
                <div key={lib.id}>
                  <Image src={lib.libPic} width="20" height="20" alt={lib.alt} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Image
        className="object-cover rounded-sm"
        width={!windowSize.mobile ? "450" : "600"}
        height={!windowSize.mobile ? "280" : "600"}
        src={props.pic}
        alt={props.alt}
      />
    </div>
  );
}
