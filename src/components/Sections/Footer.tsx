"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#E5E5E5] bg-white">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.p
          className="text-sm"
          style={{ color: '#A3A3A3', fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} Ron Deniele Paragoso. All rights reserved.
        </motion.p>
        <div className="flex items-center gap-6">
          <motion.a
            href="mailto:work.rparagoso@gmail.com"
            className="transition-colors hover:text-black text-[#A3A3A3]"
            aria-label="Email"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
          >
            Email
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ron-paragoso-a96b1724b/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-black text-[#A3A3A3]"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com/rdeniele"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-black text-[#A3A3A3]"
            aria-label="GitHub"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
          >
            GitHub
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
}