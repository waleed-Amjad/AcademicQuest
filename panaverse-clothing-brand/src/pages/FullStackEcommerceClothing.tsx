import { FunctionComponent } from "react";
import Main from "../components/Main";
import FooterContainer from "../components/FooterContainer";
import Divcopyright from "../components/Divcopyright";

const FullStackEcommerceClothing: FunctionComponent = () => {
  return (
    <div className="w-full h-[1081.2px] relative flex flex-col items-end justify-start pt-8 px-0 pb-[574px] box-border gap-[65px] leading-[normal] tracking-[normal] mq800:gap-4 mq1125:gap-8 mq1350:h-auto">
      <Main />
      <footer className="self-stretch bg-white flex flex-col items-start justify-start pt-[61px] px-0 pb-0 box-border gap-40 max-w-full shrink-0 mq800:gap-10 mq800:pt-10 mq800:box-border mq1125:gap-20">
        <FooterContainer />
        <Divcopyright />
      </footer>
    </div>
  );
};

export default FullStackEcommerceClothing;
