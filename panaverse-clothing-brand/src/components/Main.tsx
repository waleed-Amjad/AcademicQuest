import { FunctionComponent } from "react";

export type MainType = {
  className?: string;
};

const Main: FunctionComponent<MainType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5 box-border max-w-full text-left text-base-8 text-gray-300 font-sora ${className}`}
    >
      <div className="w-[1664px] flex flex-row items-start justify-start flex-wrap content-start gap-[176.1px] max-w-full mq450:gap-[22px] mq800:gap-11 mq1350:gap-[88px]">
        <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[482px] max-w-full mq800:min-w-full">
          <div className="self-stretch flex flex-col items-end justify-start gap-[76.5px] max-w-full mq450:gap-[19px] mq800:gap-[38px]">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-6 box-border max-w-full">
              <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-5">
                <img
                  className="h-[25px] w-[140px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/link--image@2x.png"
                />
                <nav className="m-0 flex flex-row items-start justify-start gap-[47.6px] max-w-full text-left text-base text-black font-sora mq450:gap-6 mq800:hidden">
                  <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[58px]">
                    Female
                  </a>
                  <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[39px]">
                    Male
                  </a>
                  <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[36px]">
                    Kids
                  </a>
                  <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[99px] whitespace-nowrap">
                    All Products
                  </a>
                </nav>
              </div>
            </div>
            <div className="w-[682px] flex flex-col items-start justify-start gap-3.5 max-w-full">
              <div className="self-stretch flex flex-row items-start justify-between gap-5 mq800:flex-wrap">
                <img
                  className="self-stretch w-[250px] relative max-h-full object-cover min-h-[266px]"
                  loading="lazy"
                  alt=""
                  src="/4e2ed6a9eaa6e1413843e53f3113ccfd2104c301278x296png@2x.png"
                />
                <img
                  className="self-stretch w-[250px] relative max-h-full object-cover min-h-[266px]"
                  loading="lazy"
                  alt=""
                  src="/2228e40aa700a68031eff4016f9e625ade813a89278x296png@2x.png"
                />
              </div>
              <div className="w-[598px] flex flex-col items-start justify-start gap-[17px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
                    <div className="relative tracking-[0.5px] leading-[24px] font-semibold">
                      Flex Push Button Bomber
                    </div>
                    <div className="relative tracking-[0.5px] leading-[24px] font-semibold">
                      Raglan Sweatshirt
                    </div>
                  </div>
                  <div className="w-[496px] flex flex-row items-start justify-between gap-5 max-w-full text-mini text-gray-100 mq450:flex-wrap">
                    <div className="relative leading-[15px] font-semibold inline-block min-w-[61px]">
                      Jackets
                    </div>
                    <div className="relative leading-[15px] font-semibold inline-block min-w-[64px]">
                      Sweater
                    </div>
                  </div>
                </div>
                <div className="w-[483px] flex flex-row items-start justify-between gap-5 max-w-full text-xl mq450:flex-wrap">
                  <div className="relative tracking-[0.6px] leading-[24px] font-semibold inline-block min-w-[54px] whitespace-nowrap mq450:text-base mq450:leading-[19px]">
                    $225
                  </div>
                  <div className="relative tracking-[0.6px] leading-[24px] font-semibold inline-block min-w-[51px] whitespace-nowrap mq450:text-base mq450:leading-[19px]">
                    $195
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-between min-w-[486px] max-w-full gap-5 text-center text-xs text-whitesmoke-200 font-arial mq800:flex-wrap mq800:min-w-full">
          <div className="w-[499.2px] flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch rounded-8xs border-gainsboro border-[1px] border-solid box-border flex flex-row items-start justify-start py-0 px-[5px] max-w-full [row-gap:20px] mq450:flex-wrap">
              <input className="m-0 h-[20.5px] w-[15px]" type="checkbox" />
              <input
                className="w-[calc(100%_-_25px)] [border:none] [outline:none] bg-white h-[25px] flex-1 flex flex-row items-start justify-start p-[5px] box-border font-arial text-sm-3 text-gray-200 min-w-[300px] max-w-full"
                placeholder="What you looking for"
                type="text"
              />
            </div>
          </div>
          <div className="rounded-4xl bg-whitesmoke-100 flex flex-row items-start justify-start p-3 relative">
            <img
              className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/svg-1.svg"
            />
            <div className="w-[18px] !m-[0] absolute top-[0px] right-[5px] rounded-4xs bg-crimson flex flex-row items-start justify-start pt-0 px-[5px] pb-1 box-border z-[1]">
              <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[7px]">
                0
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
