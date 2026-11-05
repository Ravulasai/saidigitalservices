'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
      /* Only visible on desktop (md+) — mobile uses bottom nav WhatsApp button */
      className="fixed bottom-6 right-5 z-30 hidden md:block"
    >
      <a
        href="https://wa.me/919010996525"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg hover:shadow-xl transition-all duration-300"
        style={{ boxShadow: '0 4px 16px rgba(37,211,102,0.45)' }}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={22} aria-hidden="true" />
      </a>
    </motion.div>
  );
}
