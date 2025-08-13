'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/917909122902?text=Hi%20Dhanish!%20I%20would%20like%20to%20connect%20with%20you."
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-20 md:bottom-6 right-4 md:right-6 
                 bg-green-500 hover:bg-green-600 text-white 
                 p-3 md:p-4 rounded-full shadow-lg z-50 animate-bounce-slow"
    >
      <FaWhatsapp size={24} />
    </motion.a>
  );
};

export default WhatsAppButton;
