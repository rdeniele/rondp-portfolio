"use client";

import { useEffect, useState, useRef } from 'react';
import { supabase } from '@/lib/supabase'
import ProjectCard from '@/components/ProjectCard'
import { Canvas } from '@react-three/fiber'
import { GalaxyBackground } from '@/components/GalaxyBackground'
import TypewriterText from '@/components/TypewriterText';

interface Project {
  id: number
  title: string
  description: string
  project_url: string
  image_url: string
  created_at: string
}

async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Error fetching projects:', error)
    return []
  }

  return data || []
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  const scrollToNext = () => {
    if (currentIndex < Math.ceil(projects.length / 3) - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const scrollToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(Math.ceil(projects.length / 3) - 1);
    }
  };

    return (
    <main className="h-screen flex flex-col relative bg-black overflow-y-scroll snap-y snap-mandatory">
      {/* Three.js Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <GalaxyBackground />
        </Canvas>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-lg sm:text-xl font-semibold text-white">RP</div>
            <div className="flex gap-4 sm:gap-8">
              <a href="#home" className="text-sm sm:text-base text-white hover:text-indigo-400 transition-colors">Home</a>
              <a href="#projects" className="text-sm sm:text-base text-white hover:text-indigo-400 transition-colors">Projects</a>
              <a href="#contact" className="text-sm sm:text-base text-white hover:text-indigo-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="h-screen flex items-center justify-center snap-start">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-8">
            <div className="space-y-6 sm:space-y-8">

              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
                <TypewriterText 
                text="Transforming innovative ideas into scalable software systems"
                className="inline-block"/>
              </h1>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                Ron Paragoso
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl">
                Philippines/US-based software engineer with hands-on experience in web development using Next.js, Laravel, ASP.NET, TypeScript, and machine learning.
              </p>

              {/* Social Media Links */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
                <a
                  href="https://github.com/rdeniele"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border border-indigo-500/30 rounded-lg text-sm sm:text-base font-medium text-white backdrop-blur-md bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 hover:from-indigo-500/30 hover:via-purple-500/30 hover:to-pink-500/30 hover:border-indigo-500/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ron-paragoso-a96b1724b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border border-purple-500/30 rounded-lg text-sm sm:text-base font-medium text-white backdrop-blur-md bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 hover:from-purple-500/30 hover:via-pink-500/30 hover:to-indigo-500/30 hover:border-purple-500/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border border-pink-500/30 rounded-lg text-sm sm:text-base font-medium text-white backdrop-blur-md bg-gradient-to-r from-pink-500/20 via-indigo-500/20 to-purple-500/20 hover:from-pink-500/30 hover:via-indigo-500/30 hover:to-purple-500/30 hover:border-pink-500/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="h-screen flex items-center justify-center snap-start">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 sm:mb-8">Projects</h2>
            
            {/* Projects Carousel */}
            <div className="w-full overflow-hidden">
              <div className="relative">
                {/* Navigation Buttons */}
                <button
                  onClick={scrollToPrev}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={scrollToNext}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Carousel Container */}
                <div 
                  ref={carouselRef}
                  className="flex transition-transform duration-1000 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, batchIndex) => (
                    <div key={batchIndex} className="w-full flex-shrink-0 px-2 sm:px-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {projects.slice(batchIndex * 3, (batchIndex + 1) * 3).map((project) => (
                          <div key={project.id}>
                            <ProjectCard
                              title={project.title}
                              description={project.description}
                              project_url={project.project_url}
                              image_url={project.image_url}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                  {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        currentIndex === index ? 'bg-blue-400' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="h-screen flex items-center justify-center snap-start">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 sm:mb-8">Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="backdrop-blur-md bg-white/5 rounded-lg p-8 border border-white/10">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <a 
                    href="mailto:work.rparagoso@gmail.com" 
                    className="flex items-center text-lg sm:text-xl text-white hover:text-indigo-400 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mr-4 group-hover:bg-indigo-500/20 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-white/60">Email</div>
                      <div>work.rparagoso@gmail.com</div>
                    </div>
                  </a>
                  <a 
                    href="tel:+639159427791" 
                    className="flex items-center text-lg sm:text-xl text-white hover:text-indigo-400 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mr-4 group-hover:bg-indigo-500/20 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-white/60">Phone</div>
                      <div>+639159427791</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="backdrop-blur-md bg-white/5 rounded-lg p-8 border border-white/10">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">Connect</h3>
                <div className="space-y-6">
                  <a 
                    href="https://github.com/rdeniele" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-lg sm:text-xl text-white hover:text-indigo-400 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mr-4 group-hover:bg-indigo-500/20 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-white/60">GitHub</div>
                      <div>@rdeniele</div>
                    </div>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/ron-paragoso-a96b1724b/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-lg sm:text-xl text-white hover:text-indigo-400 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mr-4 group-hover:bg-indigo-500/20 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-white/60">LinkedIn</div>
                      <div>Ron Paragoso</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex items-center justify-center h-16">
              <span className="text-sm text-white/60">© {new Date().getFullYear()} Ron Paragoso. All rights reserved.</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
    );
}