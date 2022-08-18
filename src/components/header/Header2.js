import React from "react";
import { BsCaretDownFill } from "react-icons/bs";
import SearchInput from "../ui/searchInput/SearchInput";

const Header2 = () => {
  return (
    <>
      <div className="container-fluid  h-[72px] md:flex items-center justify-between hidden">
        <div>
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div>
          <SearchInput />
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <img src="/images/user.png" alt="user_image" />
          </div>
          <div>Siddharth</div>
          <div>
            <BsCaretDownFill />
          </div>
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

export default Header2;
