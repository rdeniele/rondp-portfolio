"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import React, { useState } from "react";
import Nav from '@/components/Sections/Nav';
import Footer from '@/components/Sections/Footer';

const experiences = [
  {
    title: "AI Developer",
    company: "Outrank Strategy • North, Centerville, UT",
    date: "Jun 2025 - Present • Remote Contract",
    current: true,
    summary: "Developed an AI automation platform and boosted team speed by 60% through front-end and AI infrastructure.",
  },
  {
    title: "Web Designer/Developer",
    company: "The Rise Collective • Florida, USA",
    date: "Jan 2024 - Feb 2026 • Remote Contract",
    current: true,
    summary: "Designed 10+ real estate sites, generated 300+ leads, and reduced turnaround by 40% via global collaboration.",
  },
  {
    title: "Data Analyst",
    company: "The Rise Collective • Florida, USA",
    date: "Dec 2025 - Jan 2026 • Remote Contract",
    current: false,
    summary: "Implemented analytics and tracking for 10+ sites, delivering actionable performance insights.",
  },
  {
    title: "Web Developer",
    company: "The Rise Collective • Florida, USA",
    date: "Jan 2024 - Jan 2025 • Remote Contract",
    current: false,
    summary: "Developed 5 professional sites, managed affiliate landing pages, and ensured near-zero downtime.",
  },
  {
    title: "Software Developer Intern",
    company: "Green Module Systems • Florida, USA",
    date: "Jan 2024 - Jan 2025 • Remote",
    current: false,
    summary: "Built finance and HR systems, improving efficiency by 60% and reducing bug turnaround by 35%.",
  },
];

const AboutPage = () => {
  const [slide, setSlide] = useState(0);
  const perSlide = 3;
  const totalSlides = Math.ceil(experiences.length / perSlide);

  const goPrev = () => setSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  const goNext = () => setSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

  return (
    <div className="min-h-screen w-full bg-white text-black font-sans flex flex-col">
      <Nav />
      
      <main className="flex-1 flex flex-col items-center py-20 bg-white text-black">
        {/* Back to Home */}
        <div className="max-w-7xl w-full px-6 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors group"
          >
            <svg
              className="w-5 h-5 transform transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7 7l-7-7 7-7" />
            </svg>
            <span className="font-medium" style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}>Back to Home</span>
          </Link>
        </div>

        {/* About Section */}
        <section id="about" className="py-20 bg-white w-full">
          <Parallax speed={-3}>
            <div className="max-w-6xl mx-auto px-6">
              {/* About Me Title */}
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center"
                style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                About Me
              </motion.h1>

              <motion.div
                className="flex flex-col lg:flex-row items-center gap-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <motion.img
                  src="/images/rongradpic2.png"
                  alt="Ron Deniele Paragoso"
                  className="w-full lg:w-1/3 max-w-sm h-auto object-cover rounded-lg border border-black bg-white"
                  style={{ boxShadow: '0 4px 16px 0 rgba(0,0,0,0.08)' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                  viewport={{ once: true }}
                />
                <div className="flex flex-col lg:w-2/3">
                  <motion.p
                    className="text-base mb-4 text-left leading-relaxed"
                    style={{ color: '#222', fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif', fontWeight: 400 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  >
                    Hi, I&apos;m Ron Deniele Paragoso — a creative technologist and problem solver at heart. My journey began with a fascination for how design and technology can shape the way we experience the world. From a young age, I was the kid who took apart gadgets just to see how they worked, and who spent hours experimenting with code and layouts.<br /><br />
                    Over the years, I&apos;ve blended my love for innovation and engineering into a career helping brands and businesses thrive in the digital age. Whether I&apos;m building a scalable web application, developing AI/ML solutions, or creating seamless user experiences, I approach every project with curiosity and a drive to make something meaningful.<br /><br />
                    My work is about more than lines of code — it&apos;s about solving real problems, pushing boundaries, and creating solutions that make a difference. I believe that great technology should be powerful yet intuitive, and that every project is an opportunity to learn something new.<br /><br />
                    When I&apos;m not coding, you&apos;ll find me exploring new technologies, collaborating with talented teams, or simply enjoying quality time brainstorming the next big challenge to tackle.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </Parallax>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-10 w-full">
          <Parallax speed={-3}>
            <motion.div
              className="max-w-2xl mx-auto px-6 flex flex-col items-center gap-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-lg font-semibold mb-5 text-center"
                style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Experience
              </motion.h3>
              <div className="flex flex-col items-center">
                <div className="flex flex-row items-center gap-4">
                  <motion.button
                    aria-label="Previous Experience"
                    onClick={goPrev}
                    className="rounded-full border border-[#E5E5E5] w-8 h-8 flex items-center justify-center bg-white hover:bg-[#F5F5F5] transition"
                    style={{ fontSize: 20, color: '#888' }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    &#8592;
                  </motion.button>
                  <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center">
                    {experiences.slice(slide * perSlide, slide * perSlide + perSlide).map((exp, idx) => (
                      <motion.div
                        key={exp.title + exp.date}
                        className="flex flex-col items-center min-w-[180px] max-w-[240px]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 + idx * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      >
                        <span className={`w-3 h-3 rounded-full border-2 mb-2 ${exp.current ? 'bg-black border-black' : 'bg-[#E5E5E5] border-[#E5E5E5]'}`}></span>
                        <div className="bg-white border border-[#E5E5E5] rounded-lg p-3 text-center min-w-[180px] max-w-[220px]">
                          <div className="text-sm font-bold mb-1" style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}>{exp.title}</div>
                          <div className="text-xs mb-0.5" style={{ color: '#6b7280', fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}>{exp.company}</div>
                          <div className="text-xs mb-1" style={{ color: '#A3A3A3', fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}>{exp.date}</div>
                          <div className="text-xs mt-1" style={{ color: '#444', fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif', fontSize: '13px' }}>{exp.summary}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <motion.button
                    aria-label="Next Experience"
                    onClick={goNext}
                    className="rounded-full border border-[#E5E5E5] w-8 h-8 flex items-center justify-center bg-white hover:bg-[#F5F5F5] transition"
                    style={{ fontSize: 20, color: '#888' }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    &#8594;
                  </motion.button>
                </div>
                <div className="flex flex-row gap-1 mt-3">
                  {Array.from({ length: totalSlides }).map((_, i) => (
                    <span
                      key={i}
                      className={`w-2 h-2 rounded-full ${i === slide ? 'bg-black' : 'bg-[#E5E5E5]'}`}
                      style={{ display: 'inline-block' }}
                    ></span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Parallax>
        </section>

        {/* Personal Interests Section */}
        <section id="interests" className="py-16 w-full bg-white">
          <Parallax speed={-2}>
            <motion.div
              className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-lg font-semibold mb-4 text-center"
                style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                Personal Interests
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {/* Coding */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
                    alt="Coding"
                    className="w-full h-40 object-cover rounded-lg border border-[#E5E5E5] mb-3"
                  />
                  <div className="text-center">
                    <span className="font-bold text-black">Coding</span>
                    <p className="text-gray-700 text-sm mt-1">Building things with code is both my profession and my passion. I enjoy solving problems, automating tasks, and experimenting with new technologies.</p>
                  </div>
                </div>
                {/* AI/ML */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80"
                    alt="AI and Machine Learning"
                    className="w-full h-40 object-cover rounded-lg border border-[#E5E5E5] mb-3"
                  />
                  <div className="text-center">
                    <span className="font-bold text-black">AI & Machine Learning</span>
                    <p className="text-gray-700 text-sm mt-1">Exploring the frontiers of AI and ML fascinates me. From building models to implementing intelligent solutions, this field constantly challenges and excites me.</p>
                  </div>
                </div>
                {/* Working Out */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&w=400&q=80"
                    alt="Working Out"
                    className="w-full h-40 object-cover rounded-lg border border-[#E5E5E5] mb-3"
                  />
                  <div className="text-center">
                    <span className="font-bold text-black">Working Out</span>
                    <p className="text-gray-700 text-sm mt-1">Staying active is important to me. Whether it&apos;s lifting, running, or just moving, working out helps me stay focused, energized, and balanced.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Parallax>
        </section>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-6 text-center py-16">
          <motion.div
            className="border border-[#E5E5E5] rounded-2xl p-12 bg-[#F9F9F9]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}>
              Beyond Development
            </h2>
            <p className="text-lg text-[#555] mb-8" style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}>
              I also explore creative design, branding, and visual storytelling. Check out my creative work and design projects.
            </p>
            <Link
              href="https://ron-creatives.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-medium border-2 border-purple-600 bg-gradient-to-r from-purple-600 to-pink-600 text-white transition-all duration-200 hover:shadow-lg hover:scale-105"
              style={{ fontFamily: 'Poppins, Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}
            >
              <span>View Creatives Portfolio</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
