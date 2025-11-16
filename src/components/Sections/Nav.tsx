"use client";

import React, { useState } from 'react'
import Link from 'next/link';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full bg-[#0c0c0c] text-gray-100 px-4 sm:px-6 lg:px-8 py-4 fixed top-0 z-50">
      {/* Logo */}
      <Link href="/" className="text-xl sm:text-2xl font-bold text-gray-100 hover:text-gray-200 transition-colors">
        Ron Paragoso
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <Link href="#about" className="text-gray-300 hover:text-gray-100 transition-colors">
          About
        </Link>
        <Link href="#projects" className="text-gray-300 hover:text-gray-100 transition-colors">
          Projects
        </Link>
        <Link href="#contact" className="text-gray-300 hover:text-gray-100 transition-colors">
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col items-center justify-center w-6 h-6 space-y-1"
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-gray-100 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-gray-100 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-gray-100 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`absolute top-full left-0 w-full bg-[#0c0c0c] md:hidden transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col py-4 px-4 space-y-4">
          <Link 
            href="#about" 
            className="text-gray-300 hover:text-gray-100 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            href="#projects" 
            className="text-gray-300 hover:text-gray-100 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link 
            href="#contact" 
            className="text-gray-300 hover:text-gray-100 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav