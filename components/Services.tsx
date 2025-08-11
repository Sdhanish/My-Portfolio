'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Smartphone, Brain, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full Stack Development',
      description: 'End-to-end web application development using MERN stack with scalable architecture and modern best practices.',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Web Design & UI/UX',
      description: 'Creating beautiful, intuitive user interfaces and seamless user experiences with modern design principles.',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Building robust APIs, database design, and server-side logic with Node.js, Express, and database integration.',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'Responsive web applications using React.js, Next.js, and modern CSS frameworks for optimal user experience.',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-Powered Solutions',
      description: 'Integrating artificial intelligence and machine learning capabilities into web applications for enhanced functionality.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'MERN Applications',
      description: 'Complete MERN stack applications with MongoDB, Express.js, React.js, and Node.js for full-scale solutions.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Services I Offer
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto rounded"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            I provide comprehensive web development services from concept to deployment, 
            specializing in modern technologies and AI integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-portfolio-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
