'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiTypescript, SiRedux, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiMysql, SiJavascript,
  
  // SiJava,
   SiPython, SiPhp, SiGit, SiPostman, 
  // SiVisualstudiocode
} from 'react-icons/si';

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
  theme: 'light' | 'dark';
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const skillBarVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const CategoryCard: React.FC<CategoryCardProps> = ({ category, theme }) => (
  <div
    className={`rounded-2xl p-6 transition-all duration-300 dark:bg-gray-900 shadow-lg`}
  >
    <h3
      className={`text-xl font-bold mb-6 dark:text-gray-300`}
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
            className={`group p-4 rounded-xl text-center cursor-pointer transition-all duration-300 dark:bg-gray-800 shadow-lg`}
          >
            <div className="flex flex-col items-center space-y-2">
              <div
                className={`p-3 rounded-lg transition-all duration-300 `}
              >
                <IconComponent
                  size={28}
                  className="transition-all duration-300 group-hover:scale-110"
                  style={{
                    color: tech.color,
                    filter:
                      theme === 'dark'
                        ? 'brightness(1.3) saturate(1.2)'
                        : 'brightness(0.9)'
                  }}
                />
              </div>
              <span
                className={`text-sm font-medium transition-colors duration-300`}
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

const TechStack: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'light' }) => {
  const techCategories: Category[] = [
    {
      title: 'Frontend Technologies',
      technologies: [
        { name: 'React.js', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        
        { name: 'Redux', icon: SiRedux, color: '#764ABC' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' }
      ]
    }
  ];

  const sideBySideCategories: Category[][] = [
    [
      {
        title: 'Backend Technologies',
        technologies: [
          { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
          { name: 'Express.js', icon: SiExpress, color: '#000000' }
        ]
      },
      {
        title: 'Databases',
        technologies: [
          { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
          { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
          { name: 'MySQL', icon: SiMysql, color: '#4479A1' }
        ]
      }
    ],
    [
      {
        title: 'Programming Languages',
        technologies: [
          { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
          { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
          // { name: 'Java', icon: SiJava, color: '#007396' },
          { name: 'Python', icon: SiPython, color: '#3776AB' },
          { name: 'PHP', icon: SiPhp, color: '#777BB4' }
          
        ]
      },
      {
        title: 'Tools & Platforms',
        technologies: [
          { name: 'Git', icon: SiGit, color: '#F05032' },
          { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
          // { name: 'VS Code', icon: SiVisualstudiocode, color: '#007ACC' }
        ]
      }
    ]
  ];

  const skills = [
    { name: 'Frontend Development', percentage: 95 },
    { name: 'Backend Development', percentage: 90 },
    { name: 'API Development', percentage: 90 },
    { name: 'Database Management', percentage: 85 }
  ];

  return (
    <section
      className={`py-10 transition-colors duration-300 dark:text-white dark:bg-gray-950`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
