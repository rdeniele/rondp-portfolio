"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import AdminNav from '@/components/AdminNav';
import Link from 'next/link';

interface Project {
    id: number;
    title: string;
    order?: number;
}

const ProjectsPage = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [draggedItem, setDraggedItem] = useState<number | null>(null);
    const [isReordering, setIsReordering] = useState(false);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data, error } = await supabase
                    .from('projects')
                    .select('*')
                    .order('order', { ascending: true });

                if (error) {
                    console.error('Error fetching projects:', error);
                    return;
                }

                if (data && data.length > 0) {
                    const projectsWithOrder = data.map((project, index) => ({
                        ...project,
                        order: project.order ?? index
                    }));
                    setProjects(projectsWithOrder);
                } else {
                    setProjects([]);
                }
            } catch (err) {
                console.error('Unexpected error fetching projects:', err);
            }
        };

        fetchProjects();
    }, []);

    const handleDragStart = (e: React.DragEvent, id: number) => {
        setDraggedItem(id);
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handleDrop = async (e: React.DragEvent, targetId: number) => {
        e.preventDefault();
        if (!draggedItem || draggedItem === targetId) return;

        const draggedIndex = projects.findIndex(p => p.id === draggedItem);
        const targetIndex = projects.findIndex(p => p.id === targetId);
        
        if (draggedIndex === -1 || targetIndex === -1) return;

        // Create new array with reordered items
        const newProjects = [...projects];
        const [draggedProject] = newProjects.splice(draggedIndex, 1);
        newProjects.splice(targetIndex, 0, draggedProject);

        // Update order values
        const updatedProjects = newProjects.map((project, index) => ({
            ...project,
            order: index
        }));

        setProjects(updatedProjects);
        setDraggedItem(null);

        // Save to database
        setIsReordering(true);
        try {
            const projectOrders = updatedProjects.map(project => ({
                id: project.id,
                order: project.order
            }));

            const response = await fetch('/api/projects/reorder', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ projectOrders }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to save order');
            }
        } catch (error) {
            console.error('Error saving project order:', error);
            alert(`Failed to save project order: ${error instanceof Error ? error.message : 'Unknown error'}`);
        } finally {
            setIsReordering(false);
        }
    };

    const handleDragEnd = () => {
        setDraggedItem(null);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <AdminNav />
            <div className="max-w-4xl mx-auto p-6">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Manage Projects</h1>
                    <Link 
                        href="/admin/projects/new"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Add New Project
                    </Link>
                </div>

                {isReordering && (
                    <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-blue-800 text-sm">Saving new order...</p>
                    </div>
                )}

                <div className="bg-white rounded-lg shadow-sm border">
                    <div className="p-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">Project Order</h2>
                        <p className="text-sm text-gray-600 mt-1">
                            Drag and drop projects to reorder them. The first project will appear first on the public page.
                        </p>
                    </div>
                    
                    <div className="divide-y divide-gray-200">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                draggable
                                onDragStart={(e) => handleDragStart(e, project.id)}
                                onDragOver={handleDragOver}
                                onDrop={(e) => handleDrop(e, project.id)}
                                onDragEnd={handleDragEnd}
                                className={`p-4 cursor-move hover:bg-gray-50 transition-colors ${
                                    draggedItem === project.id ? 'opacity-50' : ''
                                }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900">{project.title}</h3>
                                            <p className="text-sm text-gray-500">Order: {project.order ?? index}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Link
                                            href={`/admin/projects/${project.id}`}
                                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                        >
                                            Edit
                                        </Link>
                                        <span className="text-gray-400">⋮⋮</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {projects.length === 0 && (
                        <div className="p-8 text-center text-gray-500">
                            <p>No projects found. Create your first project to get started.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;