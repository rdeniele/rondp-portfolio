"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project, projects } from '@/data/projects';
import ProjectModal from '@/components/ProjectModal';

// Define categories based on technologies
const categories = [
  'Web/Mobile Development',
  'Design & Development',
  'AI/ML/Data Science'
];

const getProjectCategory = (project: Project): string => {
  const techs = project.technologies.map(t => t.toLowerCase());
  
  // Check for AI/ML/Data Science projects first
  if (techs.some(t => 
    t.includes('tensorflow') || 
    t.includes('scikit-learn') || 
    t.includes('pandas') ||
    t.includes('cnn') ||
    t.includes('rnn') ||
    t.includes('opencv')
  )) {
    return 'AI/ML/Data Science';
  }

  // Check for Web Design & Development
  if (techs.some(t => 
    t.includes('figma') || 
    t.includes('ui/ux') || 
    t.includes('design') || 
    t.includes('wordpress') || 
    t.includes('guesty')
  ) && !techs.some(t =>
    t.includes('next.js') ||
    t.includes('react') ||
    t.includes('node')
  )) {
    return 'Design & Development';
  }

  // All other projects are Web/Mobile Development
  return 'Web/Mobile Development';
};

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Web/Mobile Development');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(project => getProjectCategory(project) === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="relative w-full h-72">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-purple-900 opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">My Projects</h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto px-4">
              A collection of my work across web development, AI/ML, and data science
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`group relative px-6 py-3 rounded-xl backdrop-blur-md border border-white/20 font-medium transition-all duration-300 overflow-hidden ${
                selectedCategory === category
                  ? 'bg-white/20 text-white'
                  : 'bg-white/10 hover:bg-white/15 text-white'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 transition-opacity duration-300 ${
                selectedCategory === category ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
              }`} />
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="backdrop-blur-md bg-white/5 rounded-lg overflow-hidden border border-white/10 transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={project.image_url}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 text-sm rounded-md bg-white/10 text-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full group relative inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden transition-all duration-300 hover:bg-white/20"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10 text-white font-medium mr-2 transform transition-transform duration-300 group-hover:translate-x-[-8px]">
                        View Details
                      </span>
                      <svg 
                        className="relative z-10 w-5 h-5 text-white transform transition-transform duration-300 group-hover:translate-x-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <svg 
              className="relative z-10 w-5 h-5 text-white transform transition-transform duration-300 group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7 7l-7-7 7-7" />
            </svg>
            <span className="relative z-10 text-white font-medium">Back to Home</span>
          </Link>
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
  );
};

export default ProjectsPage;