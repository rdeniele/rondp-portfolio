"use client";

import { useEffect, useState, useRef } from 'react';
import { supabase } from '@/lib/supabase'
import ProjectCard from '@/components/ProjectCard'
import { Canvas } from '@react-three/fiber'
import { GalaxyBackground } from '@/components/GalaxyBackground'

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
    <main className="min-h-screen flex flex-col relative bg-black">
      {/* Three.js Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <GalaxyBackground />
        </Canvas>
      </div>

      {/* Content */}
      <div className="mt-8 relative z-10">
        <div className="p-8 max-w-7xl mx-auto w-full">
          <div className="mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Turning sparks of thought into structured systems
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Ron Paragoso
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl">
              Experienced software engineer from the Philippines with knowledge in Next.js, TypeScript, and applied machine learning.
            </p>
          </div>

          {/* social media links */}
          <div className="max-w-7xl mx-auto w-full flex gap-4">
            <a
              href="https://github.com/rdeniele"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-indigo-500/30 rounded-lg shadow-sm text-sm font-medium text-white backdrop-blur-md bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 hover:from-indigo-500/30 hover:via-purple-500/30 hover:to-pink-500/30 hover:border-indigo-500/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ron-paragoso-a96b1724b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-purple-500/30 rounded-lg shadow-sm text-sm font-medium text-white backdrop-blur-md bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 hover:from-purple-500/30 hover:via-pink-500/30 hover:to-indigo-500/30 hover:border-purple-500/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-pink-500/30 rounded-lg shadow-sm text-sm font-medium text-white backdrop-blur-md bg-gradient-to-r from-pink-500/20 via-indigo-500/20 to-purple-500/20 hover:from-pink-500/30 hover:via-indigo-500/30 hover:to-purple-500/30 hover:border-pink-500/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>
          </div>
        </div>

        <div className="px-8 max-w-7xl mx-auto w-full">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">Projects</h2>
        </div>

        {/* projects carousel */}
        <div className="w-full overflow-hidden mx-4">
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={scrollToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div key={batchIndex} className="w-full flex-shrink-0 px-4">
                  <div className="grid grid-cols-3 gap-4">
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
            <div className="flex justify-center gap-2 mt-4">
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
    </main>
  );
}