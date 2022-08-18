import React from 'react'
import { BsSearch } from "react-icons/bs";


const SearchInput = () => {
  return (
    <div className='flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-full'>
      <span>
        <BsSearch/>
      </span>
      <input type="text" className='bg-transparent w-[300px] focus:outline-none placeholder:text-gray-500' placeholder='Search for your favorite group in ATG' />
    </div>
  )
}

export default SearchInput