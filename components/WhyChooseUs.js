'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiDollarSign, FiZap, FiSearch, FiSmartphone, FiHeart, FiTrendingUp } from 'react-icons/fi';

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const reasons = [
    {
      icon: FiDollarSign,
      title: 'Affordable Pricing',
      description: 'Quality services at competitive rates perfect for startups and small businesses.',
    },
    {
      icon: FiZap,
      title: 'Fast & Modern Designs',
      description: 'Lightning-fast websites with contemporary designs that impress visitors.',
    },
    {
      icon: FiSearch,
      title: 'SEO Ready',
      description: 'Built-in SEO optimization to help your business rank higher in search results.',
    },
    {
      icon: FiSmartphone,
      title: 'Mobile First',
      description: 'Perfectly optimized for mobile devices where most of your customers are.',
    },
    {
      icon: FiHeart,
      title: 'Personalized Support',
      description: 'Dedicated support and guidance throughout your digital journey.',
    },
    {
      icon: FiTrendingUp,
      title: 'Business Growth Focused',
      description: 'Strategies designed to generate leads and grow your revenue.',
    },
  ];

  return (
    <section id="why-choose-us" ref={ref} className="pt-5 pb-8 px-4 bg-cream dark:bg-charcoal/50 relative overflow-hidden">
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
            Why Choose <span className="text-gold italic" style={{ fontFamily: 'var(--font-cormorant)' }}>Us</span>
          </h2>
          <p 
            className="text-black dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-inter)', fontSize: '16px' }}
          >
            What makes us the right partner for your digital success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30, scale: 0.9, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + index * 0.1,
                type: "spring",
                stiffness: 120
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              className="bg-white/95 dark:bg-charcoal/80 backdrop-blur-xl border-2 border-gold/40 dark:border-white/10 p-6 hover:bg-white/98 dark:hover:bg-charcoal/90 hover:border-gold/60 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              style={{ borderRadius: '8px', perspective: '1000px' }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="p-3 bg-gradient-to-br from-gold/30 to-gold/15 group-hover:from-gold/40 group-hover:to-gold/25 transition-colors flex-shrink-0" 
                  style={{ borderRadius: '4px' }}
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <reason.icon className="text-gold" size={22} />
                </motion.div>
                <div className="flex-1">
                  <h3 
                    className="font-bold mb-2 text-black dark:text-gold group-hover:text-gold transition-colors"
                    style={{ fontFamily: 'var(--font-cormorant)', fontSize: '17px' }}
                  >
                    {reason.title}
                  </h3>
                  <p 
                    className="text-black dark:text-gray-400 leading-relaxed"
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '13px' }}
                  >
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
