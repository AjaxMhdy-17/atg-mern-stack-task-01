import React from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import SearchInput from "../ui/searchInput/SearchInput";

const Header = (props) => {
  return (
    <>
      <div className="container-fluid  h-[72px] md:flex items-center justify-between hidden">
        <div>
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div>
          <SearchInput />
        </div>
        <div onClick={() => props.handleShow()}  className="flex items-center">
          <span className="text-custom_black text-[16px] font-[500]">
            Create account <span className="text-custom_blue">It's free!</span>{" "}
          </span>
          <span className="ml-2">
            <BsFillCaretDownFill />
          </span>
        </div>
      </div>
      <div className="container flex items-center space-x-3 h-[24px] justify-end md:hidden pr-5">
        <span className="cursor-pointer">
          <img src="/images/Rect.png" alt="rect" />
        </span>
        <span className="cursor-pointer">
          <img src="/images/Oval.png" alt="oval" />
        </span>
        <span className="cursor-pointer">
          <img src="/images/Path.png" alt="path" />
        </span>
      </div>
    </>
  );
};

export default Header;
