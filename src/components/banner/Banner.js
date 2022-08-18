import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import TransparentButton from "../ui/button/TransparentButton";

const Banner = () => {
  return (
    <>
      <div className="relative group">
        <div className="bg-gradient-to-t opacity-50 from-black to-black inset-0 absolute cursor-pointer"></div>
        {/* bg images for medium to  upper screen  */}
        <div className="banner_back md:flex hidden"></div>
        {/* bg images for small screen  */}
        <div className="banner_back_sm_screen  md:hidden w-full"></div>
        {/* banner content  */}
        <div className="container">
          <div className="absolute  bottom-[12%]">
            <div className="capitalize text-white">
              <div className="text-3xl font-semibold text-[17px] md:text-[36px]">computer engineering</div>
              <div className="text-sm font-thin text-[12px] md:text-[18px]">
                142,765 computer enginners follow this
              </div>
            </div>
          </div>
        </div>
        <div className="container text-white md:hidden">
          <div className="bg-green-700 z-50 flex items-center justify-between">
            <span className="absolute w-[50%] top-[7%] font-bold text-[20px]">
              <BsArrowLeft />
            </span>
            <span className="absolute right-[20px] top-[7%] sm:right-[50px]">
              <TransparentButton>Join Group</TransparentButton>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
