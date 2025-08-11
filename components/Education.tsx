'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      title: 'Master of Computer Applications',
      cgpa: '9.09',
      duration: 'Sept 2023 – May 2025',
      institution: 'APJ Abdul Kalam Technological University',
      location: 'Kerala, India',
      status: 'Completed',
      type: 'degree',
    },
    {
      title: 'MERN Stack Training',
      duration: 'Nov 2022 – Jan 2023',
      institution: 'Techmindz, Infopark Kochi',
      location: 'Kochi, India',
      status: 'Completed',
      type: 'training',
      description:
        'Completed intensive MERN stack training. Built full-stack applications using React, Node.js, Express.js, and MongoDB; developed APIs, responsive UIs, and practiced deployment.',
    },
    {
      title: 'Bachelor of Computer Applications',
      cgpa: '7.17',
      duration: 'Jun 2019 – Mar 2022',
      institution: 'Mahatma Gandhi University',
      location: 'Kerala, India',
      status: 'Completed',
      type: 'degree',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Training
          </h2>
          <div className="w-20 h-1  bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
            My academic journey and professional training, building a strong
            foundation for my career in software development.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full  bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hidden lg:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {educationData.map((item, index) => {
              const Icon = item.type === 'degree' ? GraduationCap : Award;
              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x:
                      index % 2 === 0
                        ? -100
                        : 100,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0
                      ? 'justify-start sm:justify-start'
                      : 'justify-end sm:justify-end'
                  } sm:flex-row`}
                >
                  {/* Circle Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden lg:block">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2 + 0.3,
                      }}
                      viewport={{ once: true }}
                      className="w-16 h-16  bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                   className={`relative w-full max-w-md bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 dark:border-gray-700 ${
  index % 2 === 0 ? 'mr-12' : 'ml-12'
}`}

                  >
                    {/* Status + CGPA */}
                    <div className="flex justify-between items-start mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === 'In Progress'
                            ? 'bg-portfolio-accent/10 text-portfolio-accent'
                            : 'bg-green-100 text-green-700 dark:bg-green-800/30 dark:text-green-300'
                        }`}
                      >
                        {item.status}
                      </span>
                      {item.cgpa && (
                        <div className="flex items-center space-x-1 text-portfolio-primary">
                          <Award className="w-4 h-4" />
                          <span className="font-bold text-lg">
                            CGPA {item.cgpa}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                      {item.title}
                    </h3>

                    {/* Institution */}
                    <p className="text-portfolio-primary font-semibold mb-4">
                      {item.institution}
                    </p>

                    {/* Duration & Location */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-3 text-portfolio-secondary" />
                        <span className="text-sm">{item.duration}</span>
                      </div>

                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4 mr-3 text-portfolio-secondary" />
                        <span className="text-sm">{item.location}</span>
                      </div>
                    </div>

                    {/* Training Description */}
                    {item.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    )}

                    {/* Decorative elements */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-portfolio-secondary/20 rounded-full"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-portfolio-accent/20 rounded-full"></div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Cap */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary rounded-full"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
