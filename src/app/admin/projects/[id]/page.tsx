"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';

interface Project {
    id: string | number;
    title: string;
    description: string;
    project_url: string;
    image_url: string;
}

export default function EditProjectPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const { id } = params;
    const [project, setProject] = useState<Project | null>(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [project_url, setProjectUrl] = useState('');
    const [image_url, setImageUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProject = async () => {
            if (id) {
                const { data, error } = await supabase
                    .from('projects')
                    .select('*')
                    .eq('id', id)
                    .single();

                if (error) {
                    setError(error.message);
                } else if (data) {
                    setProject(data);
                    setTitle(data.title);
                    setDescription(data.description);
                    setProjectUrl(data.project_url || '');
                    setImageUrl(data.image_url || '');
                }
                setLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        
        const updatedProject = {
            title,
            description,
            project_url,
            image_url
        };

        const { error } = await supabase
            .from('projects')
            .update(updatedProject)
            .eq('id', id);

        if (error) {
            setError(error.message);
        } else {
            router.push('/admin/projects');
        }
        setLoading(false);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Edit Project</h1>
            {project && (
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input 
                            type="text" 
                            id="title" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)}
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <textarea 
                            id="description" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)}
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="project_url">Project URL:</label>
                        <input
                            type="text"
                            id="project_url"
                            value={project_url}
                            onChange={(e) => setProjectUrl(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="image">Image Upload:</label>
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={async (e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    setLoading(true);
                                    
                                    // Upload to Supabase Storage
                                    const fileName = `${Date.now()}-${file.name}`;
                                    const { error } = await supabase
                                        .storage
                                        .from('project-images')
                                        .upload(fileName, file);
                                    
                                    if (error) {
                                        console.error('Error uploading image:', error);
                                        setLoading(false);
                                        return;
                                    }
                                    
                                    // Get the public URL
                                    const { data: { publicUrl } } = supabase
                                        .storage
                                        .from('project-images')
                                        .getPublicUrl(fileName);
                                    
                                    setImageUrl(publicUrl);
                                    setLoading(false);
                                }
                            }}
                        />
                        {image_url && (
                            <div className="image-preview">
                                <Image 
                                    src={image_url} 
                                    alt="Preview" 
                                    width={200} 
                                    height={200} 
                                    style={{ marginTop: '10px', objectFit: 'contain' }} 
                                />
                            </div>
                        )}
                    </div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Updating...' : 'Update Project'}
                    </button>
                </form>
            )}
        </div>
    );
}