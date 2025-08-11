'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import Image from 'next/image';

interface QuickLink {
  name: string;
  href: string;
}

const Footer = () => {
  const quickLinks: QuickLink[] = [
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
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src={'/white-logo.png'}
                alt="Dhanish S Logo"
                width={40}
                height={40}
                className="rounded-lg object-contain"
              />
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-bold bg-gradient-to-r from-portfolio-primary to-portfolio-secondary bg-clip-text text-transparent"
              >
                Dhanish S
              </motion.button>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-4 leading-relaxed text-sm">
              Full Stack Developer passionate about creating innovative web solutions 
              and AI-powered applications.
            </p>
            <div className="text-sm text-gray-400 dark:text-gray-500 space-y-1">
              <p>Pathanamthitta, Kerala</p>
              <p>dhanish5542@gmail.com</p>
              <p>+91 7909122902</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  whileHover={{ x: 5 }}
                  className="block text-gray-300 dark:text-gray-400 hover:text-portfolio-primary dark:hover:text-blue-300 transition-colors duration-200"
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300 dark:text-gray-400 text-sm">
              <li>Full Stack Development</li>
              <li>MERN Stack Applications</li>
              <li>Frontend Development</li>
              <li>Backend APIs</li>
              <li>AI Integration</li>
              <li>Web Design</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 dark:border-gray-600 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300 dark:text-gray-400 text-sm">
              <span>© {new Date().getFullYear()} Dhanish S. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              </motion.div>
              <span>and lots of ☕</span>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-gradient-to-r from-blue-300 to-blue-600 rounded-md flex items-center justify-center text-white text-sm font-medium hover:shadow-lg dark:hover:shadow-blue-500/25 transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
