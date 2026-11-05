'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiDollarSign, FiZap, FiSearch, FiSmartphone, FiHeart, FiTrendingUp } from 'react-icons/fi';

const reasons = [
  {
    icon: FiDollarSign,
    title: 'Affordable Pricing',
    description: 'Quality services at competitive rates perfect for startups and small businesses in West Godavari.',
  },
  {
    icon: FiZap,
    title: 'Fast & Modern Designs',
    description: 'Lightning-fast websites with contemporary designs that impress visitors and convert leads.',
  },
  {
    icon: FiSearch,
    title: 'SEO Ready',
    description: 'Built-in SEO optimisation to help your business rank higher in Google search results.',
  },
  {
    icon: FiSmartphone,
    title: 'Mobile First',
    description: 'Perfectly optimised for mobile devices where the majority of your customers browse.',
  },
  {
    icon: FiHeart,
    title: 'Personalised Support',
    description: 'Dedicated support and guidance throughout your entire digital journey.',
  },
  {
    icon: FiTrendingUp,
    title: 'Business Growth Focused',
    description: 'Strategies designed to generate quality leads and grow your revenue consistently.',
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="why-choose-us"
      ref={ref}
      className="bg-section section-pad relative overflow-hidden"
      aria-labelledby="why-heading"
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 left-0 w-80 h-80 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle at 10% 10%, rgba(107,91,149,0.07) 0%, transparent 55%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-72 h-72 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle at 90% 90%, rgba(212,175,55,0.07) 0%, transparent 55%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-10 md:mb-14"
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: 'var(--gold)', fontFamily: 'var(--font-inter)' }}
          >
            Our Advantage
          </p>
          <h2
            id="why-heading"
            className="section-title text-3xl md:text-4xl lg:text-5xl mb-3"
          >
            Why Choose <span className="text-gold">Us</span>
          </h2>
          <p
            className="section-desc max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--muted)', fontFamily: 'var(--font-inter)', fontSize: '1rem' }}
          >
            What makes us the right digital partner for your business success
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 + index * 0.07 }}
              whileHover={{ y: -4 }}
              className="card group p-6 cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className="icon-badge shrink-0" aria-hidden="true">
                  <reason.icon style={{ color: 'var(--gold)' }} size={20} />
                </div>
                <div>
                  <h3
                    className="font-bold mb-1.5 group-hover:text-gold transition-colors"
                    style={{ fontFamily: 'var(--font-manrope)', fontSize: '1rem', color: 'var(--heading)' }}
                  >
                    {reason.title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--muted)' }}
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
