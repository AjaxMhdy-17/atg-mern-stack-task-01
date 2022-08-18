import React from "react";
import { BiEditAlt } from "react-icons/bi";

const MobileMenu = (props) => {
  return (
    <div onClick={() => props.handleShow()} className="fixed bottom-5 right-5 bg-custom_red h-[60px] w-[60px] text-white rounded-full md:hidden">
      <div className="flex text-[20px] items-center justify-center h-full">
        <BiEditAlt />
      </div>
    </div>
  );
};

export default MobileMenu;
