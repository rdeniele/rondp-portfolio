"use client";

import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import React, { useState } from "react";
import { projects } from "@/data/projects";
import Image from "next/image";
import ProjectModal from "@/components/ProjectModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 bg-white">
      <Parallax speed={-5}>
        <motion.div
          className="max-w-6xl mx-auto px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Featured Work
          </motion.h2>
          <div className="flex flex-col gap-8 mb-10 lg:grid lg:grid-cols-3">
            {projects.slice(0, 3).map((project, idx) => (
              <motion.button
                key={project.id}
                type="button"
                onClick={() => setSelectedProject(project)}
                className="group block rounded-xl overflow-hidden border border-[#E5E5E5] bg-white transition-shadow hover:shadow-lg focus:outline-none"
                style={{ textDecoration: 'none' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="aspect-[4/3] w-full bg-[#F5F5F5] overflow-hidden relative flex items-center justify-center">
                  <Image
                    src={project.image_url}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ display: 'block' }}
                  />
                  <div className="absolute inset-0 bg-[#E5E5E5]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center">
                    <span className="w-full text-center py-3 text-lg font-bold text-black bg-white/80" style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif' }}>{project.title}</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
          <div className="flex justify-center">
            <motion.a
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium border border-black bg-white text-black transition-all duration-200 hover:bg-[#E5E5E5] group"
              style={{ fontFamily: 'Poppins, Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              See All Work
            </motion.a>
          </div>
        </motion.div>
      </Parallax>

      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          description={selectedProject.description}
          image_url={selectedProject.image_url}
          project_url={selectedProject.project_url}
        />
      )}
    </section>
  );
}