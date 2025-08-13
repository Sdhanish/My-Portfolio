'use client';

import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import Image from 'next/image';
import { quickLinks } from '@/data/utilsData';



const Footer = () => {


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
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 text-white pt-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <Image
                src={'/white-logo.png'}
                alt="Dhanish S Logo"
                width={40}
                height={40}
                className="rounded-lg object-contain"
              />
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
              >
                Dhanish S
              </button>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-3 text-sm leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions 
              and AI-powered applications.
            </p>
            <div className="text-xs text-gray-400 dark:text-gray-500 space-y-1">
              <p>Pathanamthitta, Kerala</p>
              <p>dhanish5542@gmail.com</p>
              <p>+91 7909122902</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-3 text-gray-100 dark:text-white">Quick Links</h3>
            <nav className="space-y-1.5">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-sm text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-all duration-200 hover:translate-x-1"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold mb-3 text-gray-100 dark:text-white">Services</h3>
            <ul className="space-y-1.5 text-sm text-gray-300 dark:text-gray-400">
              <li className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">Full Stack Development</li>
              <li className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">MERN Stack Applications</li>
              <li className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">Frontend Development</li>
              <li className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">Backend APIs</li>
              <li className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">AI Integration</li>
              <li className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">Web Design</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 dark:border-gray-600 mt-8 transition-colors duration-300">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            {/* Centered Copyright */}
            <div className="flex-1">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center text-center sm:space-x-4 space-y-2 sm:space-y-0 text-gray-300 dark:text-gray-400 text-xs sm:text-sm">
    
    {/* First row - Year + Name */}
    <div className="flex justify-center items-center">
      <span>© {new Date().getFullYear()} Dhanish S</span>
    </div>

    {/* Second row - Made with love + Email */}
    <div className="flex flex-wrap justify-center items-center space-x-2">
      <span>Made with</span>
      <div className="animate-pulse">
        <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
      </div>
      <span className="truncate">sdhanish92@gmail.com</span>
    </div>

  </div>
</div>


            {/* Minimal Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-500 rounded-md hidden items-center justify-center text-white text-sm font-medium hover:shadow-lg dark:hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 active:scale-95 md:flex"
            >
             <ArrowUp className="w-4 h-4 hidden md:inline-flex" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
