'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

export default function FAQ({ showHeading = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How much does a professional website cost?',
      answer: 'Website costs vary based on requirements. A basic business website starts from ₹15,000, while e-commerce and custom solutions are priced based on features. We provide detailed quotes tailored to your specific needs and budget.',
    },
    {
      question: 'Do you provide comprehensive SEO services?',
      answer: 'Yes! We provide complete SEO services including on-page optimization, technical SEO, content optimization, local SEO, and ongoing ranking improvements. Our goal is to increase your online visibility and drive organic traffic.',
    },
    {
      question: 'What is the typical timeline for website development?',
      answer: 'A standard business website typically takes 1-2 weeks, while e-commerce sites and complex projects may take 3-4 weeks. Timeline depends on content readiness, design complexity, features required, and client feedback cycles.',
    },
    {
      question: 'Do you handle social media marketing and management?',
      answer: 'Absolutely! We manage Instagram and Facebook accounts, create engaging content, run targeted ad campaigns, and develop comprehensive strategies to grow your social media presence and customer engagement.',
    },
    {
      question: 'Can you help with e-commerce website development?',
      answer: 'Yes, we develop complete e-commerce solutions including online store setup, payment gateway integration, inventory management, order processing, and mobile-optimized shopping experiences for seamless customer transactions.',
    },
    {
      question: 'Is ongoing website maintenance and support included?',
      answer: 'We offer comprehensive website maintenance packages including regular updates, security patches, bug fixes, content updates, performance optimization, and technical support to keep your website running smoothly.',
    },
  ];

  return (
    <section id="faq" ref={ref} className="pt-5 pb-8 px-4 bg-white dark:bg-charcoal/50 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple/5 via-transparent to-gold/5 pointer-events-none" />
      <div className="absolute top-20 right-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header — shown on home page, hidden on /faq page which has its own h1 */}
        {showHeading && (
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
              Frequently Asked <span className="text-gold italic" style={{ fontFamily: 'var(--font-cormorant)' }}>Questions</span>
            </h2>
            <p
              className="text-black dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)', fontSize: '16px' }}
            >
              Answers to common questions about our services and process
            </p>
          </motion.div>
        )}

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 + index * 0.1,
                type: "spring",
                stiffness: 120
              }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="bg-white/95 dark:bg-charcoal/80 backdrop-blur-xl border-2 border-gold/40 dark:border-white/10 overflow-hidden hover:border-gold/60 hover:shadow-xl transition-all duration-300"
              style={{ borderRadius: '8px' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/50 dark:hover:bg-charcoal/50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span 
                  className="font-bold pr-4 text-black dark:text-gold"
                  style={{ fontFamily: 'var(--font-cormorant)', fontSize: '17px' }}
                >
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                  className="flex-shrink-0"
                >
                  <FiChevronDown className="text-gold" size={22} />
                </motion.div>
              </button>
              
              <motion.div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                initial={false}
                animate={{ height: openIndex === index ? 'auto' : 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div 
                  className="px-6 pb-5 text-black dark:text-gray-300 leading-relaxed"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '14px' }}
                >
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
