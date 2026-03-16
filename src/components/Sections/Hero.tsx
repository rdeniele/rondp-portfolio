"use client";

import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center bg-white px-6 text-center pt-28 md:pt-32 pb-40" id="hero">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mx-auto gap-8 md:gap-12">
        <Parallax speed={-10} className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-1/3 h-full mb-6 md:mb-0">
          <motion.div
            className="w-40 h-56 md:w-full md:h-[420px] max-w-xs md:max-w-none"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/ronpic4.png"
              alt="Ron portrait"
              fill
              className="rounded-2xl object-cover shadow-lg border border-[#E5E5E5] bg-[#F5F5F5]"
              style={{ aspectRatio: '3 / 4' }}
            />
          </motion.div>
        </Parallax>
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-5 leading-tight tracking-tight"
            style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#111', letterSpacing: '-0.03em' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Full-Stack Developer & <br className="hidden md:inline" /> Digital Problem Solver
          </motion.h1>
          <motion.p
            className="text-base md:text-xl mb-10 max-w-xl mx-auto md:mx-0 text-[#555] font-normal"
            style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            I help transform ideas into clean, responsive, and user-focused web experiences using modern technologies.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start items-center md:items-start w-full">
            <motion.a
              href="#projects"
              className="w-full sm:w-auto px-7 py-2.5 rounded-full font-medium border border-[#222] bg-white text-[#111] hover:bg-[#F5F5F5] transition-colors duration-150 text-base md:text-lg shadow-sm"
              style={{ fontFamily: 'Poppins, Helvetica Neue, Arial, sans-serif' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              See My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="w-full sm:w-auto px-7 py-2.5 rounded-full font-medium border border-[#222] bg-[#111] text-white hover:bg-[#222] transition-colors duration-150 text-base md:text-lg shadow-sm"
              style={{ fontFamily: 'Poppins, Helvetica Neue, Arial, sans-serif' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.a>
          </div>
          {/* Social Icons below buttons */}
          <div className="flex flex-row gap-5 justify-center md:justify-start items-center mt-5">
            <a
              href="https://www.linkedin.com/in/ron-paragoso-a96b1724b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-80 transition-opacity"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {/* LinkedIn SVG: full circle */}
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19" cy="19" r="19" fill="#0077B5"/>
                <path d="M26.5 26.5h-4.1v-6.7c0-1.6-.03-3.7-2.25-3.7-2.25 0-2.6 1.76-2.6 3.58v6.82H13.5V15.5h3.93v1.5h.06c.55-.93 1.8-1.9 3.7-1.9 3.96 0 4.7 2.6 4.7 5.98V26.5zM11.5 13.5a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM13.5 26.5h-4V15.5h4v11z" fill="white"/>
              </svg>
            </a>
            <a
              href="https://github.com/rdeniele"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:opacity-80 transition-opacity"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {/* GitHub SVG: full circle */}
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19" cy="19" r="19" fill="#222"/>
                <path d="M19 10c-5.1 0-9.2 4.1-9.2 9.2 0 4.1 2.7 7.6 6.5 8.7.5.1.7-.2.7-.5v-1.8c-2.6.6-3.1-1.1-3.1-1.1-.4-1-1-1.4-1-1.4-.8-.7.1-.7.1-.7 1 .1 1.4 1 1.4 1 .9 1.4 2.2 1 2.7.8.1-.7.3-1 .5-1.2-2.1-.2-4.3-1.1-4.3-4.5 0-1 .3-1.7.8-2.3-.1-.2-.4-1.1.1-2.2 0 0 .8-.2 2.3.8.7-.2 1.6-.3 2.3-.3.7 0 1.6.1 2.3.3 1.5-1 2.3-.8 2.3-.8.5 1.1.2 2 .1 2.2.5.6.8 1.3.8 2.3 0 3.4-2.2 4.3-4.3 4.5.3.3.5.7.5 1.5v2c0 .3.2.6.7.5 3.8-1.1 6.5-4.6 6.5-8.7C28.2 14.1 24.1 10 19 10z" fill="white"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
