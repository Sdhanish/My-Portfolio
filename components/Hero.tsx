'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { ReactTyped } from "react-typed";
import { titles } from '@/data/utilsData';
import { handleDownloadCV, scrollToSection } from '@/utils/utilData';


const Hero = () => {
  const { theme } = useTheme();


  return (
    <section id='hero'
      className="
        min-h-screen flex items-center justify-center
        bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50
        dark:from-gray-900 dark:via-gray-800 dark:to-black
        relative overflow-hidden px-5
      "
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-portfolio-primary/10 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-portfolio-secondary/10 rounded-full blur-3xl animate-bounce-slow animation-delay-2000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center">
        
        {/* Logo Circle with Border */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center mb-8"
        >
         <div className="relative w-30 h-30">
  {/* Light Logo - shows in light mode */}
  <Image
    src="/white-logo.png"
    alt="Logo"
    width={120}
    height={120}
    className="rounded-full object-contain h-auto block dark:hidden"
  />

  {/* Dark Logo - shows in dark mode */}
  <Image
    src="/dark-logo.png"
    alt="Logo"
    width={120}
    height={120}
    className="rounded-full object-contain h-auto hidden dark:block"
  />
</div>

          
        </motion.div>

        {/* Text Section */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-blue-500 dark:text-blue-400 font-medium mb-1 text-2xl"
        >
          Hello, I'm <span className="font-semibold  text-gray-900 dark:text-white">Dhanish</span>
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-2xl sm:text-3xl font-semibold text-blue-500 dark:text-blue-400 mb-6 z-20"
        >
          <ReactTyped
            strings={titles}
            typeSpeed={80}
            backSpeed={50}
            loop
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-justify"
        >
          Building a responsive full-stack applications with MERN stack & AI integration. 
          Creating digital experiences that make a difference.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#works')}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 justify-center"
          >
            View My Work
            <ArrowRight className="ml-2 " />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadCV}
            className="inline-flex items-center px-6 py-3 border-2 border-portfolio-primary text-portfolio-primary font-medium rounded-lg hover:bg-portfolio-primary hover:text-white transition-all duration-300 justify-center"
          >
            Download CV
            <Download className="ml-2 " />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
