import React from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";
import IconButton from "../ui/button/IconButton";


const PostOptions2 = () => {
  return (
    <div className="">
      <div className="container md:flex justify-between items-center mt-[50px] pb-[13px]  border-b border-gray-300  hidden mb-[20px]">
        <div>
          <ul className="text-[16px] text-gray-500 flex items-center space-x-4 ml-0 pl-0">
            <li>All Posts</li>
            <li>Article</li>
            <li>Event</li>
            <li>Education</li>
            <li>Job</li>
          </ul>
        </div>
        <div className="flex space-x-3">
          <IconButton>
            <span>Write A Post</span>
            <BsFillCaretDownFill />
          </IconButton>
          <IconButton>
            <IoLogOutOutline/>
            <span>Leave Group</span>
          </IconButton>
        </div>
      </div>
      {/* for small device  */}
      <div className="container mt-[25px] mb-[30px] flex justify-between items-center md:hidden">
        <div className="font-bold">Posts (368)</div>
        <div>
          <select name="" id="" className="py-2 px-3">
            <option value="">Filter:All</option>
            <option value="">Article</option>
            <option value="">Event</option>
            <option value="">Education</option>
            <option value="">Job</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PostOptions2;
