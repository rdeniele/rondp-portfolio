"use client"; // Enables client-side rendering in Next.js 13+ for this component

// Import React hooks and modules
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase'; // Supabase client for database access
import ProjectCard from '@/components/ProjectCard'; // Reusable UI component for displaying a project

// Define the structure of a Project object
interface Project {
    id: number;
    title: string;
    description: string;
    project_url: string;
    image_url: string;
    order?: number;
}


// Functional component for displaying all projects
const ProjectsPage = () => {
    // React state to store the list of projects
    const [projects, setProjects] = useState<Project[]>([]);

    // useEffect runs when the component mounts (empty dependency array)
    // Used here to fetch data from Supabase
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Fetch projects ordered by the order field
                const { data, error } = await supabase
                    .from('projects')
                    .select('*')
                    .order('order', { ascending: true });

                if (error) {
                    console.error('Error fetching projects:', error);
                    return;
                }

                if (data && data.length > 0) {
                    setProjects(data);
                } else {
                    setProjects([]);
                }
            } catch (err) {
                console.error('Unexpected error fetching projects:', err);
            }
        };

        fetchProjects();
    }, []);

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