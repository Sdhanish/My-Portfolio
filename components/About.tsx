'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Phone, Mail, Linkedin, Github, Instagram, Facebook } from 'lucide-react';
import { useTheme } from 'next-themes';

const About = () => {
  const { theme } = useTheme();

  return (
    <section
        id="about"
      className={`py-20 px-6 transition-colors duration-300 dark:bg-gray-950`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl sm:text-4xl font-bold mb-1">About Me</h2>
          <div className="w-28 h-1  bg-gradient-to-br from-blue-300 to-blue-600 mx-auto rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center md:w-3/4 mx-auto">
        {/* Photo */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative flex justify-center items-center"
>
  <div className="relative h-auto">
    <Image
      src="/about-section/dhanishs.png" // transparent PNG
      alt="Dhanish S"
      width={400}
      height={400}
      className="object-contain rounded-2xl"
      priority
    />
  </div>

  {/* Decorative floating elements */}
  <div className="absolute -top-3 -right-2 w-16 h-16 bg-portfolio-primary/10 rounded-full blur-sm animate-pulse"></div>
  <div className="absolute -bottom-2 -left-3 w-20 h-20 bg-portfolio-secondary/10 rounded-full blur-sm animate-pulse"></div>
  <div className="absolute top-1/2 -right-6 w-8 h-8 bg-portfolio-accent/20 rounded-full animate-pulse"></div>
</motion.div>


{/* Content */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
  className="flex flex-col gap-6" // removed big space-y-8 and replaced with tighter spacing
>
  <h3 className="text-2xl font-bold mt-3">
    DHANISH S
  </h3>

  <div className="space-y-3">
    <p className={`text-md leading-relaxed text-justify ${
      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
    }`}>
      Full Stack Developer with hands-on experience in building responsive full-stack
      applications using MERN stack and integrating AI-driven features. Skilled in
      frontend design, backend development, and scalable RESTful APIs.
    </p>

    <p className={`text-md leading-relaxed text-justify ${
      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
    }`}>
      Eager to contribute to impactful solutions in a fast-paced, collaborative
      environment. I believe in writing clean, maintainable code and creating
      exceptional user experiences.
    </p>
  </div>

  {/* Contact Information Row */}
  <div className="flex flex-wrap justify-center items-center gap-4">
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 group"
    >
      <div className="p-2 rounded-full  bg-gradient-to-br from-blue-600 to-blue-700 text-white group-hover:shadow-lg transition-all duration-300">
        <MapPin size={18} />
      </div>
      <span className={`text-sm font-medium ${
        theme === 'dark' ? 'text-gray-50' : 'text-gray-700'
      }`}>
        Pathanamthitta, Kerala
      </span>
    </motion.div>

    <motion.a 
      href="tel:+917909122902"
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 group"
    >
      <div className="p-2 rounded-full  bg-gradient-to-br from-blue-600 to-blue-700 text-white group-hover:shadow-lg transition-all duration-300">
        <Phone size={18} />
      </div>
      <span className={`text-sm font-medium ${
        theme === 'dark' ? 'text-gray-50' : 'text-gray-700'
      }`}>
        +91 7909122902
      </span>
    </motion.a>
        {/* Email */}
    <motion.a 
      href="mailto:dhanish5542@gmail.com"
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 group"
    >
      <div className="p-2 rounded-full  bg-gradient-to-br from-blue-600 to-blue-700 text-white group-hover:shadow-lg transition-all duration-300">
        <Mail size={18} />
      </div>
      <span className={`text-sm font-medium ${
        theme === 'dark' ? 'text-gray-50' : 'text-gray-700'
      }`}>
        dhanish92@gmail.com
      </span>
    </motion.a>
  </div>

  {/* Email + Socials in one row */}
  <div className="flex flex-wrap justify-center items-center gap-4">


    {/* Social Icons */}
    <div className="flex gap-3">
      <motion.a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: 5 }}
        className={`p-3 rounded-full transition-all duration-300 ${
          theme === 'dark' ? 'text-gray-50 hover:text-blue-400 hover:bg-blue-400/10' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-600/10'
        }`}
      >
        <Linkedin size={24} />
      </motion.a>

      <motion.a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: -5 }}
        className={`p-3 rounded-full transition-all duration-300 ${
          theme === 'dark' ? 'text-gray-50 hover:text-gray-200 hover:bg-gray-200/10' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900/10'
        }`}
      >
        <Github size={24} />
      </motion.a>

      <motion.a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: 5 }}
        className={`p-3 rounded-full transition-all duration-300 ${
          theme === 'dark' ? 'text-gray-50 hover:text-pink-400 hover:bg-pink-400/10' : 'text-gray-600 hover:text-pink-600 hover:bg-pink-600/10'
        }`}
      >
        <Instagram size={24} />
      </motion.a>

      <motion.a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: -5 }}
        className={`p-3 rounded-full transition-all duration-300 ${
          theme === 'dark' ? 'text-gray-50 hover:text-blue-500 hover:bg-blue-500/10' : 'text-gray-600 hover:text-blue-700 hover:bg-blue-700/10'
        }`}
      >
        <Facebook size={24} />
      </motion.a>
    </div>
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;