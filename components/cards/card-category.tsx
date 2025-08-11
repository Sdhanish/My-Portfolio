// components/CategoryCard.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Category } from '@/data/utilsData';


interface CategoryCardProps {
  category: Category;
  theme: 'light' | 'dark';
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, theme }) => (
  <div className={`rounded-2xl p-6 transition-all duration-300 dark:bg-gray-900 shadow-lg`}>
    <h3 className={`text-xl font-bold mb-6 dark:text-gray-300`}>{category.title}</h3>
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
            className={`group p-4 rounded-xl text-center cursor-pointer transition-all duration-300 dark:bg-gray-800 shadow-lg`}
          >
            <div className="flex flex-col items-center space-y-2">
              <div className={`p-3 rounded-lg transition-all duration-300`}>
                <IconComponent
                  size={28}
                  className="transition-all duration-300 group-hover:scale-110"
                  style={{
                    color: tech.color,
                    filter: theme === 'dark' ? 'brightness(1.3) saturate(1.2)' : 'brightness(0.9)'
                  }}
                />
              </div>
              <span className={`text-sm font-medium transition-colors duration-300`}>
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
