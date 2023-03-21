import React, { useContext } from "react";
import TextLoop from "react-text-loop";
import glamorous from "glamorous";
import Footer from "../layouts/Footer";
import useWindowDimensions from "../hooks/useDimensions";
import { RefContext } from "../contexts/RefContextProvider";

const Landing = () => {

  const { homeRef, storageRef, aboutRef, contactRef} = useContext(RefContext);

  const screenW = useWindowDimensions().width

  const CenteredText = screenW >= 1024 ? glamorous.span({ textAlign: "center", width: "100vw", whiteSpace: "normal" }) : glamorous.div({ textAlign: "center", width: "360px", whiteSpace: "normal" });

  return (
    <div className="overflow-hidden">
      <div className="lg:pl-[140px] 1xl:pl-[9.7222vw] h-[809px] lg:h-auto relative overflow-hidden">
        <img className="hidden lg:block w-full ml-auto" src="images/orange.png" alt="" />
        <img className="block lg:hidden w-full absolute bottom-[calc(375px-100vw)]" src="images/orange-mobile.png" alt="" />
        <div className="flex flex-col items-center lg:items-start absolute top-[154px] lg:top-[17.0138vw] w-full lg:w-auto px-[25px] lg:px-0" ref={homeRef}>
          <span className="lg:max-w-[51.4583vw] font-bold text-[35px] lg:text-[4.8611vw] leading-[100%] text-center lg:text-left">Your New
            {screenW >=1024 ? "\u00a0" : <br/>}
            Favorite Produce
            {screenW >=1024 ? "\u00a0" : <br/>}
            <span className="text-center loop-text">
              <TextLoop interval={[1200, 1200, 1200, 5000]}>
                <CenteredText className="gradient-text bg-fire">Warehouse</CenteredText>
                <CenteredText className="gradient-text bg-fire">Repacker</CenteredText>
                <CenteredText className="gradient-text bg-fire">Buyer</CenteredText>
                <CenteredText className="gradient-text bg-fire">Company</CenteredText>
              </TextLoop>
            </span>
          </span>
          <span className="mt-5 1xl:mt-[1.3888vw] tiny:max-w-[70%] font-semibold text-[14px] lg:text-[1.25vw] leading-[150%] text-grey1 text-center lg:text-left hero-text">Kay Lookash Produce specializes in cold storage, repacking & buying/selling produce. Located in the heart of Vineland, New Jersey.</span>
          <div className="flex items-center space-x-5 mt-5 1xl:mt-[1.3888vw]">
            <a className="flex justify-center items-center w-[155px] xl:w-[13.8888vw] h-[37.5px] xl:h-[3.4722vw] bg-water hover:bg-fire rounded-[300px]" href="tel:+18562947484">
              <div className="flex items-center space-x-[5px] font-bold text-[14px] xl:text-[1.25vw] leading-[150%] text-white">
                <img className="w-[16.5px] h-[16.5px] xl:w-[1.52777vw] xl:h-auto" src="images/call.svg" alt="" />
                <span>Call Us</span>
              </div>
            </a>
            <a className="flex justify-center items-center w-[155px] xl:w-[13.8888vw] h-[37.5px] xl:h-[3.4722vw] bg-water hover:bg-fire rounded-[300px]" href="mailto:Jag@kaylookashproduce.com">
              <div className="flex items-center space-x-[5px] font-bold text-[14px] xl:text-[1.25vw] leading-[150%] text-white">
                <img className="w-[19.5px] h-[15.75px] xl:w-[1.52777vw] xl:h-auto" src="images/mail.svg" alt="" />
                <span>Email Us</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-[102px] lg:mt-[150px] px-[25px] 3lg:px-[140px]">
        <div className="flex items-center flex-col-reverse 3lg:flex-row" ref={storageRef}>
          <div className="flex-1 py-14 3lg:py-0">
            <div className="flex flex-col justify-center items-center 3lg:items-start space-y-[15px] lg:space-y-5 w-fit mx-auto">
              <span className="3lg:max-w-[29.8611vw] font-Prata text-[35px] 3lg:text-[4.1666vw] leading-[125%] text-center 3lg:text-left">Fresh Produce Repacking</span>
              <span className="3lg:max-w-[31.31944vw] font-semibold text-[14px] 3lg:text-[1.25vw] leading-[150%] text-grey1 text-center 3lg:text-left">We leverage state of the art Giro packaging machinery to deliver quick and reliable repackaging solutions for multiple product lines.</span>
              <a className="flex justify-center items-center w-[155px] xl:w-[13.8888vw] h-[37.5px] xl:h-[3.4722vw] bg-water hover:bg-fire rounded-[300px]" href="mailto:Jag@kaylookashproduce.com">
                <div className="flex items-center space-x-[5px] font-bold text-[14px] xl:text-[1.25vw] leading-[150%] text-white">
                  <img className="w-[19.5px] h-[15.75px] xl:w-[1.52777vw] xl:h-auto" src="images/mail.svg" alt="" />
                  <span>Email Us</span>
                </div>
              </a>
            </div>
          </div>
          <img className="flex-1 w-full tiny:max-w-[50%] tiny:max-h-[50%]" src="images/portfolio/1.png" alt="" />
        </div>
        <div className="flex items-center flex-col-reverse 3lg:flex-row-reverse">
          <div className="flex-1 py-14 3lg:py-0">
            <div className="flex flex-col justify-center items-center 3lg:items-start space-y-[15px] lg:space-y-5 w-fit mx-auto">
              <span className="3lg:max-w-[25.9722vw] font-Prata text-[35px] 3lg:text-[4.1666vw] leading-[125%] text-center 3lg:text-left">Cold Storage Warehouse</span>
              <span className="3lg:max-w-[26.8055vw] font-semibold text-[14px] 3lg:text-[1.25vw] leading-[150%] text-grey1 text-center 3lg:text-left">Our 30,000 Sqft facility based in Vineland, NJ offers cold storage with more than 2,500 pallet positions available.</span>
              <a className="flex justify-center items-center w-[155px] xl:w-[13.8888vw] h-[37.5px] xl:h-[3.4722vw] bg-water hover:bg-fire rounded-[300px]" href="mailto:Jag@kaylookashproduce.com">
                <div className="flex items-center space-x-[5px] font-bold text-[14px] xl:text-[1.25vw] leading-[150%] text-white">
                  <img className="w-[19.5px] h-[15.75px] xl:w-[1.52777vw] xl:h-auto" src="images/mail.svg" alt="" />
                  <span>Email Us</span>
                </div>
              </a>
            </div>
          </div>
          <img className="flex-1 w-full tiny:max-w-[50%] tiny:max-h-[50%]" src="images/portfolio/2.png" alt="" />
        </div>
        <div className="flex items-center flex-col-reverse 3lg:flex-row">
          <div className="flex-1 py-14 3lg:py-0">
            <div className="flex flex-col justify-center items-center 3lg:items-start space-y-[15px] lg:space-y-5 w-fit mx-auto">
              <span className="3lg:max-w-[30.2777vw] font-Prata text-[35px] 3lg:text-[4.1666vw] leading-[125%] text-center 3lg:text-left">Produce Buyer & Seller</span>
              <span className="3lg:max-w-[30.2777vw] font-semibold text-[14px] 3lg:text-[1.25vw] leading-[150%] text-grey1 text-center 3lg:text-left">Our in-house wholesale team is experienced in purchasing & selling produce goods. We can also help move distressed, rejected and Grade B product.</span>
              <a className="flex justify-center items-center w-[155px] xl:w-[13.8888vw] h-[37.5px] xl:h-[3.4722vw] bg-water hover:bg-fire rounded-[300px]" href="mailto:Jag@kaylookashproduce.com">
                <div className="flex items-center space-x-[5px] font-bold text-[14px] xl:text-[1.25vw] leading-[150%] text-white">
                  <img className="w-[19.5px] h-[15.75px] xl:w-[1.52777vw] xl:h-auto" src="images/mail.svg" alt="" />
                  <span>Email Us</span>
                </div>
              </a>
            </div>
          </div>
          <img className="flex-1 w-full tiny:max-w-[50%] tiny:max-h-[50%]" src="images/portfolio/3.png" alt="" />
        </div>
        <div className="flex items-center flex-col-reverse 3lg:flex-row-reverse">
          <div className="flex-1 py-14 3lg:py-0">
            <div className="flex flex-col justify-center items-center 3lg:items-start space-y-[15px] lg:space-y-5 w-fit mx-auto">
              <span className="font-Prata text-[35px] 3lg:text-[4.1666vw] leading-[125%] text-center 3lg:text-left">Our Products</span>
              <span className="3lg:max-w-[30.2777vw] font-semibold text-[14px] 3lg:text-[1.25vw] leading-[150%] text-grey1 text-center 3lg:text-left">Depending on the season, Kay Lookash works with a multitude of different product lines for both fruits and vegetables.</span>
              <a className="flex justify-center items-center w-[155px] xl:w-[13.8888vw] h-[37.5px] xl:h-[3.4722vw] bg-water hover:bg-fire rounded-[300px]" href="mailto:Jag@kaylookashproduce.com">
                <div className="flex items-center space-x-[5px] font-bold text-[14px] xl:text-[1.25vw] leading-[150%] text-white">
                  <img className="w-[19.5px] h-[15.75px] xl:w-[1.52777vw] xl:h-auto" src="images/mail.svg" alt="" />
                  <span>Email Us</span>
                </div>
              </a>
            </div>
          </div>
          <img className="flex-1 w-full tiny:max-w-[50%] tiny:max-h-[50%]" src="images/portfolio/4.png" alt="" />
        </div>
        <div className="flex items-center flex-col-reverse 3lg:flex-row">
          <div className="flex-1 py-14 3lg:py-0">
            <div className="flex flex-col justify-center items-center 3lg:items-start space-y-[15px] lg:space-y-5 w-fit mx-auto" ref={aboutRef}>
              <span className="3lg:max-w-[25.9722vw] font-Prata text-[35px] 3lg:text-[4.1666vw] leading-[125%] text-center 3lg:text-left">About Kay Lookash</span>
              <span className="3lg:max-w-[25.9722vw] font-semibold text-[14px] 3lg:text-[1.25vw] leading-[150%] text-grey1 text-center 3lg:text-left">Kay Lookash Produce is a family owned and operated business since 2010. We serve the U.S and offer our services to international brands around the globe. Ensuring exceptional standards remains our topmost priority.</span>
              <div className="flex flex-col items-center 3lg:items-start">
                <div className="flex items-center space-x-[7px]">
                  <img className="w-[14px] h-[18px] md:w-[0.9722vw] md:h-auto" src="images/map.svg" alt="" />
                  <span className="hidden 3lg:block font-semibold text-[1.25vw] leading-[150%] text-grey1">Location: 270 North Delsea Drive,</span>
                  <span className="block 3lg:hidden font-semibold text-[14px] leading-[150%] text-grey1">Location: 270 North Delsea Drive, Vineland</span>
                </div>
                <span className="hidden 3lg:block ml-6 font-semibold text-[1.25vw] leading-[150%] text-grey1">Vineland NJ, 08360</span>
                <span className="block 3lg:hidden font-semibold text-[14px] leading-[150%] text-grey1">NJ, 08360</span>
              </div>
            </div>
          </div>
          <img className="flex-1 w-full tiny:max-w-[50%] tiny:max-h-[50%]" src="images/portfolio/5.png" alt="" />
        </div>
        <div className="flex flex-col items-center tiny:items-start mt-[70px] lg:mt-[150px] bg-water rounded-[25px] p-[30px] lg:px-[75px] lg:py-[60px] text-white relative overflow-hidden h-[567px] tiny:h-auto contact" ref={contactRef}>
          <img className="hidden tiny:block absolute top-0 right-0 h-full" src="images/orange-contact.png" alt="" />
          <img className="block tiny:hidden absolute bottom-0 right-0 w-full" src="images/orange-contact-mobile.png" alt="" />
          <span className="font-bold text-[35px] lg:text-[4.8611vw] leading-[125%] relative">Contact Us</span>
          <span className="mt-[10px] tiny:max-w-[36.25vw] font-semibold text-[14px] lg:text-[1.25vw] leading-[150%] text-center tiny:text-left relative">Get in touch with our sales team to learn more about our packing, storage and distribution services.</span>
          <div className="flex flex-col tiny:flex-row items-center space-y-[10px] tiny:space-x-5 tiny:space-y-0 mt-5 w-full tiny:w-auto relative">
            <a className="flex justify-center items-center w-full tiny:w-[155px] h-[37.5px] 3lg:h-[50px] bg-white rounded-[300px] action-btn text-blue1 hover:text-orange1" href="tel:+18562947484">
              <div className="flex items-center space-x-[5px] font-bold text-[14px] 3lg:text-[1.25vw] leading-[150%]">
                <svg className="w-[19.5px] h-[15.75px] 3lg:w-[1.52777vw] 3lg:h-auto" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.33109 7.47345C7.7525 10.3059 11.6941 14.2475 14.5266 15.6689L16.5007 13.7848C17.0866 13.2256 18.014 13.2364 18.5867 13.8091L21.5627 16.7851C21.868 17.0904 22.0158 17.4682 21.9987 17.8997C21.9816 18.3312 21.8042 18.6961 21.4757 18.9763L17.9302 21.9994C11.438 22.0952 -0.0980328 10.7599 0.000628763 4.06984L3.02371 0.524345C3.30387 0.195771 3.66882 0.0184985 4.10028 0.00133348C4.5318 -0.0157818 4.90962 0.131987 5.21491 0.437325L8.19088 3.41334C8.76359 3.98601 8.77439 4.91342 8.21521 5.49932L6.33109 7.47345ZM12.8348 2.80272C14.4424 2.80272 15.8977 3.45424 16.9512 4.50768C18.0046 5.56106 18.6561 7.01641 18.6561 8.62395C18.6561 8.95367 18.9234 9.221 19.2532 9.221C19.5829 9.221 19.8502 8.95367 19.8502 8.62395C19.8502 6.68679 19.0649 4.93292 17.7954 3.66341C16.5258 2.39384 14.7719 1.60863 12.8347 1.60863C12.505 1.60863 12.2377 1.87595 12.2377 2.20567C12.2377 2.53539 12.5051 2.80272 12.8348 2.80272ZM12.8348 5.92228C13.5809 5.92228 14.2563 6.22468 14.7452 6.71356C15.2341 7.20244 15.5365 7.8779 15.5365 8.624C15.5365 8.95372 15.8038 9.22105 16.1336 9.22105C16.4633 9.22105 16.7306 8.95372 16.7306 8.624C16.7306 7.54828 16.2945 6.5743 15.5895 5.86929C14.8845 5.16428 13.9105 4.72819 12.8348 4.72819C12.5051 4.72819 12.2377 4.99551 12.2377 5.32523C12.2377 5.65495 12.5051 5.92228 12.8348 5.92228Z" fill="currentColor"/>
                </svg>
                <span>Call Us</span>
              </div>
            </a>
            <a className="flex justify-center items-center w-full tiny:w-[155px] h-[37.5px] 3lg:h-[50px] bg-white rounded-[300px] action-btn text-blue1 hover:text-orange1" href="mailto:Jag@kaylookashproduce.com">
              <div className="flex items-center space-x-[5px] font-bold text-[14px] 3lg:text-[1.25vw] leading-[150%]">
                <svg className="w-[19.5px] h-[15.75px] 3lg:w-auto 3lg:h-[1.52777vw]" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.4 0H2.6C1.17 0 0.013 1.18125 0.013 2.625L0 18.375C0 19.8188 1.17 21 2.6 21H23.4C24.83 21 26 19.8188 26 18.375V2.625C26 1.18125 24.83 0 23.4 0ZM22.88 5.57812L13.689 11.3794C13.273 11.6419 12.727 11.6419 12.311 11.3794L3.12 5.57812C2.795 5.36812 2.6 5.01375 2.6 4.63313C2.6 3.75375 3.549 3.22875 4.29 3.68812L13 9.1875L21.71 3.68812C22.451 3.22875 23.4 3.75375 23.4 4.63313C23.4 5.01375 23.205 5.36812 22.88 5.57812Z" fill="currentColor"/>
                </svg>
                <span>Email Us</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
