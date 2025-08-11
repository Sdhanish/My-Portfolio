'use client'

import { projects, techColors } from '@/data/utilsData';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import ProjectCard from './cards/project-card';

const Works = () => {
  const [showAll, setShowAll] = useState(false);



  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  const toggleViewMore = () => {
    setShowAll(!showAll);
  };

// Define tech colors mapping




  
  return (
    <section id="works" className="py-10 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-950 dark:to-gray-900 px-8">
      <div className="max-w-7xl mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
           My Works 🖊️
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-blue-400 mx-auto rounded"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my expertise in full-stack development 
            and AI integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-3/4 mx-auto">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} techColors={techColors} index={index} />
          ))}
        </div>

        {/* View More/Less Button */}
        {projects.length > 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <motion.button
              onClick={toggleViewMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-600 font-semibold rounded-xl transition-all duration-300 dark:text-gray-300"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-5 h-5 mr-2" />
                  View Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-5 h-5 mr-2" />
                  View More
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Works;