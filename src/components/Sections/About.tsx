"use client";

import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <Parallax speed={-3}>
        <motion.div
          className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-[#555] mb-8 max-w-2xl"
            style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Hi, I&apos;m Ron Deniele Paragoso — a Computer Science graduate passionate about software development, AI/ML, and creating innovative digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium border border-black bg-white text-black transition-all duration-200 hover:bg-[#E5E5E5] group"
              style={{ fontFamily: 'Poppins, Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}
            >
              <span>Learn More About Me</span>
              <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </Parallax>
    </section>
  );
}
