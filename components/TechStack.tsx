'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { cardVariants, containerVariants, skillBarVariants } from '@/data/animationVariants';
import CategoryCard from './cards/card-category';
import { sideBySideCategories, skills, techCategories } from '@/data/utilsData';

const TechStack: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'light' }) => {

  return (
    <section
      className={`py-10 transition-colors duration-300 dark:text-white dark:bg-gray-950`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 dark:text-gray-300`}
          >
            Tech Stack & Skills
          </h2>
          <div className="w-20 h-1  bg-gradient-to-r from-blue-300 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 mb-20 dark:text-gray-300 "
        >
          {/* Frontend */}
          <motion.div variants={cardVariants}>
            <CategoryCard category={techCategories[0]} theme={theme} />
          </motion.div>

          {/* Side-by-side */}
          {sideBySideCategories.map((pair, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4"
            >
              {pair.map((cat) => (
                <CategoryCard key={cat.title} category={cat} theme={theme} />
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`rounded-2xl p-8 dark:text-gray-300 `}
        >
          <h3
            className={`text-2xl font-bold mb-8 text-center dark:text-gray-300`}
          >
            Skill Proficiency
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto ">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={skillBarVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="flex justify-between items-center">
                  <span
                    className={`font-semibold text-base dark:text-gray-300`}
                  >
                    {skill.name}
                  </span>
                  <span className="text-portfolio-primary font-bold text-lg">
                    {skill.percentage}%
                  </span>
                </div>
                <div
                  className={`w-full h-3 rounded-full overflow-hidden ${
                    theme === 'dark' ? 'bg-gray-700/60' : 'bg-gray-200'
                  }`}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.15 + 0.3,
                      ease: 'easeOut'
                    }}
                    viewport={{ once: true }}
                    className="h-full  bg-gradient-to-r from-blue-500 to-blue-600 rounded-full relative overflow-hidden shadow-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-60"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
