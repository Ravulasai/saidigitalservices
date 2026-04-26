'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { FiCode, FiTrendingUp, FiShare2, FiTarget, FiZap, FiTool, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

export default function ServicesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: FiCode,
      title: 'Website Development',
      subtitle: 'Modern & Responsive Solutions',
      description: 'Create stunning, fast-loading websites that drive business growth with modern technologies and responsive design.',
      features: [
        'Responsive design for all devices',
        'Fast loading speeds',
        'SEO-optimized structure',
        'Modern UI/UX design'
      ],
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
    },
    {
      icon: FiTrendingUp,
      title: 'SEO Optimization',
      subtitle: 'Boost Search Rankings',
      description: 'Improve your online visibility and attract qualified leads with proven SEO strategies and optimization techniques.',
      features: [
        'On-page SEO optimization',
        'Technical SEO improvements',
        'Local SEO strategies',
        'Performance monitoring'
      ],
      technologies: ['Google Analytics', 'SEMrush', 'Ahrefs'],
    },
    {
      icon: FiShare2,
      title: 'Social Media Management',
      subtitle: 'Build Brand Presence',
      description: 'Grow your brand across Instagram and Facebook with engaging content and strategic social media management.',
      features: [
        'Content creation & scheduling',
        'Audience engagement',
        'Brand consistency',
        'Analytics & insights'
      ],
      technologies: ['Meta Business', 'Canva', 'Hootsuite'],
    },
    {
      icon: FiTarget,
      title: 'Digital Marketing',
      subtitle: 'Generate Quality Leads',
      description: 'Drive targeted traffic and convert visitors into customers with data-driven digital marketing campaigns.',
      features: [
        'Google Ads campaigns',
        'Lead generation',
        'Email marketing',
        'ROI tracking'
      ],
      technologies: ['Google Ads', 'Facebook Ads', 'Mailchimp'],
    },
    {
      icon: FiZap,
      title: 'Branding Strategy',
      subtitle: 'Create Brand Identity',
      description: 'Build a strong, recognizable brand that resonates with your audience and stands out in the marketplace.',
      features: [
        'Brand identity development',
        'Visual design guidelines',
        'Brand voice & messaging',
        'Market positioning'
      ],
      technologies: ['Adobe Creative Suite', 'Figma', 'Canva'],
    },
    {
      icon: FiTool,
      title: 'Website Maintenance',
      subtitle: 'Keep Sites Running Smoothly',
      description: 'Ensure your website stays secure, fast, and up-to-date with comprehensive maintenance and support services.',
      features: [
        'Security updates',
        'Performance optimization',
        'Regular backups',
        '24/7 support'
      ],
      technologies: ['WordPress', 'Security Tools', 'Monitoring'],
    },
  ];

  return (
    <div className="min-h-screen bg-cream dark:bg-matte-black">
      <Navbar />
      
      <section className="pt-24 pb-12 px-4 relative overflow-hidden">
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
              Our <span className="text-gold italic" style={{ fontFamily: 'var(--font-cormorant)' }}>Services</span>
            </h1>
            <p 
              className="text-black dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)', fontSize: '16px' }}
            >
              Comprehensive digital solutions designed to transform your business and drive sustainable growth in the digital landscape
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/95 dark:bg-charcoal/80 backdrop-blur-xl border-2 border-gold/40 dark:border-white/10 p-6 shadow-2xl hover:shadow-3xl hover:border-gold/60 transition-all duration-500 h-full flex flex-col group"
                style={{ borderRadius: '8px' }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="p-4 bg-gradient-to-br from-gold/30 to-gold/15 group-hover:from-gold/40 group-hover:to-gold/25 transition-colors shadow-lg" 
                    style={{ borderRadius: '8px' }}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <service.icon className="text-gold" size={28} />
                  </motion.div>
                  <div>
                    <motion.h2 
                      className="text-xl lg:text-2xl font-bold text-black dark:text-gold"
                      style={{ fontFamily: 'var(--font-cormorant)' }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.15 + 0.2 }}
                    >
                      {service.title}
                    </motion.h2>
                    <motion.p 
                      className="text-gold font-semibold"
                      style={{ fontFamily: 'var(--font-inter)', fontSize: '13px' }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.15 + 0.3 }}
                    >
                      {service.subtitle}
                    </motion.p>
                  </div>
                </div>

                <motion.p 
                  className="text-black dark:text-gray-300 leading-relaxed mb-6"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '14px' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15 + 0.4 }}
                >
                  {service.description}
                </motion.p>
                
                <div className="space-y-2 mb-6 flex-1">
                  {service.features.slice(0, 4).map((feature, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-start gap-2.5"
                      initial={{ opacity: 0, x: -15 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.15 + 0.5 + i * 0.05 }}
                    >
                      <div className="p-1 bg-gradient-to-br from-gold/40 to-gold/20 mt-0.5 shadow-sm" style={{ borderRadius: '4px' }}>
                        <FiCheckCircle className="text-gold" size={12} />
                      </div>
                      <span 
                        className="text-black dark:text-gray-300 leading-relaxed"
                        style={{ fontFamily: 'var(--font-inter)', fontSize: '13px' }}
                      >
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 
                    className="font-semibold mb-3 text-black dark:text-gold"
                    style={{ fontFamily: 'var(--font-cormorant)', fontSize: '16px' }}
                  >
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.slice(0, 3).map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.15 + 0.7 + i * 0.05 }}
                        className="px-2.5 py-1.5 bg-gradient-to-r from-gold/20 to-purple/15 border border-gold/30 text-black dark:text-white hover:border-gold/50 hover:shadow-md transition-all duration-300"
                        style={{ borderRadius: '4px', fontFamily: 'var(--font-inter)', fontSize: '11px' }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15 + 0.8 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-black font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gold/50 hover:scale-105 group w-full justify-center"
                    style={{ borderRadius: '4px', fontFamily: 'var(--font-inter)', fontSize: '13px' }}
                  >
                    <span>Let's Grow Together</span>
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={14} />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-gradient-to-br from-purple/10 via-transparent to-gold/10 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white/95 dark:bg-charcoal/80 backdrop-blur-xl border-2 border-gold/40 dark:border-white/10 p-8 lg:p-12 shadow-2xl hover:shadow-3xl hover:border-gold/60 transition-all duration-500"
            style={{ borderRadius: '8px' }}
          >
            <h2 
              className="text-3xl lg:text-4xl font-bold mb-4 text-black dark:text-gold"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Ready to Grow Together?
            </h2>
            <p 
              className="text-black dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)', fontSize: '16px' }}
            >
              Let's build something great - reach out and we'll craft a digital strategy tailored to your business goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-black font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gold/50 group"
                style={{ borderRadius: '4px', fontFamily: 'var(--font-inter)', fontSize: '16px' }}
              >
                <span>Let's Grow Together</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-black font-semibold transition-all duration-300"
                style={{ borderRadius: '4px', fontFamily: 'var(--font-inter)', fontSize: '16px' }}
              >
                <span>Learn More About Us</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}