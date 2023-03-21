import React, { useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";

import Topbar from "./Topbar";
import useWindowDimensions from "../hooks/useDimensions";
import { Fade } from "@mui/material";

const Layout = ({ children }) => {
  const screenWidth = useWindowDimensions().width;
  const screenHeight = useWindowDimensions().height;
  const [openMenu, setOpenMenu] = useState(false);
  
  useMemo(() => {
    const appHeight = () => {
      const doc = document.documentElement
      doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
    if(screenWidth > 0 && screenHeight > 0) appHeight()
  }, [screenWidth, screenHeight])
  
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }, [])
  
  return (
    <div className="flex flex-col min-h-full relative">
      <img className="hidden lg:block absolute top-0 left-0 1xl:w-[28.125vw] 1xl:h-[12.9861vw]" src="images/ribbon.png" alt="" />
      <img className="block lg:hidden absolute top-0 left-0 w-[93.8666%] max-h-[160px]" src="images/ribbon-mobile.png" alt="" />
      <Fade in={openMenu} timeout={100}>
        <div className="block lg:hidden fixed w-full h-full bg-[rgba(0,0,0,0.75)] z-[7] backdrop-blur-[25px]" />
      </Fade>
      <main className="flex flex-col flex-1">{children}</main>
      <Topbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
