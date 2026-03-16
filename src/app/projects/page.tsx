"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { Project, projects } from '@/data/projects';
import ProjectModal from '@/components/ProjectModal';
import Nav from '@/components/Sections/Nav';
import Footer from '@/components/Sections/Footer';

// Define categories based on technologies
const categories = [
  'Web/Mobile Development', 
  'Design & Development',
  'AI/ML/Data Science',
  'Unity / Game Development'
];

const getProjectCategory = (project: Project): string => {
  const techs = project.technologies.map(t => t.toLowerCase());
  
  // Check for Unity / Game Development projects first
  if (techs.some(t => 
    t.includes('unity') || 
    t.includes('c#') || 
    t.includes('c++') ||
    t.includes('godot') ||
    t.includes('game development') ||
    t.includes('game engine')
  )) {
    return 'Unity / Game Development';
  }

  // Check for AI/ML/Data Science projects
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
    <div className="bg-white min-h-screen w-full font-sans text-black">
      <Nav />
      
      <main className="pt-24 pb-16">
        {/* Back to Home - Top Left */}
        <div className="max-w-7xl mx-auto px-6 mb-8">
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

        {/* Header */}
        <Parallax speed={-5}>
          <motion.div
            className="max-w-7xl mx-auto px-6 mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center"
              style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              My Projects
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-center text-[#555] max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              A collection of my work across web development, AI/ML, and data science
            </motion.p>
          </motion.div>
        </Parallax>

        {/* Categories */}
        <motion.div
          className="max-w-7xl mx-auto px-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, idx) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium border transition-all duration-200 ${
                  selectedCategory === category
                    ? 'border-black bg-black text-white'
                    : 'border-[#E5E5E5] bg-white text-black hover:bg-[#F5F5F5]'
                }`}
                style={{ fontFamily: 'Poppins, Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + idx * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.button
                key={project.id}
                type="button"
                onClick={() => setSelectedProject(project)}
                className="group block rounded-xl overflow-hidden border border-[#E5E5E5] bg-white transition-shadow hover:shadow-lg focus:outline-none text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + idx * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="aspect-[4/3] w-full bg-[#F5F5F5] overflow-hidden relative">
                  <Image
                    src={project.image_url}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#555] mb-4 line-clamp-2" style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}>
                    {project.description}
                  </p>
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs rounded-full bg-[#F5F5F5] text-[#555]" style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}>
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 text-xs rounded-full bg-[#F5F5F5] text-[#555]" style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}>
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            isOpen={true}
            onClose={() => setSelectedProject(null)}
            title={selectedProject.title}
            description={selectedProject.description}
            image_url={selectedProject.image_url}
            project_url={selectedProject.project_url}
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;