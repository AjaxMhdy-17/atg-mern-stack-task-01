import React from "react";

const IconButton = (props) => {
  return (
    <button
      className={`flex items-center space-x-2 py-2 px-3 rounded-md ${
        props.variant === "blue"
          ? `bg-custom_blue text-white`
          : `bg-gray-200 text-black`
      }`}
    >
      {props.children}
    </button>
  );
};

export default IconButton;
