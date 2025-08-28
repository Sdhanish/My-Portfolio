'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { ReactTyped } from "react-typed";
import { titles } from '@/data/utilsData';
import { scrollToSection } from '@/utils/utilData';

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section
      id="hero"
      className="
        min-h-screen flex items-center justify-center
        relative overflow-hidden px-5
      "
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/hero-section/hero-bg-image.png"
          alt="Background"
          fill
          className="object-cover opacity-50  dark:opacity-100"
          priority
        />
       <div
  className="
    absolute inset-0 
    bg-gradient-to-br from-white/70 via-blue-50/60 to-white/80 
    dark:from-gray-900 dark:via-gray-800 dark:to-black 
    mix-blend-multiply
  "
></div>

      </div>

      {/* Animated Blurry Circles */}
<div className="absolute inset-0 z-0">
  <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl "></div>
  <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl "></div>
</div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center">
        
        {/* Logo Circle with Border */}
{/* Logo Circle with Gradient Border + Pulse */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative flex justify-center"
>
  <div className="relative w-30 h-30">
    {/* Gradient Pulse Border */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-[4px] animate-pulse">
      <div className="w-full h-full rounded-full bg-white dark:bg-gray-900"></div>
    </div>

    {/* Logo Container */}
    <div className="relative w-full h-full border-4 border-transparent rounded-full p-4 flex items-center justify-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-xl">
      <div className="relative w-[80px] sm:w-[120px] h-[80px] sm:h-[120px]">
        {/* Light logo */}
        <Image
          src="/white-logo.png"
          alt="Logo"
          fill
          className="rounded-full object-contain dark:hidden"
        />
        {/* Dark logo */}
        <Image
          src="/dark-logo.png"
          alt="Logo"
          fill
          className="rounded-full object-contain hidden dark:block"
        />
      </div>
    </div>
  </div>
</motion.div>


        {/* Text Section */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-blue-500 dark:text-blue-400 font-medium my-3 text-2xl"
        >
          Hello, I'm{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            Dhanish
          </span>
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-2xl sm:text-3xl font-semibold text-blue-500 dark:text-blue-400 mb-6 z-20"
        >
          <ReactTyped strings={titles} typeSpeed={80} backSpeed={50} loop />
        </motion.h2>



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
            onClick={() => scrollToSection("#works")}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 justify-center"
          >
            View My Work
            <ArrowRight className="ml-2" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#contact")}
            className="inline-flex items-center px-6 py-3 border-2 border-portfolio-primary text-portfolio-primary font-medium rounded-lg hover:bg-portfolio-primary hover:text-white transition-all duration-300 justify-center gap-3"
          >
            <PhoneCall className="ml-2" />
            Contact Me
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
