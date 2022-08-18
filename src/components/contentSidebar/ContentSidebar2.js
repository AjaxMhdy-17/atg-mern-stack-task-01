import React from "react";
import { GoLocation } from "react-icons/go";
import { AiTwotoneEdit } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

const ContentSidebar2 = () => {
  return (
    <div className="mt-10 ">
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
      <div className="mt-4">
        <div className="flex items-center space-x-1 mb-3">
          <span>
            <BsFillHandThumbsUpFill />
          </span>
          <div className="uppercase">
            <span>recomemded groups</span>
          </div>
        </div>
        <div className="mt-3">
          <ul className="pl-0">
            <li className="flex items-center justify-between mt-3">
              <span className="flex items-center space-x-1">
                <span>
                  <img src="/images/leisure.png" alt="leisure" />
                </span>
                <span className="capitalize">leisure</span>
              </span>
              <span>
                <button className="bg-black text-white rounded-full py-1 px-3">
                  followed
                </button>
              </span>
            </li>
            <li className="flex items-center justify-between mt-3">
              <span className="flex items-center space-x-1">
                <span>
                  <img src="/images/leisure.png" alt="leisure" />
                </span>
                <span className="capitalize">leisure</span>
              </span>
              <span>
                <button className="bg-gray-300 rounded-full py-1 px-3">
                  follow
                </button>
              </span>
            </li>
            <li className="flex items-center justify-between mt-3">
              <span className="flex items-center space-x-1">
                <span>
                  <img src="/images/leisure.png" alt="leisure" />
                </span>
                <span className="capitalize">leisure</span>
              </span>
              <span>
                <button className="bg-gray-300 rounded-full py-1 px-3">
                  follow
                </button>
              </span>
            </li>
            <li className="flex items-center justify-between mt-3">
              <span className="flex items-center space-x-1">
                <span>
                  <img src="/images/leisure.png" alt="leisure" />
                </span>
                <span className="capitalize">leisure</span>
              </span>
              <span>
                <button className="bg-gray-300 rounded-full py-1 px-3">
                  follow
                </button>
              </span>
            </li>
          </ul>
          <div className="text-right mt-5 text-custom_blue">read more...</div>
        </div>
      </div>
    </div>
  );
};

export default ContentSidebar2;
