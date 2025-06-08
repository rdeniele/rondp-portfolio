"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import ProjectCard from '@/components/ProjectCard';

interface Project {
    id: number;
    title: string;
    description: string;
    project_url: string;
    image_url: string;
}

const ProjectsPage = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const { data, error } = await supabase
                .from('projects')
                .select('*');

            if (error) {
                console.error('Error fetching projects:', error);
            } else {
                setProjects(data);
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