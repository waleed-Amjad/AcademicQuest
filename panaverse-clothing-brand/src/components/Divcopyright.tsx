import { FunctionComponent } from "react";

export type DivcopyrightType = {
  className?: string;
};

const Divcopyright: FunctionComponent<DivcopyrightType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch border-dimgray border-t-[1px] border-solid overflow-x-auto flex flex-row items-start justify-between pt-[23px] pb-[25px] pl-32 pr-[262px] gap-5 text-left text-base text-dimgray font-sora mq800:pl-8 mq800:pr-[65px] mq800:box-border mq1125:pl-16 mq1125:pr-[131px] mq1125:box-border ${className}`}
    >
      <div className="relative leading-[22px]">
        Copyright © 2022 Dine Market
      </div>
      <div className="flex flex-row items-start justify-start">
        <div className="relative leading-[22px] inline-block min-w-[87.7px] shrink-0">{`Design by. `}</div>
        <b className="relative leading-[15px] text-gray-300 shrink-0 ml-[-0.2px]">
          Weird Design Studio
        </b>
      </div>
      <div className="flex flex-row items-start justify-start">
        <div className="relative leading-[22px] inline-block min-w-[75.1px] shrink-0">{`Code by. `}</div>
        <b className="relative leading-[15px] text-gray-300 shrink-0 ml-[-0.3px]">
          shabrina12 on github
        </b>
      </div>
    </div>
  );
};

export default Divcopyright;
