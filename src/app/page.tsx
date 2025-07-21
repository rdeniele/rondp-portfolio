"use client";

import { useState } from 'react';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa'
import Image from 'next/image'
import ProjectModal from '@/components/ProjectModal'
import { Project, projects } from '@/data/projects'

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showSocials, setShowSocials] = useState(false);

  return (
    <div className="min-h-screen bg-[#23272f]">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 border-2 border-gray-600 rounded-2xl p-10 bg-[#2d323b]/90 relative">
          <button
            onClick={() => setShowSocials((prev) => !prev)}
            className="absolute -top-5 right-8 px-8 py-2 rounded-t-xl rounded-b-lg bg-[#23272f] border-2 border-gray-600 text-gray-200 font-semibold shadow-md hover:bg-[#23272f]/90 hover:text-white transition-colors transition-transform hover:scale-105 z-20"
            style={{boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)'}}
          >
            {showSocials ? 'Hide' : 'Connect'}
          </button>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-100 mb-6">
            Hi, I am Ron
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 text-justify">
            I build robust, user-friendly apps with Laravel, PHP, and Python. I love learning, enjoy teamwork, and I’m currently exploring the world of JavaScript!
          </p>
          {showSocials && (
            <div className="flex justify-between gap-4 w-full max-w-xl mx-auto mt-8">
              <a
                href="https://github.com/rdeniele"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-600 hover:border-gray-500 bg-[#23272f] text-gray-200 font-medium transition-colors transition-transform hover:scale-105"
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ron-paragoso-a96b1724b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-600 hover:border-gray-500 bg-[#23272f] text-gray-200 font-medium transition-colors transition-transform hover:scale-105"
              >
                <FaLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-600 hover:border-gray-500 bg-[#23272f] text-gray-200 font-medium transition-colors transition-transform hover:scale-105"
              >
                <FaFileAlt className="text-xl" />
                <span>Resume</span>
              </a>
            </div>
          )}
        </div>

        {/* Featured Projects Section */}
        <div className="space-y-8 mb-16">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-100">Featured Projects</h2>
            <a
              href="/projects"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-600 hover:border-gray-500 bg-[#2d323b] text-gray-200 font-medium transition-colors"
            >
              <span>View All</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project) => (
              <div
                key={project.id}
                className="bg-[#2d323b] rounded-lg overflow-hidden border border-gray-600 transition-all duration-300 hover:border-gray-500 hover:shadow-lg transition-transform hover:scale-105"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={project.image_url}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2 mb-4">{project.description}</p>
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs rounded-md bg-[#23272f] text-gray-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center text-gray-300 hover:text-gray-100 text-sm font-medium transition-colors"
                  >
                    <span>View Details</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section - Minimal */}
        <div className="flex flex-col items-center space-y-6 py-8">
          <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
          <div className="flex items-center gap-8">
            <a
              href="mailto:work.rparagoso@gmail.com"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group transition-transform hover:scale-110"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">work.rparagoso@gmail.com</span>
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="tel:+639159427791"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group transition-transform hover:scale-110"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium">+639159427791</span>
            </a>
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            title={selectedProject.title}
            description={selectedProject.description}
            image_url={selectedProject.image_url}
            project_url={selectedProject.project_url}
          />
        )}
      </div>
    </div>
  );
}