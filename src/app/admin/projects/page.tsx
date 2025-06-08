"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import AdminNav from '@/components/AdminNav';
import Link from 'next/link';


interface Project {
    id: number;
    title: string;
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
            <AdminNav />
            <h1>Manage Projects</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <a href={`/admin/projects/${project.id}`}>{project.title}</a>
                    </li>
                ))}
            </ul>
            {/* <a href="/admin/projects/new">Add New Project</a> */}
            <Link href="/admin/projects/new">Add New Project</Link>
        </div>
    );
};

export default ProjectsPage;