import React, { useContext } from "react";
import { RefContext } from "../contexts/RefContextProvider";

const Footer = () => {
  const { footerRef } = useContext(RefContext);
  return (
    <footer className="flex flex-col items-center space-y-5 mt-[50px] md:mt-[100px] 1xl:space-y-[1.3888vw]" ref={footerRef}>
      <div className="flex justify-center items-center space-x-[30px]">
        <a className="flex justify-center items-center w-[50px] 1xl:w-[3.4722vw] h-[50px] 1xl:h-[3.4722vw] bg-water rounded-full transition hover:scale-[1.2]" href="https://coinmarketcap.com">
          <img className="w-[26px] h-[26px] 1xl:w-[1.8055vw] 1xl:h-[1.8055vw]" src="images/website.svg" alt="" />
        </a>
        <a className="flex justify-center items-center w-[50px] 1xl:w-[3.4722vw] h-[50px] 1xl:h-[3.4722vw] bg-water rounded-full transition hover:scale-[1.2]" href="https://coinmarketcap.com">
          <img className="w-[26px] h-[26px] 1xl:w-[1.8055vw] 1xl:h-[1.8055vw]" src="images/call.svg" alt="" />
        </a>
        <a className="flex justify-center items-center w-[50px] 1xl:w-[3.4722vw] h-[50px] 1xl:h-[3.4722vw] bg-water rounded-full transition hover:scale-[1.2]" href="https://coinmarketcap.com">
          <img className="w-[26px] h-[26px] 1xl:w-[1.8055vw] 1xl:h-[1.8055vw]" src="images/mail.svg" alt="" />
        </a>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-[7px]">
          <img className="w-[14px] h-[18px] md:w-[0.9722vw] md:h-auto" src="images/map.svg" alt="" />
          <span className="block tiny:hidden font-semibold text-[14px] leading-[150%] text-grey1 text-center">Location: 270 North Delsea Drive, Vineland</span>
          <span className="hidden tiny:block font-semibold text-[1.25vw] leading-[150%] text-grey1 text-center">Location: 270 North Delsea Drive, Vineland NJ, 08360</span>
        </div>
        <span className="block tiny:hidden font-semibold text-[14px] leading-[150%] text-grey1 text-center">NJ, 08360</span>
      </div>
      <div className="flex justify-center items-center w-full bg-fire text-white py-[18px] md:py-[22px] font-bold text-[14px] md:text-[18px] leading-[150%] copyright-bar">
        Copyright © Kay Lookash Produce Co.
      </div>
    </footer>
  );
};

export default Footer;
