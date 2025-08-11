'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Palette, Database, Smartphone, Brain, Globe,
  Server, Monitor, Layers, Zap
} from 'lucide-react';
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiHtml5, SiCss3, SiJavascript, SiPhp, SiFigma, SiCanva
} from 'react-icons/si';

interface Service {
  icon: React.ReactElement;
  title: string;
  description: string;
  techIcons: { icon: React.ReactElement; name: string; color: string }[];
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'MERN Stack Applications',
      description: 'Complete full-stack applications using MongoDB, Express.js, React.js, and Node.js for scalable web solutions.',
      techIcons: [
        { icon: <SiMongodb size={20} />, name: 'MongoDB', color: '#47A248' },
        { icon: <SiExpress size={20} />, name: 'Express.js', color: '#000000' },
        { icon: <SiReact size={20} />, name: 'React.js', color: '#61DAFB' },
        { icon: <SiNodedotjs size={20} />, name: 'Node.js', color: '#339933' }
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full Stack Development',
      description: 'End-to-end web application development with modern technologies, scalable architecture, and best practices.',
      techIcons: [
        { icon: <SiReact size={20} />, name: 'React', color: '#61DAFB' },
        { icon: <SiNodedotjs size={20} />, name: 'Node.js', color: '#339933' },
        { icon: <SiExpress size={20} />, name: 'Express', color: '#000000' },
        { icon: <SiMongodb size={20} />, name: 'MongoDB', color: '#47A248' }
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'Responsive, interactive user interfaces using modern React.js, Next.js, and CSS frameworks.',
      techIcons: [
        { icon: <SiReact size={20} />, name: 'React', color: '#61DAFB' },
        { icon: <SiNextdotjs size={20} />, name: 'Next.js', color: '#000000' },
        { icon: <SiHtml5 size={20} />, name: 'HTML5', color: '#E34F26' },
        { icon: <SiCss3 size={20} />, name: 'CSS3', color: '#1572B6' },
        { icon: <SiJavascript size={20} />, name: 'JavaScript', color: '#F7DF1E' }
      ]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Robust server-side applications, RESTful APIs, and database integration for scalable solutions.',
      techIcons: [
        { icon: <SiNodedotjs size={20} />, name: 'Node.js', color: '#339933' },
        { icon: <SiExpress size={20} />, name: 'Express.js', color: '#000000' },
        { icon: <SiMongodb size={20} />, name: 'MongoDB', color: '#47A248' },
        { icon: <SiMysql size={20} />, name: 'MySQL', color: '#4479A1' }
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'API Development',
      description: 'Custom RESTful APIs and GraphQL endpoints with secure authentication and data validation.',
      techIcons: [
        { icon: <SiNodedotjs size={20} />, name: 'Node.js', color: '#339933' },
        { icon: <SiExpress size={20} />, name: 'Express.js', color: '#000000' },
        { icon: <SiPhp size={20} />, name: 'PHP', color: '#777BB4' }
      ]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Website Development',
      description: 'Professional websites with modern design, SEO optimization, and responsive layouts.',
      techIcons: [
        { icon: <SiReact size={20} />, name: 'React', color: '#61DAFB' },
        { icon: <SiNextdotjs size={20} />, name: 'Next.js', color: '#000000' },
        { icon: <SiHtml5 size={20} />, name: 'HTML5', color: '#E34F26' },
        { icon: <SiCss3 size={20} />, name: 'CSS3', color: '#1572B6' }
      ]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'User-centered design solutions with intuitive interfaces and seamless user experiences.',
      techIcons: [
        { icon: <SiFigma size={20} />, name: 'Figma', color: '#F24E1E' },
        { icon: <SiCanva size={20} />, name: 'Canva', color: '#00C4CC' }
      ]
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Poster & Logo Design',
      description: 'Creative graphic design solutions for branding, marketing materials, and visual identity.',
      techIcons: [
        { icon: <SiFigma size={20} />, name: 'Figma', color: '#F24E1E' },
        { icon: <SiCanva size={20} />, name: 'Canva', color: '#00C4CC' }
      ]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-Powered Solutions',
      description: 'Intelligent web applications with AI integration, chatbots, and machine learning capabilities.',
      techIcons: [
        { icon: <Zap size={20} />, name: 'Gemini', color: '#4285F4' },
        { icon: <Brain size={20} />, name: 'ChatGPT', color: '#10A37F' },
        { icon: <Zap size={20} />, name: 'Claude', color: '#D97706' }
      ]
    }
  ];

  return (
    <section id="services" className=" dark:bg-gray-950 dark:to-gray-900 transition-colors duration-300 px-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Services I Offer
          </h2>
          <div className="w-20 h-1  bg-gradient-to-r from-blue-300 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg mt-6 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            I provide comprehensive web development services from concept to deployment,
            specializing in modern technologies and AI integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-8 rounded-xl shadow-lg border group bg-gradient-to-br from-white to-gray-50 border-gray-100 hover:shadow-xl dark:from-gray-800 dark:to-gray-700 dark:border-gray-600/30 dark:hover:shadow-portfolio-primary/10"
            >
              <div className="w-12 h-12  bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-portfolio-primary transition-colors duration-300 text-gray-900 dark:text-gray-100">
                {service.title}
              </h3>

              <p className="leading-relaxed mb-6 text-gray-600 dark:text-gray-300">
                {service.description}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-200/20 dark:border-gray-600/20">
                {service.techIcons.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                    className="p-2 rounded-lg bg-gray-100/60 hover:bg-gray-200/80 dark:bg-gray-600/30 dark:hover:bg-gray-500/50 transition-all duration-300"
                    title={tech.name}
                  >
                    <div
                      style={{
                        color: tech.color,
                        filter: 'brightness(1.1) saturate(1.1)'
                      }}
                    >
                      {tech.icon}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
