import React from "react";
import { GoLocation } from "react-icons/go";
import { AiTwotoneEdit } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";

const ContentSidebar = () => {
  return (
    <div className="mt-10 text-center">
      <div className="flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center">
          <span>
            <GoLocation />
          </span>
          <span>
            <input
              type="text"
              className="focus:outline-none mb-2 ml-2"
              placeholder="enter your location"
            />
          </span>
        </div>
        <span className="">
          <AiTwotoneEdit />
        </span>
      </div>
      <div className="flex space-x-2 mt-5 ml-3">
        <span>
          <RiErrorWarningLine />
        </span>
        <div className="text-[12px] text-gray-500 text-left">
          your location is help us to serve better and extends a personalise
          exprience
        </div>
      </div>
    </div>
  );
};

export default ContentSidebar;
