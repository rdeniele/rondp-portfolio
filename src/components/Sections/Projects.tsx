import React, { useState } from 'react'
import { Project, projects } from '@/data/projects'
import Image from 'next/image'
import ProjectModal from '@/components/ProjectModal'

function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="bg-[#1a1c22] py-8 sm:py-12 lg:py-16 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem]" id='projects'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 lg:mb-10 gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-gray-100 text-center sm:text-left">
              Featured Projects 
              <span className="text-gray-500 text-xl sm:text-2xl lg:text-6xl font-semibold block sm:inline"> (3)</span>
            </h2>

            {/* view all projects button */}
            <a
              href="/projects"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-gray-600 hover:border-gray-500 bg-[#1a1c22] hover:bg-white hover:text-black text-gray-200 font-medium transition-colors text-sm sm:text-base"
            >
              <span>View All Projects</span>
            </a>
          </div>
          
          {/* Project showcase - alternating left/right layout */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12 px-2 sm:px-4 lg:px-8">
            {projects.slice(0, 3).map((project, index) => (
              <div
                key={project.id}
                className={`flex flex-col lg:flex-row gap-6 sm:gap-8 items-center ${
                  // This is the key: use modulo operator to alternate layout direction
                  // index % 2 === 1 means odd-numbered projects (index 1, 3, 5...)
                  // will have flex-row-reverse, making them appear right-to-left
                  // Even-numbered projects (index 0, 2, 4...) use normal flex-row (left-to-right)
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Project Image - always takes up half the width on large screens */}
                <div className="flex-shrink-0 w-full lg:w-1/2">
                  <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 cursor-pointer">
                    <Image
                      onClick={() => setSelectedProject(project)}
                      src={project.image_url}
                      alt={project.title}
                      fill
                      className="object-cover rounded-lg sm:rounded-xl lg:rounded-2xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Project Content - takes up the other half */}
                <div className="flex-1 w-full lg:w-1/2">
                  <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
                    {/* Large project number (01, 02, 03) */}
                    <span className="text-5xl sm:text-6xl lg:text-9xl font-semibold text-gray-300 block">
                      {/* padStart(2, '0') ensures numbers are always 2 digits with leading zero */}
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-100">{project.title}</h3>
                    
                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technology tags */}
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-md bg-[#23272f] text-gray-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
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
    </>
  )
}

export default Projects