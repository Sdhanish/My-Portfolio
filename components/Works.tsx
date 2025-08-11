import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';

const Works = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: 'Yoga Connect',
      description: 'A comprehensive yoga platform connecting instructors with students. Features include class booking, progress tracking, and community interactions.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Firebase'],
      image: '/works/yoga.png',
      github: 'https://github.com/Sdhanish/Yoga-Connect',
      demo: 'https://yoga-frontend-three.vercel.app/',
      category: 'Full Stack MERN Project',
      emoji: '🧘'
    },
    {
      title: 'Smartfin AI',
      description: 'AI-powered financial management application that provides intelligent insights, budget recommendations, and predictive analytics for personal finance.',
      tech: ['Next.js', 'Supabase', 'Clerk', 'Inngest', 'Arcjet'],
      image: '/works/finance.png',
      github: 'https://github.com/Sdhanish/SmartFin-AI',
      demo: 'https://smart-fin-ai.vercel.app/',
      category: 'Full Stack Next Js Project',
      emoji: '🤖'
    },
    {
      title: 'Notes Application',
      description: 'Full stack notes management app in MERN Stack for skill enhancement',
      tech:  ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      image: '/works/notes.png',
      github: 'https://github.com/Sdhanish/notes-app',
      demo: 'https://notes-app-nc54.onrender.com/',
      category: 'Full Stack',
      emoji: '📋'
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  const toggleViewMore = () => {
    setShowAll(!showAll);
  };

// Define tech colors mapping
const techColors: Record<string, string> = {
  'React.js': 'bg-[#61DBFB]/10 text-[#61DBFB]', // React blue
  'Next.js': 'bg-gray-400 text-white', // Next.js black/white
  'Node.js': 'bg-[#68A063]/10 text-[#68A063]', // Node green
  'Express.js': 'bg-green-200 text-green-500', // Express black
  'MongoDB': 'bg-[#4DB33D]/10 text-[#4DB33D]', // MongoDB green
  'Socket.io': 'bg-gray-400 text-white', // Socket.io black
  'Python': 'bg-orange-100 text-orange-500', // Python blue
  'TensorFlow': 'bg-[#FF6F00]/10 text-[#FF6F00]', // TF orange
  'Firebase': 'bg-[#FFCA28]/10 text-[#FFCA28]', // Firebase yellow
  'Tailwind CSS': 'bg-[#38B2AC]/10 text-[#38B2AC]', // Tailwind teal
  'Vue.js': 'bg-[#42b883]/10 text-[#42b883]', // Vue green
  'Laravel': 'bg-[#FF2D20]/10 text-[#FF2D20]', // Laravel red
  'PostgreSQL': 'bg-[#336791]/10 text-[#336791]', // PG blue
  'Arcjet': 'bg-gray-300 text-black', // Redis red
  'Supabase': 'bg-[#0db7ed]/10 text-[#0db7ed]', // Docker blue
  'Clerk': 'bg-violet-200 text-violet-600 ',
  'Django': 'bg-orange-100 text-blue-500', // Django dark green
  'AWS': 'bg-[#FF9900]/10 text-[#FF9900]', // AWS orange
  'Chart.js': 'bg-[#FF6384]/10 text-[#FF6384]', // Chart.js pink
  'FastAPI': 'bg-[#009688]/10 text-[#009688]', // FastAPI teal
  'Transformers': 'bg-[#FFDF00]/10 text-[#FFDF00]', // Transformers yellow
  'Nuxt.js': 'bg-[#00DC82]/10 text-[#00DC82]', // Nuxt green
  'Cloudinary': 'bg-[#3448C5]/10 text-[#3448C5]', // Cloudinary blue
  'Stripe': 'bg-[#635BFF]/10 text-[#635BFF]', // Stripe purple
};



  
  return (
    <section id="works" className="py-10 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
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
    className="w-full h-40 object-cover "
  />

  {/* Overlay with category */}
  {/* <div className="absolute top-4 left-4">
    <span className="px-3 py-1 bg-white/90  backdrop-blur-sm text-blue-600 dark:text-blue-400 font-medium text-sm rounded-full">
      {project.category}
    </span>
  </div> */}

                {/* Hover overlay with links */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 hover:bg-gray-900/40 ">
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
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

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

                {/* Links */}
                {/* <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                  
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More/Less Button */}
        {projects.length > 3 && (
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