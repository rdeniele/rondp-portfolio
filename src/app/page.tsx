"use client";

// import { useState } from 'react';
// import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa'
// import Link from 'next/dist/client/link';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Home() {

  return (
    <>
      {/* nav bar */}
      <Nav/>
      {/* Main content */}
      <div className="min-h-screen bg-[#efecd9] mt-15 relative">
        {/* Noise overlay */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section */}
          <Hero />
          {/* Featured Projects Section */}
          <Projects />
          {/* Contact Section */}
          <Contact />
          {/* footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}