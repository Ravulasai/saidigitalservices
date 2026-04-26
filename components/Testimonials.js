'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiStar } from 'react-icons/fi';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
      text: 'Very professional service. The SEO optimization helped us rank on first page of Google. Great support throughout the project.',
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

  return (
    <section id="testimonials" ref={ref} className="py-20 px-4" aria-label="Client Testimonials">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Client <span className="text-gold">Testimonials</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm">
            What our satisfied clients say about our services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-light p-5 hover:shadow-xl transition-all duration-300"
              style={{ borderRadius: '4px' }}
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-10 h-10 bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center text-sm font-bold text-black"
                  style={{ borderRadius: '2px' }}
                  aria-hidden="true"
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-xs" itemProp="author">{testimonial.name}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{testimonial.business}</p>
                </div>
              </div>

              <div
                className="flex gap-0.5 mb-2"
                aria-label={`${testimonial.rating} out of 5 stars`}
                itemProp="reviewRating"
                itemScope
                itemType="https://schema.org/Rating"
              >
                <meta itemProp="ratingValue" content={testimonial.rating} />
                <meta itemProp="bestRating" content="5" />
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="text-gold fill-gold" size={12} aria-hidden="true" />
                ))}
              </div>

              <p
                className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed"
                itemProp="reviewBody"
              >
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
