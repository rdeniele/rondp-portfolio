import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
    title: string;
    description: string;
    project_url: string;
    image_url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, project_url, image_url }) => {
    return (
        <Link 
            href={project_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
        >
            <div className="relative h-48">
                <Image 
                    src={image_url}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700 line-clamp-2">{description}</p>
            </div>
        </Link>
    );
};

export default ProjectCard;