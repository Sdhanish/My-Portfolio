'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    { name: 'React.js', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Redux', category: 'State Management' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Firebase', category: 'Database' },
    { name: 'MySQL', category: 'Database' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'Java', category: 'Language' },
    { name: 'Python', category: 'Language' },
    { name: 'PHP', category: 'Language' },
  ];

  const titles = [
    'Full Stack Developer',
    'MERN Stack Developer',
    'Frontend Developer', 
    'Backend Developer',
    'React.js Developer',
    'Web Designer',
    'Web Developer'
  ];

  const skills = [
    { name: 'Frontend Development', percentage: 95 },
    { name: 'Backend Development', percentage: 90 },
    { name: 'Database Design', percentage: 85 },
    { name: 'UI/UX Design', percentage: 80 },
    { name: 'API Development', percentage: 90 },
    { name: 'DevOps', percentage: 75 },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto rounded"></div>
        </motion.div>

        {/* Developer Titles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Professional Roles</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {titles.map((title, index) => (
              <motion.span
                key={title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                {title}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">
                      {tech.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{tech.name}</h4>
                  <p className="text-xs text-gray-500">{tech.category}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Progress */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Skill Proficiency</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className="text-portfolio-primary font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-3 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
