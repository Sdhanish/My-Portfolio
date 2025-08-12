'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/917909122902"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-20 md:bottom-6 right-4 md:right-6 
                 bg-green-500 hover:bg-green-600 text-white 
                 p-3 md:p-4 rounded-full shadow-lg z-50 transition-all duration-300"
    >
      <FaWhatsapp size={24} />
    </motion.a>
  );
};

export default WhatsAppButton;
