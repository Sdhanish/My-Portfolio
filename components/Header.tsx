'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Briefcase, FolderOpen, Mail, Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ModeToggle } from './dark-toggle';
import { navItems } from '@/data/utilsData';

// Import Button from shadcn/ui
import { Button } from '@/components/ui/button';

// Icon mapping for navigation items
const navIcons = {
  'Home': Home,
  'About': User,
  'Education': GraduationCap,
  'Services': Briefcase,
  'Works': FolderOpen,
  'Contact': Mail,
};

// Add Home to navItems for mobile bottom nav
const mobileNavItems = [
  { name: 'Home', href: '#hero' },
  ...navItems
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', ...navItems.map(item => item.href.substring(1))];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(`#${currentSection}`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial active section
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href);
    }
  };

  if (!mounted) {
    return (
      <>
        <header className="fixed top-0 left-0 w-full z-50 md:py-4 bg-transparent" />
        <nav className="md:hidden fixed bottom-4 left-4 right-4 z-50 h-16 bg-transparent" />
      </>
    );
  }

  return (
    <>
      {/* Header (Desktop & Mobile) */}
     <motion.header
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 md:py-3 
    ${
      isScrolled
        ? 'bg-white/30 dark:bg-neutral-900/30 backdrop-blur-lg shadow-lg'
        : 'bg-transparent'
    }`}
>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
              <Link href="#hero" scroll={false} onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}>
                <Image
                  src="/white-logo.png"
                  alt="Logo"
                  width={70}
                  height={30}
                  className="rounded-full object-cover h-auto block dark:hidden"
                />
                <Image
                  src="/dark-logo.png"
                  alt="Logo"
                  width={70}
                  height={30}
                  className="rounded-full object-cover h-auto hidden dark:block"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation - Hidden on Mobile */}
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
                  className={`relative font-medium px-3 transition-colors duration-300 group
                    ${
                      activeSection === item.href
                        ? 'text-portfolio-primary'
                        : 'text-gray-700 dark:text-white hover:text-portfolio-primary dark:hover:text-portfolio-primary'
                    }`}
                >
                  {item.name}
                  <span 
                    className={`absolute left-0 -bottom-0.5 h-[2px] bg-portfolio-primary transition-all duration-500 ease-out
                      ${
                        activeSection === item.href 
                          ? 'w-full' 
                          : 'w-0 group-hover:w-full'
                      }`}
                  ></span>
                </Link>
              ))}
             
            </nav>
            <div>
              <ModeToggle />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Bottom Navigation */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        className="md:hidden fixed bottom-7 left-4 right-4 z-50 rounded-full bg-white/30 dark:bg-neutral-900/30 backdrop-blur-lg shadow-2xl border border-gray-200/50 dark:border-neutral-700/50"
      >
        <div className="flex items-center justify-around px-2 py-1">
          {mobileNavItems.map((item) => {
            const IconComponent = navIcons[item.name as keyof typeof navIcons];
            const isActive = activeSection === item.href;
            
            return (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex justify-center"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.href)}
                  className={`flex flex-col items-center justify-center p-3 min-w-0 h-auto rounded-xl transition-all duration-300
                    ${
                      isActive
                        ? 'text-portfolio-primary bg-portfolio-primary/10 shadow-sm'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-neutral-800/50'
                    }`}
                >
                  <IconComponent size={18} className="mb-1" />
                  
                </Button>
              </motion.div>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
};

export default Header;