import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppChatLink = () => {
  return (
    <motion.a
      href="https://wa.me/917909122902?text=Hi%20Dhanish!%20I%20would%20like%20to%20connect%20with%20you."
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center px-3 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 space-x-2 "
    >
      <FaWhatsapp size={24} />
      <span>Chat on WhatsApp</span>
    </motion.a>
  );
};

export default WhatsAppChatLink;
