import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectModal from './ProjectModal';

interface ProjectCardProps {
    title: string;
    description: string;
    project_url: string;
    image_url: string;
}

export default function ProjectCard({
    title,
    description,
    project_url,
    image_url,
}: ProjectCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="group relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                <Link 
                    href={project_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                >
                    <div className="relative aspect-video w-full overflow-hidden">
                    <Image 
                            src={image_url}
                    alt={title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                        <p className="text-gray-300 text-sm line-clamp-2">{description}</p>
                    </div>
                </Link>
                <div className="px-4 pb-4">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                        View details
                    </button>
                </div>
            </div>

            <ProjectModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={title}
                description={description}
                image_url={image_url}
            />
        </>
    );
}