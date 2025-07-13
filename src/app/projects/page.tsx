"use client"; // Enables client-side rendering in Next.js 13+ for this component

// Import React hooks and modules
import React from 'react';
import ProjectCard from '@/components/ProjectCard'; // Reusable UI component for displaying a project
import { projects } from '@/data/projects'; // Static projects data

// Functional component for displaying all projects
const ProjectsPage = () => {
    return (
        <div>
            <h1>Projects</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {projects.map(project => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        project_url={project.project_url}
                        image_url={project.image_url}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;