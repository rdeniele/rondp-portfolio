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
            className="block overflow-hidden backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300 rounded-lg group"
        >
            <div className="relative h-48 overflow-hidden">
                <Image 
                    src={image_url}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6 transform transition-all duration-300 group-hover:translate-y-[-4px]">
                <h2 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">{title}</h2>
                <p className="text-gray-300 line-clamp-2 group-hover:text-gray-200 transition-colors duration-300">{description}</p>
            </div>
        </Link>
    );
};

export default ProjectCard;