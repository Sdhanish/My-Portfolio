'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Works = () => {
  const projects = [
    {
      title: 'Yoga Connect',
      description: 'A comprehensive yoga platform connecting instructors with students. Features include class booking, video streaming, progress tracking, and community interactions.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io'],
      image: '/api/placeholder/600/400',
      github: 'https://github.com/dhanish5542/yoga-connect',
      demo: 'https://yoga-connect-demo.vercel.app',
      category: 'Full Stack',
    },
    {
      title: 'Smartfin AI',
      description: 'AI-powered financial management application that provides intelligent insights, budget recommendations, and predictive analytics for personal finance.',
      tech: ['Next.js', 'Python', 'TensorFlow', 'Firebase', 'Tailwind CSS'],
      image: '/api/placeholder/600/400',
      github: 'https://github.com/dhanish5542/smartfin-ai',
      demo: 'https://smartfin-ai-demo.vercel.app',
      category: 'AI Integration',
    },
  ];

  return (
    <section id="works" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto rounded"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my expertise in full-stack development 
            and AI integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-64 bg-gradient-to-br from-portfolio-primary/20 to-portfolio-secondary/20 flex items-center justify-center">
                  <div className="text-6xl text-portfolio-primary/50">
                    {project.title === 'Yoga Connect' ? '🧘' : '🤖'}
                  </div>
                </div>
                
                {/* Overlay with category */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-portfolio-primary font-medium text-sm rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Hover overlay with links */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-portfolio-primary hover:text-white transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-portfolio-primary hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-portfolio-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-portfolio-primary/10 text-portfolio-primary font-medium text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border-2 border-portfolio-primary text-portfolio-primary font-medium rounded-lg hover:bg-portfolio-primary hover:text-white transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                  
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;