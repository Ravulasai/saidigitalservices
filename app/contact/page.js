'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream dark:bg-matte-black">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple/5 via-transparent to-gold/5 pointer-events-none" />
        <div className="absolute top-20 right-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Get In <span className="text-gold italic" style={{ fontFamily: 'var(--font-cormorant)' }}>Touch</span>
            </h1>
            <p 
              className="text-black dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)', fontSize: '16px' }}
            >
              Ready to grow together? Let's talk about your business and build something great
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <Contact showHeading={false} />
    </div>
  );
}