'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    question: 'How much does a professional website cost?',
    answer:
      'Website costs vary based on requirements. A basic business website starts from ₹15,000, while e-commerce and custom solutions are priced based on features. We provide detailed quotes tailored to your specific needs and budget.',
  },
  {
    question: 'Do you provide comprehensive SEO services?',
    answer:
      'Yes! We provide complete SEO services including on-page optimisation, technical SEO, content optimisation, local SEO, and ongoing ranking improvements. Our goal is to increase your online visibility and drive organic traffic.',
  },
  {
    question: 'What is the typical timeline for website development?',
    answer:
      'A standard business website typically takes 1–2 weeks, while e-commerce sites and complex projects may take 3–4 weeks. Timeline depends on content readiness, design complexity, features required, and client feedback cycles.',
  },
  {
    question: 'Do you handle social media marketing and management?',
    answer:
      'Absolutely! We manage Instagram and Facebook accounts, create engaging content, run targeted ad campaigns, and develop comprehensive strategies to grow your social media presence and customer engagement.',
  },
  {
    question: 'Can you help with e-commerce website development?',
    answer:
      'Yes, we develop complete e-commerce solutions including online store setup, payment gateway integration, inventory management, order processing, and mobile-optimised shopping experiences for seamless customer transactions.',
  },
  {
    question: 'Is ongoing website maintenance and support included?',
    answer:
      'We offer comprehensive website maintenance packages including regular updates, security patches, bug fixes, content updates, performance optimisation, and technical support to keep your website running smoothly.',
  },
];

export default function FAQ({ showHeading = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [openIndex, setOpenIndex] = useState(0);
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme === 'dark';

  /* Colour tokens that differ between modes */
  const colors = {
    questionDefault: dark ? '#f3f4f6' : '#1A1A2E',   // white-ish  vs  deep navy
    questionOpen:    '#D4AF37',                        // gold in both modes
    answer:          dark ? '#e5e7eb' : '#5A5A6A',    // near-white vs muted grey
    chevronDefault:  dark ? '#9ca3af' : '#5A5A6A',
    chevronOpen:     '#D4AF37',
    cardBg:          dark ? '#1C1C1C' : '#FFFFFF',
    cardBorder:      dark ? 'rgba(212,175,55,0.18)' : 'rgba(212,175,55,0.28)',
    cardBorderOpen:  dark ? 'rgba(212,175,55,0.45)' : 'rgba(212,175,55,0.55)',
    divider:         dark ? 'rgba(255,255,255,0.07)' : 'rgba(107,91,149,0.08)',
    hoverBg:         dark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
    sectionBg:       dark ? '#0A0A0A' : 'var(--bg)',
    subtext:         dark ? '#9ca3af' : '#5A5A6A',
    headingColor:    dark ? '#f9fafb' : '#1A1A2E',
  };

  return (
    <section
      id="faq"
      ref={ref}
      className="section-pad relative overflow-hidden"
      style={{ backgroundColor: colors.sectionBg }}
      aria-labelledby="faq-heading"
    >
      {/* Decorative blob */}
      <div
        className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle at 90% 10%, rgba(107,91,149,0.07) 0%, transparent 60%)' }}
      />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Section header */}
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="text-center mb-10 md:mb-14"
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: '#D4AF37', fontFamily: 'var(--font-inter)' }}
            >
              Got Questions?
            </p>
            <h2
              id="faq-heading"
              className="section-title text-3xl md:text-4xl lg:text-5xl mb-3"
              style={{ color: colors.headingColor }}
            >
              Frequently Asked{' '}
              <span style={{ color: '#D4AF37' }}>Questions</span>
            </h2>
            <p
              className="section-desc max-w-2xl mx-auto leading-relaxed"
              style={{ color: colors.subtext, fontFamily: 'var(--font-inter)', fontSize: '1rem' }}
            >
              Answers to common questions about our services and process
            </p>
          </motion.div>
        )}

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.06 + index * 0.06 }}
                style={{
                  backgroundColor: colors.cardBg,
                  border: `1px solid ${isOpen ? colors.cardBorderOpen : colors.cardBorder}`,
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  transition: 'border-color 0.25s ease',
                }}
              >
                {/* Question button */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors"
                  style={{ minHeight: 52, backgroundColor: isOpen ? colors.hoverBg : 'transparent' }}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = colors.hoverBg; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = isOpen ? colors.hoverBg : 'transparent'; }}
                >
                  <span
                    className="font-semibold pr-4 leading-snug"
                    style={{
                      fontFamily: 'var(--font-manrope)',
                      fontSize: '0.9375rem',
                      color: isOpen ? colors.questionOpen : colors.questionDefault,
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0"
                    aria-hidden="true"
                  >
                    <FiChevronDown
                      size={20}
                      style={{
                        color: isOpen ? colors.chevronOpen : colors.chevronDefault,
                        transition: 'color 0.2s ease',
                      }}
                    />
                  </motion.span>
                </button>

                {/* Answer */}
                <motion.div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div
                    className="px-5 pb-5"
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.9rem',
                      color: colors.answer,
                      lineHeight: 1.75,
                      borderTop: `1px solid ${colors.divider}`,
                      paddingTop: '1rem',
                    }}
                  >
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
