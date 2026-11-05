'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiTrendingUp, FiShare2, FiTarget, FiZap, FiTool } from 'react-icons/fi';

const services = [
  {
    icon: FiCode,
    title: 'Website Development',
    description: 'Responsive business websites, portfolio sites, landing pages, and e-commerce solutions built with modern technologies.',
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

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="services"
      ref={ref}
      className="bg-section-alt section-pad relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Subtle decorative blobs */}
      <div
        className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle at 80% 20%, rgba(212,175,55,0.08) 0%, transparent 60%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle at 20% 80%, rgba(107,91,149,0.07) 0%, transparent 60%)' }}
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
            What We Do
          </p>
          <h2
            id="services-heading"
            className="section-title text-3xl md:text-4xl lg:text-5xl mb-3"
          >
            Our <span className="text-gold">Services</span>
          </h2>
          <p
            className="section-desc max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--muted)', fontFamily: 'var(--font-inter)', fontSize: '1rem' }}
          >
            Comprehensive digital solutions to help your business thrive online — from web development to marketing
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 + index * 0.07 }}
              whileHover={{ y: -4 }}
              className="card group p-6 cursor-default"
            >
              {/* Icon */}
              <div className="icon-badge mb-4" aria-hidden="true">
                <service.icon style={{ color: 'var(--gold)' }} size={22} />
              </div>

              {/* Title */}
              <h3
                className="font-bold mb-2 group-hover:text-gold transition-colors"
                style={{
                  fontFamily: 'var(--font-manrope)',
                  fontSize: '1.0625rem',
                  color: 'var(--heading)',
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="leading-relaxed"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--muted)' }}
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
