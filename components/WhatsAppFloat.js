'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      className="fixed bottom-5 right-5 z-30 hidden md:block"
    >
      <a
        href="https://wa.me/916304484048"
        target="_blank"
        rel="noopener noreferrer"
        className="block p-2.5 bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        style={{ borderRadius: '2px' }}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={20} />
      </a>
    </motion.div>
  );
}
