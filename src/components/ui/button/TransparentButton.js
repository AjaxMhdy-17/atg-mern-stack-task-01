import React from 'react'

const TransparentButton = (props) => {

  return (
    <button className={`bg-transparent border ${props.black ? 'border-black' : 'border-white'} rounded-md  py-2 px-3 ${props.black ? 'text-black' : 'text-white'} ${props.full ? 'w-full' : ''}`}>
        {props.children}
    </button>
  )
}

export default TransparentButton