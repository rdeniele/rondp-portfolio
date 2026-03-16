"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-[#E5E5E5] dark:border-gray-700">
      <motion.div
        className="max-w-7xl mx-auto px-6 py-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-black dark:text-white" style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', letterSpacing: '-0.02em' }}>
            Ron Paragoso
          </Link>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href + link.label}
                href={link.href}
                className="nav-link text-black dark:text-gray-200 hover:underline transition-colors text-sm tracking-wide font-medium"
                style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
          
          {/* Burger menu button for mobile */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">Open menu</span>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="stroke-[#222] dark:stroke-white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          
          <motion.a
            href="#contact"
            className="hidden md:inline-block px-6 py-2 rounded-full text-sm font-medium border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black transition-all duration-200 hover:bg-[#1A1A1A] dark:hover:bg-gray-200"
            style={{ fontFamily: 'Poppins, Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Let&apos;s Talk
          </motion.a>
        </div>
        
        {/* Mobile menu overlay */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-black/40 flex flex-col" onClick={() => setMenuOpen(false)}>
            <div className="bg-white dark:bg-gray-800 w-4/5 max-w-xs h-full shadow-xl p-6 flex flex-col gap-6 animate-slideInLeft" onClick={e => e.stopPropagation()}>
              <button
                className="self-end text-2xl text-gray-500 hover:text-black dark:hover:text-white focus:outline-none mb-4"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                &times;
              </button>
              {navLinks.map((link) => (
                <motion.a
                  key={link.href + link.label}
                  href={link.href}
                  className="block text-black dark:text-gray-200 text-lg font-medium py-2 px-2 rounded hover:bg-[#F5F5F5] dark:hover:bg-gray-700 transition-colors"
                  style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}
                  onClick={() => setMenuOpen(false)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </nav>
  );
}