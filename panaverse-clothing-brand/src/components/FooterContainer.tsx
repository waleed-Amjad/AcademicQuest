import { FunctionComponent } from "react";

export type FooterContainerType = {
  className?: string;
};

const FooterContainer: FunctionComponent<FooterContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1689.2px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-base text-dimgray font-sora ${className}`}
    >
      <div className="w-[1433.2px] flex flex-row items-end justify-start gap-[137.6px] max-w-full mq450:gap-[17px] mq800:gap-[34px] mq1350:gap-[69px] mq1350:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[47.5px] min-w-[528px] max-w-full mq800:gap-6 mq800:min-w-full mq1350:flex-1">
          <img
            className="w-[180px] h-[30px] relative object-cover"
            loading="lazy"
            alt=""
            src="/image@2x.png"
          />
          <div className="relative leading-[22px]">
            <p className="m-0">
              Small, artisan label that offers a thoughtfully curated collection
              of
            </p>
            <p className="m-0">high quality everyday essentials made.</p>
          </div>
          <div className="flex flex-row items-start justify-start gap-4">
            <div className="rounded-3xs bg-whitesmoke-100 flex flex-row items-start justify-start pt-2.5 px-3 pb-[15px]">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/svg-2.svg"
              />
            </div>
            <div className="rounded-3xs bg-whitesmoke-100 flex flex-row items-start justify-start pt-2.5 px-3 pb-[15px]">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/svg-3.svg"
              />
            </div>
            <div className="rounded-3xs bg-whitesmoke-100 flex flex-row items-start justify-start pt-2.5 px-3 pb-[15px]">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/svg-4.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-between min-w-[348px] max-w-full gap-5 text-lgi-2 mq450:flex-wrap mq450:min-w-full">
          <div className="w-[123px] flex flex-col items-start justify-start py-0 pl-0 pr-[11px] box-border gap-7">
            <b className="relative tracking-[0.38px] leading-[19px] inline-block min-w-[99px]">
              Company
            </b>
            <div className="self-stretch flex flex-col items-start justify-start gap-[15.5px] text-base">
              <a className="[text-decoration:none] relative leading-[22px] text-[inherit] inline-block min-w-[51px]">
                About
              </a>
              <div className="relative leading-[22px] inline-block min-w-[105px]">
                Terms of Use
              </div>
              <a className="[text-decoration:none] relative leading-[22px] text-[inherit] inline-block min-w-[111px]">
                Privacy Policy
              </a>
              <div className="relative leading-[22px] inline-block min-w-[108px]">
                How it Works
              </div>
              <div className="relative leading-[22px] inline-block min-w-[92px]">
                Contact Us
              </div>
            </div>
          </div>
          <div className="w-[123px] flex flex-col items-start justify-start gap-7">
            <b className="relative tracking-[0.38px] leading-[19px] inline-block min-w-[85px]">
              Support
            </b>
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px] text-base">
              <div className="relative leading-[22px] inline-block min-w-[123px]">
                Support Carrer
              </div>
              <div className="relative leading-[22px] inline-block min-w-[96px]">
                24h Service
              </div>
              <div className="relative leading-[22px] inline-block min-w-[91px]">
                Quick Chat
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-7">
            <b className="relative tracking-[0.38px] leading-[19px] inline-block min-w-[84px]">
              Contact
            </b>
            <div className="flex flex-col items-start justify-start gap-[15px] text-base">
              <div className="relative leading-[22px] inline-block min-w-[83px]">
                Whatsapp
              </div>
              <div className="relative leading-[22px] inline-block min-w-[102px]">
                Support 24h
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContainer;
