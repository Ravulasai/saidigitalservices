'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Sai Kiran',
    business: 'Retail Business, Hyderabad',
    rating: 5,
    text: 'Excellent work! Our website looks professional and we are getting more inquiries now. Highly recommended for local businesses.',
    avatar: 'SK',
  },
  {
    name: 'Harika',
    business: 'Consultancy, Vijayawada',
    rating: 5,
    text: 'Very professional service. The SEO optimisation helped us rank on first page of Google. Great support throughout the project.',
    avatar: 'H',
  },
  {
    name: 'Praveen',
    business: 'Enterprises, Rajahmundry',
    rating: 5,
    text: 'Fast delivery and modern design. The website is mobile-friendly and our customers love it. Worth every rupee!',
    avatar: 'P',
  },
  {
    name: 'Sravani',
    business: 'Services, Visakhapatnam',
    rating: 5,
    text: 'Outstanding digital marketing services. Our social media engagement increased significantly. Very satisfied with the results.',
    avatar: 'S',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="bg-section-alt section-pad relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative blob */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
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
            Client Stories
          </p>
          <h2
            id="testimonials-heading"
            className="section-title text-3xl md:text-4xl lg:text-5xl mb-3"
          >
            What Clients <span className="text-gold">Say</span>
          </h2>
          <p
            className="section-desc max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--muted)', fontFamily: 'var(--font-inter)', fontSize: '1rem' }}
          >
            Trusted by businesses across Andhra Pradesh and Telangana
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, index) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="card p-5 flex flex-col"
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Reviewer */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-black shrink-0"
                  style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)' }}
                  aria-hidden="true"
                >
                  {t.avatar}
                </div>
                <div>
                  <h4
                    className="font-bold text-sm leading-none mb-0.5"
                    style={{ fontFamily: 'var(--font-manrope)', color: 'var(--heading)' }}
                    itemProp="author"
                  >
                    {t.name}
                  </h4>
                  <p
                    className="text-xs"
                    style={{ fontFamily: 'var(--font-inter)', color: 'var(--muted)' }}
                  >
                    {t.business}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div
                className="flex gap-0.5 mb-3"
                aria-label={`${t.rating} out of 5 stars`}
                itemProp="reviewRating"
                itemScope
                itemType="https://schema.org/Rating"
              >
                <meta itemProp="ratingValue" content={String(t.rating)} />
                <meta itemProp="bestRating" content="5" />
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FiStar
                    key={i}
                    size={13}
                    aria-hidden="true"
                    style={{ color: 'var(--gold)', fill: 'var(--gold)' }}
                  />
                ))}
              </div>

              {/* Review text */}
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ fontFamily: 'var(--font-inter)', color: 'var(--body)' }}
                itemProp="reviewBody"
              >
                &ldquo;{t.text}&rdquo;
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
