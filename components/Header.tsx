'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ModeToggle } from './dark-toggle';
import { useTheme } from 'next-themes';
import { navItems } from '@/data/utilsData';

// Import Button from shadcn/ui
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  if (!mounted) {
    return <header className="fixed top-0 left-0 w-full z-50 py-4 bg-transparent" />;
  }

  return (
    <>
      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4
          ${
            isScrolled
              ? theme === 'dark'
                ? 'bg-neutral-900/30 backdrop-blur-lg shadow-lg'
                : 'bg-white/30 backdrop-blur-lg shadow-lg'
              : theme === 'dark'
                ? 'bg-neutral-900/10 backdrop-blur-md'
                : 'bg-white/20 backdrop-blur-md'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo - Left */}
            <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
              <Link href="#hero" scroll={false} onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}>
                
                  <Image
                    src={theme === 'dark' ? '/dark-logo.png' : '/white-logo.png'}
                    alt="Logo"
                    width={70}
                    height={30}
                    className="rounded-full object-cover h-auto"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  scroll={false}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="relative font-medium px-3 py-1 text-gray-700 dark:text-white hover:text-portfolio-primary dark:hover:text-portfolio-primary group"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-portfolio-primary transition-all duration-500 ease-out group-hover:w-full"></span>
                </Link>
              ))}
              <ModeToggle />
            </nav>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center space-x-4">
              <ModeToggle />
              <Button
                variant="ghost"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-0 text-gray-700 dark:text-white hover:text-portfolio-primary transition-colors"
              >
                <Menu size={30} />
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`fixed top-0 right-0 w-full h-full z-[60] flex flex-col
              ${
                theme === 'dark'
                  ? 'bg-neutral-900/95 backdrop-blur-lg'
                  : 'bg-white/95 backdrop-blur-lg'
              }`}
          >
            <div className="flex justify-end p-6">
              <Button
                variant="ghost"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-0 text-gray-700 dark:text-white hover:text-portfolio-primary transition-colors"
              >
                <X size={28} />
              </Button>
            </div>
            <div className="flex-1 flex flex-col items-center space-y-8 px-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  scroll={false}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`text-2xl font-medium transition-colors text-center ${
                    theme === 'dark' ? 'text-white' : 'text-gray-700'
                  } hover:text-portfolio-primary relative group`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-[2px] w-0 bg-portfolio-primary transition-all duration-500 ease-out group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
