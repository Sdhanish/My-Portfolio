'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { ModeToggle } from './dark-toggle';
import { useTheme } from 'next-themes';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Services', href: '#services' },
    { name: 'Works', href: '#works' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4
          ${isScrolled
            ? theme === 'dark'
              ? 'bg-neutral-900/30 backdrop-blur-lg shadow-lg border-b border-white/10'
              : 'bg-white/30 backdrop-blur-lg shadow-lg border-b border-white/20'
            : theme === 'dark'
              ? 'bg-neutral-900/10 backdrop-blur-md border-b border-transparent'
              : 'bg-white/20 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo - Left */}
            <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
              <Image
                src={theme === 'dark' ? '/dark-logo.png' : '/white-logo.png'}
                alt="Logo"
                width={70}
                height={30}
                className="rounded-full object-cover"
              />
            </motion.div>

            {/* Desktop Navigation - Center/Right */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className="relative font-medium px-3 py-1 group text-gray-700 dark:text-white hover:text-portfolio-primary dark:hover:text-portfolio-primary"
                >
                  {item.name}
                  <span
                    className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-portfolio-primary 
                      transition-all duration-500 ease-out group-hover:w-full"
                  ></span>
                </motion.button>
              ))}
              <ModeToggle />
            </nav>

            {/* Mobile Controls - Right */}
            <div className="md:hidden flex items-center space-x-4">
              <ModeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-gray-700 dark:text-white hover:text-portfolio-primary transition-colors"
              >
                <Menu size={30} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Full-Width Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`fixed top-0 right-0 w-full h-full z-[60] flex flex-col
              ${theme === 'dark' 
                ? 'bg-neutral-900/95 backdrop-blur-lg' 
                : 'bg-white/95 backdrop-blur-lg'
              }`}
          >
            {/* Close Button - Top Right */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 dark:text-white hover:text-portfolio-primary transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            {/* Navigation Links - Centered Vertically */}
            <div className="flex-1 flex flex-col items-center space-y-8 px-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-2xl font-medium transition-colors text-center
                    ${theme === 'dark' ? 'text-white' : 'text-gray-700'} 
                    hover:text-portfolio-primary
                    relative group`}
                >
                  {item.name}
                  <span
                    className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-[2px] w-0 bg-portfolio-primary 
                    transition-all duration-500 ease-out group-hover:w-full"
                  ></span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;