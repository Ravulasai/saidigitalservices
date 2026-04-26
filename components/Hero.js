'use client';

import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const trustBadges = [
    '3+ Years Experience',
    'SEO Focused',
    'Mobile Optimized',
    'Fast Delivery',
    'Support Available',
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/916304484048', '_blank');
  };

  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center px-4 pt-20 pb-16 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple/5 via-transparent to-gold/5 dark:from-purple/10 dark:to-gold/10" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight"
            >
              Grow Your Business with{' '}
              <span className="bg-gradient-to-r from-gold to-yellow-600 bg-clip-text text-transparent">
                Websites That Convert
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-sm md:text-base text-[#5A5A6A] dark:text-gray-300 leading-relaxed"
            >
              3+ years of experience in website development, SEO optimization, and digital marketing 
              helping businesses grow online across Hyderabad, Telangana, and Andhra Pradesh.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-gold text-black text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gold/50"
                style={{ borderRadius: '2px' }}
              >
                Let&apos;s Grow Together
              </Link>
              <button
                onClick={openWhatsApp}
                className="px-5 py-2.5 glass-light font-semibold hover:bg-white/90 dark:hover:bg-white/20 transition-all duration-300 flex items-center gap-2 text-sm"
                style={{ borderRadius: '2px' }}
              >
                <FaWhatsapp size={18} />
                WhatsApp Us
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 glass-light text-xs font-medium"
                  style={{ borderRadius: '2px' }}
                >
                  <FiCheckCircle className="text-gold" size={12} />
                  <span>{badge}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden shadow-2xl" style={{ borderRadius: '4px' }}>
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Digital Marketing Analytics Dashboard"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass-light p-3 shadow-lg"
              style={{ borderRadius: '2px' }}
            >
              <div className="text-2xl font-bold text-gold">3+</div>
              <div className="text-xs font-medium">Years Experience</div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 glass-light p-3 shadow-lg"
              style={{ borderRadius: '2px' }}
            >
              <div className="text-2xl font-bold text-gold">50+</div>
              <div className="text-xs font-medium">Happy Clients</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
