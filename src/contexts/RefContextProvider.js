import { createContext, useRef } from "react";

export const RefContext = createContext(null);

export default function RefContextProvider({ children }) {
  const headerRef = useRef(null);
  const homeRef = useRef(null);
  const storageRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);
  return <RefContext.Provider value={{ headerRef, homeRef, storageRef, aboutRef, contactRef, footerRef }}>{children}</RefContext.Provider>
};