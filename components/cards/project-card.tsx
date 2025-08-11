'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  tech: string[];
}

interface ProjectCardProps {
  project: Project;
  techColors: Record<string, string>;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, techColors, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 overflow-hidden group"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={project.image}
          alt={`${project.title} thumbnail`}
          className="w-full h-40 object-cover"
        />

        {/* Hover overlay with links */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 hover:bg-gray-900/40">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white dark:bg-gray-800 rounded-full text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
          </motion.a>

          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white dark:bg-gray-800 rounded-full text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white transition-colors duration-300"
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => {
            const colorClasses = techColors[tech] || 'bg-gray-300 text-gray-800';
            return (
              <span
                key={tech}
                className={`px-3 py-1 font-medium text-sm rounded-full ${colorClasses}`}
              >
                {tech}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
