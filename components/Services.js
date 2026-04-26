'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiTrendingUp, FiShare2, FiTarget, FiZap, FiTool } from 'react-icons/fi';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: FiCode,
      title: 'Website Development',
      description: 'Responsive business websites, portfolio sites, landing pages, ecommerce solutions built with modern technologies.',
    },
    {
      icon: FiTrendingUp,
      title: 'SEO Optimization',
      description: 'On-page SEO, speed optimization, rankings improvement, and local SEO to boost your online visibility.',
    },
    {
      icon: FiShare2,
      title: 'Social Media Management',
      description: 'Instagram and Facebook growth strategies with engaging content that connects with your audience.',
    },
    {
      icon: FiTarget,
      title: 'Digital Marketing',
      description: 'Lead generation campaigns and conversion optimization to grow your business online.',
    },
    {
      icon: FiZap,
      title: 'Branding Strategy',
      description: 'Creative ideas and strategies to grow your brand and stand out in the digital marketplace.',
    },
    {
      icon: FiTool,
      title: 'Website Maintenance',
      description: 'Regular updates, bug fixes, security patches, and ongoing support for your website.',
    },
  ];

  return (
    <section id="services" ref={ref} className="pt-5 pb-8 px-4 bg-white dark:bg-charcoal/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple/5 via-transparent to-gold/5 pointer-events-none" />
      <div className="absolute top-20 right-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl mb-2 tracking-tight"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Our <span className="text-gold italic" style={{ fontFamily: 'var(--font-cormorant)' }}>Services</span>
          </h2>
          <p 
            className="text-black dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-inter)', fontSize: '16px' }}
          >
            Comprehensive digital solutions to help your business thrive online
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="bg-white/95 dark:bg-charcoal/80 backdrop-blur-xl border-2 border-gold/40 dark:border-white/10 p-6 hover:bg-white/98 dark:hover:bg-charcoal/90 hover:border-gold/60 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              style={{ borderRadius: '8px' }}
            >
              <motion.div 
                className="mb-4 p-3 bg-gradient-to-br from-gold/30 to-gold/15 group-hover:from-gold/40 group-hover:to-gold/25 transition-colors w-fit" 
                style={{ borderRadius: '4px' }}
                whileHover={{ rotate: 10, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <service.icon className="text-gold" size={24} />
              </motion.div>
              <h3 
                className="font-bold mb-2 text-black dark:text-gold group-hover:text-gold transition-colors"
                style={{ fontFamily: 'var(--font-cormorant)', fontSize: '18px' }}
              >
                {service.title}
              </h3>
              <p 
                className="text-black dark:text-gray-400 leading-relaxed"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '14px' }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
