import React from 'react'

function Footer() {
  return (
    <>
      <hr className="w-full border-t border-gray-300 mb-2 sm:mb-4" />
      <div className="flex flex-col items-center sm:items-start justify-center py-4 sm:py-6 px-4">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-6xl text-[#1B181B] font-bold mb-2 leading-tight text-center sm:text-left">
          &copy; {new Date().getFullYear()} Ron Paragoso. 
          <br />
          All rights reserved.
        </p>
      </div>
    </>
  )
}

export default Footer