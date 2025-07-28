import React from 'react'
import Image from 'next/image'

function Contact() {
  return (
    <div className="flex flex-col space-y-4 sm:space-y-6 py-6 sm:py-8 mt-6 sm:mt-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-black flex justify-center items-center text-center" id='contact'>
        Let&lsquo;s Build Something Great Together
      </h2>
      <p className="text-sm sm:text-base font-semibold text-gray-500 flex justify-center items-center text-center" id='contact'>
        Ready to bring your ideas to life? I&apos;m just a message away
      </p>
      
      {/* contact links */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
        {/* Left side - Contact info */}
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center'>
          <div className="flex-shrink-0">
            <Image
              src="/images/hero-image.jpg"
              alt="Hero Image"
              width={80}
              height={80}
              className="rounded-full object-cover w-16 h-16 sm:w-20 sm:h-20"
            />
          </div>
         
          <div className='flex flex-col text-center sm:text-left'>
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
              For More Inquiries
            </h3>
            <a 
              href="mailto:work.rparagoso@gmail.com"
              className='text-sm sm:text-base text-gray-600 hover:text-gray-800 transition-colors no-underline'
            >
              work.rparagoso@gmail.com
            </a>
            <a 
              href="tel:+639159427791"
              className='text-sm sm:text-base text-gray-600 hover:text-gray-800 transition-colors no-underline'
            >
              +639159427791
            </a>
          </div>
        </div>
        
        {/* Center - Contact Me button */}
        <div className="flex justify-center order-first lg:order-none">
          <button className='px-4 py-2 sm:px-6 sm:py-3 bg-[#d9d6c5] text-black hover:text-white font-medium sm:font-bold text-sm sm:text-base rounded-full hover:bg-gray-800 transition-colors'>
            <a 
              href="mailto:work.rparagoso@gmail.com"
              className='transition-colors no-underline flex items-center'
            >
              <span>Contact Me</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 7l-10 10m10-10H7m10 0v10"
                />
              </svg>
            </a>
          </button>
        </div>
        
        {/* Right side - Empty div for balance (hidden on mobile) */}
        <div className="hidden lg:block w-[200px]"></div>
      </div>
    </div>
  )
}

export default Contact