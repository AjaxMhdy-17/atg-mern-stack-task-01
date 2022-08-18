import React from "react";
import { BsFillEyeFill, BsFillShareFill, BsThreeDots } from "react-icons/bs";
import { AiTwotoneCalendar } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

import IconButton from "../button/IconButton";
import TransparentButton from "../button/TransparentButton";
import { useState } from "react";

const Card = (props) => {
  const [menu, setMenu] = useState(false);
  const {
    cover_image,
    title,
    tag,
    description,
    user_image,
    user_name,
    time,
    location,
  } = props.post;
  return (
    <div className="border border-gray-600 mt-[20px]">
      <div>
        {cover_image && (
          <img
            src={cover_image}
            className="img-fluid w-full -h-full"
            alt="article_image"
          />
        )}
      </div>
      <div className="p-3">
        <div className="text-[18px] font-[500] capitalize mb-3">{tag}</div>
        <div className="flex justify-between mb-3">
          <div className="w-[90%] font-[600] text-[22px]">{title && title}</div>
          <div onClick={() => setMenu(!menu)} className="relative">
            <BsThreeDots />
            <div
              className={`${
                menu === true ? `flex` : `hidden`
              } absolute top-100% left-[-85px] shadow-lg bg-gray-100 z-50`}
            >
              <ul className="text-gray-900 ml-0 pl-0 p-3">
                <li>edit</li>
                <li>report</li>
                <li>option 3</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <div className="flex items-center space-x-2">
            {time && (
              <>
                <AiTwotoneCalendar />
                <div>{time}</div>
              </>
            )}
          </div>
          <div className="flex items-center space-x-1">
            {location && (
              <>
                <GrLocation />
                <div>{location}</div>
              </>
            ) }
          </div>
        </div>
        <div>{description && description}</div>
        {location && (
          <>
            <div className="my-3">
              <TransparentButton black="black" full="full">
                <span className="text-custom_red">Visit Website</span>
              </TransparentButton>
            </div>
          </>
        )}
        <div className="mt-[25px] flex justify-between items-center">
          <div className="flex space-x-2 items-center">
            <span>
              <img src={user_image} alt="user_image" />
            </span>
            <span className="text-sm">
              {user_name}
              <div className="flex space-x-1 items-center text-gray-500 md:hidden">
                <span>
                  <BsFillEyeFill />
                </span>
                <span>1.4k Views</span>
              </div>
            </span>
          </div>
          <div className="flex space-x-4">
            <div className="md:flex space-x-1 items-center hidden">
              <span>
                <BsFillEyeFill />
              </span>
              <span>1.4k Views</span>
            </div>
            <div>
              <IconButton>
                <BsFillShareFill />
                <span className="md:hidden">Share</span>
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
