'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Technology = {
  name: string;
  icon: React.ElementType;
  color: string;
};

type Category = {
  title: string;
  technologies: Technology[];
};

interface CategoryCardProps {
  category: Category;
  theme?: 'light' | 'dark';
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, theme = 'light' }) => (
  <div
    className={`rounded-2xl p-6 transition-all duration-300
      bg-white/90 dark:bg-gray-800/60
      backdrop-blur-sm shadow-lg dark:shadow-xl
      border border-gray-200/40 dark:border-gray-700/30`}
  >
    <h3
      className={`text-xl font-bold mb-6 text-gray-900 dark:text-gray-100`}
    >
      {category.title}
    </h3>

    <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4">
      {category.technologies.map((tech, index) => {
        const IconComponent = tech.icon;
        return (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -6, scale: 1.05, transition: { duration: 0.2 } }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            viewport={{ once: true }}
            className={`group p-4 rounded-xl text-center cursor-pointer transition-all duration-300
              bg-gray-50/80 hover:bg-white hover:shadow-xl
              dark:bg-gray-700/40 dark:hover:bg-gray-600/60 dark:hover:shadow-2xl`}
          >
            <div className="flex flex-col items-center space-y-2">
              <div
                className={`p-3 rounded-lg transition-all duration-300
                  bg-gray-100/60 group-hover:bg-gray-200/80
                  dark:bg-gray-600/30 dark:group-hover:bg-gray-500/40`}
              >
                <IconComponent
                  size={28}
                  className="transition-all duration-300 group-hover:scale-110"
                  style={{
                    color:
                      theme === 'dark' && tech.color === '#000000'
                        ? '#FFFFFF'
                        : tech.color,
                    filter:
                      theme === 'dark'
                        ? 'brightness(1.3) saturate(1.2)'
                        : 'brightness(0.9)'
                  }}
                />
              </div>
              <span
                className={`text-sm font-medium transition-colors duration-300
                  text-gray-700 group-hover:text-gray-900
                  dark:text-gray-300 dark:group-hover:text-gray-100`}
              >
                {tech.name}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
);

export default CategoryCard;
