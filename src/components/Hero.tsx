"use client";

import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="w-full flex flex-col px-4 sm:px-6 lg:px-8 py-8" id='about'>
      {/* Hero Title */}
      <div className="mb-6 sm:mb-8 overflow-hidden -mx-4">
        <h1 className="text-[clamp(2.5rem,8vw,8rem)] sm:text-[clamp(3rem,8vw,8rem)] font-bold text-[#1B181B] w-full scale-x-110 sm:scale-x-120 transform scale-y-110 origin-left leading-none">
          RON PARAGOSO
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start sm:items-center lg:items-start">
        
        {/* Image */}
        <div className="flex-shrink-0 w-full sm:w-auto flex justify-center lg:justify-start relative">
          {/* Noise overlay for image only */}
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none rounded-lg z-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='10' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter2)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '80px 80px'
            }}
          />
          <Image 
            src="/images/hero-image.jpg" 
            alt="Hero Image" 
            width={250} 
            height={450} 
            className="object-cover w-[200px] h-[300px] sm:w-[225px] sm:h-[350px] lg:w-[250px] lg:h-[400px] rounded-lg filter contrast-110 brightness-95 saturate-110" 
            style={{
              filter: 'contrast(1.1) brightness(0.95) saturate(1.1) sepia(0.1)'
            }}
          />
        </div>

        {/* About Section */}
        <div className="flex-1 w-full">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B181B] uppercase tracking-wider text-center lg:text-left">
              About Me
            </h2>
            
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 text-center lg:text-left">
                A Computer Science graduate passionate about software development and digital problem-solving. I specialize in building clean, responsive, and user-focused websites using tools like HTML, CSS, JS, and Tailwind.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 text-center lg:text-left">
                I enjoy learning new technologies, working on real-world projects, and constantly improving my skills in back-end development. Whether collaborating with a team or working independently, I am committed to creating meaningful and efficient digital experiences.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 sm:gap-6 mt-4 sm:mt-6 justify-center lg:justify-start">
              <a
                href="https://github.com/rdeniele"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#191719] hover:text-[#4d4c4d] transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="text-3xl sm:text-4xl" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ron-paragoso-a96b1724b/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#191719] hover:text-[#4d4c4d] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-3xl sm:text-4xl" />
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#191719] hover:text-[#4d4c4d] transition-colors duration-300"
                aria-label="Resume"
              >
                <FaFileAlt className="text-3xl sm:text-4xl" />
              </a>
            </div>

            {/* Contact Button */}
            <div className="mt-4 sm:mt-6 flex justify-center lg:justify-start">
              <button className='px-4 py-2 sm:px-6 sm:py-3 bg-[#d9d6c5] text-[#1B181B] hover:text-white font-medium rounded-full hover:bg-gray-800 transition-colors'>
                <a 
                  href="mailto:work.rparagoso@gmail.com"
                  className='transition-colors no-underline flex items-center'
                >
                  <span className="text-sm sm:text-base">Contact Me</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block ml-2 w-4 h-4"
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
          </div>
        </div>
      </div>
    </div>
  )
}
