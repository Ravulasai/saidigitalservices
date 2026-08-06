'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FiPhone, FiMail } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#0f0d0a] border-t border-gold/30 relative overflow-hidden">
      {/* Background Elements with Animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent pointer-events-none" />
      <motion.div 
        className="absolute top-0 left-1/3 w-48 h-48 bg-gold/8 rounded-full blur-3xl"
        animate={{ 
          x: [0, 40, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple/8 rounded-full blur-3xl"
        animate={{ 
          x: [0, -60, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Content */}
        <div className="py-8 md:py-12 px-4 md:px-8">
          
          {/* Main Grid - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
            
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="mb-8">
                <div className="inline-flex items-center gap-3 mb-4 p-4 bg-gold/10 rounded-lg border border-gold/30">
                  <FiMail className="text-gold" size={24} />
                  <h3 
                    className="text-gold font-bold uppercase tracking-widest text-sm"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Email
                  </h3>
                </div>
                <motion.a
                  href="mailto:sairavula1919@gmail.com"
                  className="text-gray-800 dark:text-gray-300 hover:text-gold transition-colors text-sm block font-semibold"
                  style={{ fontFamily: 'var(--font-inter)' }}
                  whileHover={{ scale: 1.05 }}
                >
                  sairavula1919@gmail.com
                </motion.a>
              </div>

              <div className="mb-8">
                <p 
                  className="text-gray-700 dark:text-gray-500 text-sm mb-2 font-bold uppercase tracking-wide"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Location
                </p>
                <p 
                  className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Andhra Pradesh, India
                </p>
              </div>
            </motion.div>

            {/* Center Column - Brand & Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center items-center"
            >
              <motion.div
                animate={{ 
                  y: [0, -12, 0],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-center"
              >
                <h2 
                  className="text-3xl md:text-4xl font-black text-gold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r from-gold via-gold to-gold/70 mb-4"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Sai Digital Services
                </h2>
                <p 
                  className="text-gold dark:text-gold/80 text-sm italic mb-6 font-semibold uppercase tracking-wide"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Digital Excellence
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Phone & Social Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-end text-center md:text-right"
            >
              <div className="mb-8">
                <div className="inline-flex items-center gap-3 mb-4 p-4 bg-gold/10 rounded-lg border border-gold/30">
                  <FiPhone className="text-gold" size={24} />
                  <h3 
                    className="text-gold font-bold uppercase tracking-widest text-sm"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Phone
                  </h3>
                </div>
                <motion.a
                  href="tel:+916304484048"
                  className="text-gray-800 dark:text-gray-300 hover:text-gold transition-colors text-sm block font-semibold"
                  style={{ fontFamily: 'var(--font-inter)' }}
                  whileHover={{ scale: 1.05 }}
                >
                  +91 6304484048
                </motion.a>
              </div>

              <div>
                <p 
                  className="text-gray-700 dark:text-gray-500 text-sm mb-3 font-bold uppercase tracking-wide"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Quick Links
                </p>
                <div className="flex gap-4 justify-center md:justify-end">
                  <motion.a
                    href="tel:+916304484048"
                    className="group"
                    whileHover={{ scale: 1.15, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    aria-label="Call"
                  >
                    <div className="p-3 bg-gold/15 group-hover:bg-gold/25 rounded-full border border-gold/40 group-hover:border-gold/70 transition-all duration-300">
                      <FiPhone className="text-gold" size={18} />
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://wa.me/916304484048"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    whileHover={{ scale: 1.15, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    aria-label="WhatsApp"
                  >
                    <div className="p-3 bg-gold/15 group-hover:bg-gold/25 rounded-full border border-gold/40 group-hover:border-gold/70 transition-all duration-300">
                      <FaWhatsapp className="text-gold" size={18} />
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://www.instagram.com/sai_digital_services_?igsh=aGR0NHowcTR0cmk0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    whileHover={{ scale: 1.15, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    aria-label="Instagram"
                  >
                    <div className="p-3 bg-gold/15 group-hover:bg-gold/25 rounded-full border border-gold/40 group-hover:border-gold/70 transition-all duration-300">
                      <FaInstagram className="text-gold" size={18} />
                    </div>
                  </motion.a>

                  <motion.a
                    href="mailto:sairavula1919@gmail.com"
                    className="group"
                    whileHover={{ scale: 1.15, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    aria-label="Email"
                  >
                    <div className="p-3 bg-gold/15 group-hover:bg-gold/25 rounded-full border border-gold/40 group-hover:border-gold/70 transition-all duration-300">
                      <FiMail className="text-gold" size={18} />
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Copyright Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center pt-4"
          >
            <p 
              className="text-gray-700 dark:text-gray-500 text-xs font-semibold"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              © {currentYear} Sai Digital Services. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
