'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhone, FiMail, FiHeart } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-gold/20 py-12 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-gold/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-purple/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left lg:text-center px-4 lg:px-0"
        >
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6 lg:mb-8 text-left lg:text-center"
          >
            <h3 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 lg:mb-3"
              style={{ 
                fontFamily: 'var(--font-cormorant)',
                backgroundImage: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #B8860B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Sai Digital Services
            </h3>
            <p 
              className="text-gray-300 max-w-xl lg:max-w-2xl mx-auto lg:mx-auto leading-relaxed px-0 lg:px-0"
              style={{ fontFamily: 'var(--font-inter)', fontSize: '12px' }}
            >
              Transforming ideas into digital excellence with innovative solutions
            </p>          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-start lg:items-center lg:flex-row lg:justify-center gap-3 lg:gap-6 mb-6 lg:mb-8 px-0 lg:px-0"
          >
            <motion.a
              href="tel:+916304484048"
              className="flex items-center gap-2 lg:gap-3 text-gray-300 hover:text-gold transition-all duration-300 group"
              whileHover={{ scale: 1.05, x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              aria-label="Call Sai Digital Services at +91 6304484048"
            >
              <div className="p-1.5 lg:p-2 bg-gradient-to-br from-gold/20 to-gold/10 group-hover:from-gold/30 group-hover:to-gold/20 transition-colors" style={{ borderRadius: '50%' }}>
                <FiPhone className="text-gold" size={14} />
              </div>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: '12px', color: 'inherit' }}>
                +91 6304484048
              </span>
            </motion.a>

            <motion.a
              href="https://wa.me/916304484048?text=Hi,%20what%20can%20I%20help%20you%20with?"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 lg:gap-3 text-gray-300 hover:text-gold transition-all duration-300 group"
              whileHover={{ scale: 1.05, x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              aria-label="Chat with Sai Digital Services on WhatsApp"
            >
              <div className="p-1.5 lg:p-2 bg-gradient-to-br from-gold/20 to-gold/10 group-hover:from-gold/30 group-hover:to-gold/20 transition-colors" style={{ borderRadius: '50%' }}>
                <FaWhatsapp className="text-gold" size={14} />
              </div>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: '12px', color: 'inherit' }}>
                WhatsApp Chat
              </span>
            </motion.a>

            <motion.a
              href="mailto:contact@saidigitalservices.in"
              className="flex items-center gap-2 lg:gap-3 text-gray-300 hover:text-gold transition-all duration-300 group"
              whileHover={{ scale: 1.05, x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              aria-label="Email Sai Digital Services"
            >
              <div className="p-1.5 lg:p-2 bg-gradient-to-br from-gold/20 to-gold/10 group-hover:from-gold/30 group-hover:to-gold/20 transition-colors" style={{ borderRadius: '50%' }}>
                <FiMail className="text-gold" size={14} />
              </div>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: '12px', color: 'inherit' }}>
                Email Us
              </span>
            </motion.a>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="w-16 lg:w-20 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-0 lg:mx-auto mb-5 lg:mb-6"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-400 px-0 lg:px-0 text-left lg:text-center"
          >
            <p 
              className="flex items-center justify-start lg:justify-center gap-2 mb-1 lg:mb-2 text-gray-400"
              style={{ fontFamily: 'var(--font-inter)', fontSize: '11px' }}
            >
              Made with <FiHeart className="text-gold animate-pulse" size={12} /> for your business success
            </p>
            <p 
              className="text-gray-500"
              style={{ fontFamily: 'var(--font-inter)', fontSize: '10px' }}
            >
              © {currentYear} Sai Digital Services. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}