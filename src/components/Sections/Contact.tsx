"use client";

import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900">
      <Parallax speed={-2}>
        <motion.div
          className="max-w-2xl mx-auto px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center text-black dark:text-white"
            style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Contact
          </motion.h2>
          <motion.form
            className="flex flex-col gap-6 mb-10"
            onSubmit={e => { e.preventDefault(); alert('Message sent!'); }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="px-5 py-3 rounded-lg border border-[#E5E5E5] dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-[#A3A3A3] dark:placeholder-gray-500 focus:outline-none focus:border-black dark:focus:border-white transition"
              style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif', fontWeight: 400 }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="px-5 py-3 rounded-lg border border-[#E5E5E5] dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-[#A3A3A3] dark:placeholder-gray-500 focus:outline-none focus:border-black dark:focus:border-white transition"
              style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif', fontWeight: 400 }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="px-5 py-3 rounded-lg border border-[#E5E5E5] dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-[#A3A3A3] dark:placeholder-gray-500 focus:outline-none focus:border-black dark:focus:border-white transition"
              style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif', fontWeight: 400 }}
            />
            <motion.button
              type="submit"
              className="w-full md:w-auto px-8 py-3 rounded-full font-medium border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black transition-all duration-200 hover:bg-[#1A1A1A] dark:hover:bg-gray-200"
              style={{ fontFamily: 'Poppins, Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Send Message
            </motion.button>
          </motion.form>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center">
            <a href="mailto:work.rparagoso@gmail.com" className="underline text-black dark:text-gray-300 text-base hover:text-[#1A1A1A] dark:hover:text-white transition" style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}>
              work.rparagoso@gmail.com
            </a>
            <span className="hidden md:inline-block text-[#E5E5E5] dark:text-gray-700">|</span>
            <a href="https://www.linkedin.com/in/ron-paragoso-a96b1724b/" target="_blank" rel="noopener noreferrer" className="underline text-black dark:text-gray-300 text-base hover:text-[#1A1A1A] dark:hover:text-white transition" style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}>
              LinkedIn
            </a>
            <span className="hidden md:inline-block text-[#E5E5E5] dark:text-gray-700">|</span>
            <a href="https://github.com/rdeniele" target="_blank" rel="noopener noreferrer" className="underline text-black dark:text-gray-300 text-base hover:text-[#1A1A1A] dark:hover:text-white transition" style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}>
              GitHub
            </a>
          </div>
        </motion.div>
      </Parallax>
    </section>
  );
}