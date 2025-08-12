'use client'; 

import { Mail, Phone, MapPin, Linkedin, Github, Send, Instagram, Facebook } from 'lucide-react';
import { motion } from "framer-motion";
import { Toaster } from 'react-hot-toast';
import ContactForm from './contact/contact-form';
import WhatsAppChatLink from './whatspp/whatsapp-chat-link';


const Contact: React.FC = () => {

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'dhanish5542@gmail.com',
      href: 'mailto:dhanish5542@gmail.com',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91 7909122902',
      href: 'tel:+917909122902',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Pathanamthitta, Kerala',
      href: '#',
    },
  ];

const socialLinks = [
    {
      icon: <Linkedin className="w-4 h-4" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/dhanish-s',
    },
    {
      icon: <Github className="w-4 h-4" />,
      label: 'GitHub',
      href: 'https://github.com/dhanish5542',
    },
  ];


  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-950 transition-colors duration-300 px-5">
       <Toaster position="top-right" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Get In Touch
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded"></div>
          <p className="text-base text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            Ready to discuss your next project? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you're a company looking to hire, or you're a fellow developer 
                wanting to collaborate, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-lg hover:shadow-md dark:hover:shadow-gray-900/30 transition-all duration-300 group hover:translate-x-1"
                >
                  <div className="w-10 h-10  bg-gradient-to-r from-blue-300 to-blue-600  rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400">{info.label}</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
  <WhatsAppChatLink />

  <div className="flex flex-col md:flex-row items-center gap-3">
    <p className="text-gray-900 dark:text-white font-medium text-sm">
      Follow me on:
    </p>
    <div className="flex">
      {/* Social icons */}
      <motion.a href="https://linkedin.com/in/dhanishs" target="_blank" rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: 5 }}
        className="p-3 rounded-full transition-all duration-300 
                   text-gray-600 hover:text-blue-600 hover:bg-blue-600/10 
                   dark:text-gray-50 dark:hover:text-blue-400 dark:hover:bg-blue-400/10">
        <Linkedin size={20} />
      </motion.a>

      <motion.a href="http://github.com/Sdhanish/" target="_blank" rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: -5 }}
        className="p-3 rounded-full transition-all duration-300 
                   text-gray-600 hover:text-gray-900 hover:bg-gray-900/10 
                   dark:text-gray-50 dark:hover:text-gray-200 dark:hover:bg-gray-200/10">
        <Github size={20} />
      </motion.a>

      <motion.a href="https://www.instagram.com/sdhanish_/" target="_blank" rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: 5 }}
        className="p-3 rounded-full transition-all duration-300 
                   text-gray-600 hover:text-pink-600 hover:bg-pink-600/10 
                   dark:text-gray-50 dark:hover:text-pink-400 dark:hover:bg-pink-400/10">
        <Instagram size={20} />
      </motion.a>

      <motion.a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: -5 }}
        className="p-3 rounded-full transition-all duration-300 
                   text-gray-600 hover:text-blue-700 hover:bg-blue-700/10 
                   dark:text-gray-50 dark:hover:text-blue-500 dark:hover:bg-blue-500/10">
        <Facebook size={20} />
      </motion.a>
    </div>
  </div>
</div>

          


          </div>

          {/* Contact Form */}
          <ContactForm/>
          <Toaster position='top-right' />
        </div>
      </div>
    </section>
  );
};

export default Contact;