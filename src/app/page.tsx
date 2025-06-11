"use client";

import { useEffect, useState, useRef } from 'react';
import { supabase } from '@/lib/supabase'
import { Canvas } from '@react-three/fiber'
import { GalaxyBackground } from '@/components/GalaxyBackground'
import TypewriterText from '@/components/TypewriterText';
import styles from './animations.module.css'
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa'
import Image from 'next/image'
import ProjectModal from '@/components/ProjectModal'

interface Project {
  id: number
  title: string
  description: string
  project_url: string
  image_url: string
  created_at: string
  technologies: string[]
}

async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Error fetching projects:', error)
    return []
  }

  return data || []
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = ['home', 'projects', 'contact'];
      const sectionHeights = sections.map(section => {
        const element = document.getElementById(section);
        return element ? element.offsetTop : 0;
      });

      const currentSection = sectionHeights.reduce((closest, height, index) => {
        if (scrollTop >= height - 100) {
          return index;
        }
        return closest;
      }, 0);

      setActiveSection(sections[currentSection]);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const scrollToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(projects.length - 1);
    }
  };

  // Update the carousel track position when currentIndex changes
  useEffect(() => {
    if (carouselRef.current) {
      const offset = currentIndex * -370; // 350px width + 20px gap
      carouselRef.current.style.transform = `translateX(${offset}px)`;
    }
  }, [currentIndex]);

  return (
    <div className={styles.mainContainer}>
      {/* Background container */}
      <div className={styles.backgroundContainer} />
      
      {/* Three.js Background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <GalaxyBackground />
        </Canvas>
      </div>

      {/* Navigation */}
      <nav className={styles.navContainer}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-lg sm:text-xl font-semibold text-white">RP</div>
            <div className="flex gap-4 sm:gap-8">
              {['home', 'projects', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                  className={`text-sm sm:text-base text-white hover:text-indigo-400 transition-colors ${styles.navLink}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className={styles.snapContainer} ref={containerRef}>
        <div className={styles.scrollProgress} style={{ transform: `scaleX(${scrollProgress / 100})` }} />
        
        {/* Scroll indicator dots */}
        <div className={styles.scrollDots}>
          {['home', 'projects', 'contact'].map((section) => (
            <div
              key={section}
              className={`${styles.scrollDot} ${activeSection === section ? styles.active : ''}`}
              onClick={() => scrollToSection(section)}
            />
          ))}
        </div>

        {/* Hero Section */}
        <section id="home" className={`${styles.snapSection} ${styles.sectionTransition} ${activeSection === 'home' ? styles.active : ''}`}>
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-8">
            <div className="space-y-6 sm:space-y-8">
              <h1 className={`${styles.shiningHeading} text-4xl sm:text-5xl md:text-7xl font-bold leading-tight`}>
                <TypewriterText 
                  text="Transforming innovative ideas into scalable software systems"
                  className="inline-block"
                />
              </h1>

              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-semibold text-white ${styles.animateFloat}`}>
                Ron Paragoso
              </h2>
              <p className={`text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl ${styles.animateFadeIn}`}>
                Philippines/US-based software engineer with hands-on experience in web development using Next.js, Laravel, ASP.NET, TypeScript, and machine learning.
              </p>

              {/* Social Media Links */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/rdeniele"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialButton} flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium`}
                >
                  <FaGithub className="text-xl" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ron-paragoso-a96b1724b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialButton} flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium`}
                >
                  <FaLinkedin className="text-xl" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialButton} flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium`}
                >
                  <FaFileAlt className="text-xl" />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`${styles.snapSection} ${styles.sectionTransition} ${activeSection === 'projects' ? styles.active : ''}`}>
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 relative z-30">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 sm:mb-8">Projects</h2>
            
            {/* Projects Carousel */}
            <div className={styles.carouselContainer}>
              <div className={styles.carouselTrack} ref={carouselRef}>
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`${styles.carouselItem} ${
                      index === currentIndex ? styles.active : ''
                    }`}
                  >
                    <div className={styles.projectCard}>
                      <div className={styles.projectImage}>
                        <Image
                          src={project.image_url}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className={styles.projectContent}>
                        <div>
                          <h3 className={styles.projectTitle}>{project.title}</h3>
                          <p className={styles.projectDescription}>{project.description}</p>
                          {project.technologies && project.technologies.length > 0 && (
                            <div className={styles.projectTechnologies}>
                              {project.technologies.map((tech) => (
                                <span key={tech} className={styles.technologyTag}>
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <button
                          className={styles.viewDetailsButton}
                          onClick={() => setSelectedProject(project)}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Navigation */}
              <div className={styles.carouselNavigation}>
                <button
                  onClick={scrollToPrev}
                  className={styles.carouselButton}
                  aria-label="Previous project"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button
                  onClick={scrollToNext}
                  className={styles.carouselButton}
                  aria-label="Next project"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>

              {/* Dots Indicator */}
              <div className={styles.carouselDots}>
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`${styles.carouselDot} ${
                      index === currentIndex ? styles.active : ''
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            title={selectedProject.title}
            description={selectedProject.description}
            image_url={selectedProject.image_url}
          />
        )}

        {/* Contact Section */}
        <section id="contact" className={`${styles.snapSection} ${styles.sectionTransition} ${activeSection === 'contact' ? styles.active : ''}`}>
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 sm:mb-8">Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="backdrop-blur-md bg-white/5 rounded-lg p-8 border border-white/10">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <a 
                    href="mailto:work.rparagoso@gmail.com" 
                    className="flex items-center text-lg sm:text-xl text-white hover:text-indigo-400 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mr-4 group-hover:bg-indigo-500/20 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-white/60">Email</div>
                      <div>work.rparagoso@gmail.com</div>
                    </div>
                  </a>
                  <a 
                    href="tel:+639159427791" 
                    className="flex items-center text-lg sm:text-xl text-white hover:text-indigo-400 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mr-4 group-hover:bg-indigo-500/20 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-white/60">Phone</div>
                      <div>+639159427791</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="backdrop-blur-md bg-white/5 rounded-lg p-8 border border-white/10">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">Connect</h3>
                <div className="space-y-6">
                  <a 
                    href="https://github.com/rdeniele" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-lg sm:text-xl text-white hover:text-indigo-400 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mr-4 group-hover:bg-indigo-500/20 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-white/60">GitHub</div>
                      <div>@rdeniele</div>
                    </div>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/ron-paragoso-a96b1724b/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-lg sm:text-xl text-white hover:text-indigo-400 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mr-4 group-hover:bg-indigo-500/20 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-white/60">LinkedIn</div>
                      <div>Ron Paragoso</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footerContainer}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-center h-16">
            <span className="text-sm text-white/60">© {new Date().getFullYear()} Ron Paragoso. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}