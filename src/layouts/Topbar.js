import React, { useContext } from "react";
import { Slide } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { RefContext } from "../contexts/RefContextProvider";

const Topbar = ({ openMenu, setOpenMenu }) => {
  const nav = useNavigate()

  const loc = useLocation()

  const { headerRef, homeRef, storageRef, aboutRef, contactRef } = useContext(RefContext);

  const navigate = async (ref) => {
    nav("/")
    if (loc.pathname === "/") {
      var headerOffset = 150;
      var elementPosition = ref.current.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setOpenMenu(false);
    }
  }

  return (
    <header className="absolute w-full" ref={headerRef}>
      <img className="block lg:hidden absolute top-[29px] left-1/2 -translate-x-1/2 w-[79px] h-[79px]" src="images/logo.png" alt="" />
      <div className="flex justify-end lg:justify-start items-center px-[25px] lg:px-[140px] 1xl:px-[9.7222vw] py-[56px] lg:py-[60px] 1xl:py-[4.1666vw]">
        <div />
        <img className="hidden lg:block w-[91px] h-[91px] 1xl:w-[6.3194vw] 1xl:h-[6.3194vw]" src="images/logo.png" alt="" />
        <img className="block lg:hidden cursor-pointer" src="images/menu.svg" alt="" onClick={() => setOpenMenu(true)} />
        <Slide in={openMenu} direction="left" timeout={100}>
          <div className="flex flex-col justify-between pt-[56px] pb-[30px] px-[25px] block lg:hidden fixed top-0 right-0 w-[195px] h-full bg-white z-[7]">
            <div className="flex flex-col items-end space-y-10 font-semibold text-[18px] leading-[22.5px]">
              <img className="cursor-pointer" src="images/menu-close.svg" alt="" onClick={() => setOpenMenu(false)} />
              <span onClick={() => navigate(homeRef)} className="cursor-pointer hover:font-bold hover:underline hover:underline-offset-2 hover:decoration-2 hover:text-blue1">Home</span>
              <span onClick={() => navigate(storageRef)} className="cursor-pointer hover:font-bold hover:underline hover:underline-offset-2 hover:decoration-2 hover:text-blue1">Storage</span>
              <span onClick={() => navigate(aboutRef)} className="cursor-pointer hover:font-bold hover:underline hover:underline-offset-2 hover:decoration-2 hover:text-blue1">About</span>
              <span onClick={() => navigate(contactRef)} className="cursor-pointer hover:font-bold hover:underline hover:underline-offset-2 hover:decoration-2 hover:text-blue1">Contact us</span>
            </div>
            <div className="flex flex-col space-y-[14px]">
              <div className="flex justify-between">
                <a className="flex justify-center items-center w-[40.28px] h-[40.28px] bg-water rounded-full transition hover:scale-[1.2]" href="https://coinmarketcap.com">
                  <img className="w-[20.94px] h-[20.94px]" src="images/website.svg" alt="" />
                </a>
                <a className="flex justify-center items-center w-[40.28px] h-[40.28px] bg-water rounded-full transition hover:scale-[1.2]" href="https://coinmarketcap.com">
                  <img className="w-[19.33px] h-[19.33px]" src="images/call.svg" alt="" />
                </a>
                <a className="flex justify-center items-center w-[40.28px] h-[40.28px] bg-water rounded-full transition hover:scale-[1.2]" href="https://coinmarketcap.com">
                  <img className="w-[20.94px] h-[16.11px]" src="images/mail.svg" alt="" />
                </a>
              </div>
              <div className="flex flex-col items-center text-center font-semibold text-[12px] leading-[18px]">
                <div className="flex items-center space-x-1">
                  <img className="w-[12px] h-[16px]" src="images/map.svg" alt="" />
                  <span>Location: 270 North</span>
                </div>
                <span>Delsea Drive, Vineland</span>
                <span>NJ, 08360</span>
              </div>
            </div>
          </div>
        </Slide>
        <div className="hidden lg:block flex items-center space-x-10 1xl:space-x-[2.7777vw] ml-[145px] font-bold text-[14px] leading-[150%] 1xl:text-[0.9722vw]">
          <span onClick={() => navigate(homeRef)} className="cursor-pointer hover:underline hover:underline-offset-2 hover:decoration-2 hover:text-blue1">Home</span>
          <span onClick={() => navigate(storageRef)} className="cursor-pointer hover:underline hover:underline-offset-2 hover:decoration-2 hover:text-blue1">Storage</span>
          <span onClick={() => navigate(aboutRef)} className="cursor-pointer hover:underline hover:underline-offset-2 hover:decoration-2 hover:text-blue1">About</span>
          <span onClick={() => navigate(contactRef)} className="cursor-pointer hover:underline hover:underline-offset-2 hover:decoration-2 hover:text-blue1">Contact us</span>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
