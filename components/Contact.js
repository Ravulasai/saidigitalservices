'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiPhone, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact({ showHeading = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const services = [
    'Website Development',
    'SEO Optimization',
    'Social Media Management',
    'Digital Marketing',
    'Branding Strategy',
    'Website Maintenance',
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Enter valid 10-digit Indian mobile number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter valid email address';
    }
    if (!formData.service) newErrors.service = 'Please select a service';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send');

      setShowSuccess(true);
      setFormData({ name: '', phone: '', email: '', businessName: '', service: '', message: '' });
      setTimeout(() => setShowSuccess(false), 6000);
    } catch {
      setSubmitError('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <section id="contact" ref={ref} className="pt-5 pb-8 px-3 sm:px-4 bg-cream dark:bg-charcoal/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple/5 via-transparent to-gold/5 pointer-events-none" />
      <div className="absolute top-20 right-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">

        {/* Section Header — h2 shown on home page, hidden on /contact which has its own h1 */}
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
              Get In <span className="text-gold italic" style={{ fontFamily: 'var(--font-cormorant)' }}>Touch</span>
            </h2>
            <p
              className="text-black dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)', fontSize: '16px' }}
            >
              Let&apos;s grow together - tell us about your business and we&apos;ll craft the right digital strategy for you
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">

          {/* Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
            className="flex flex-col space-y-3 sm:space-y-4 lg:space-y-6 h-full w-full"
          >
            {/* Contact Information Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/95 dark:bg-charcoal/80 backdrop-blur-xl border-2 border-gold/40 dark:border-white/10 p-3 sm:p-4 lg:p-8 shadow-2xl hover:shadow-3xl hover:border-gold/60 transition-all duration-500 w-full"
              style={{ borderRadius: '8px' }}
            >
              <h3
                className="font-bold mb-3 sm:mb-4 lg:mb-6 text-black dark:text-gold"
                style={{ fontFamily: 'var(--font-cormorant)', fontSize: '16px' }}
              >
                Contact Information
              </h3>

              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <motion.a
                  href="tel:+916304484048"
                  className="flex items-center gap-2 sm:gap-3 lg:gap-4 group hover:text-gold transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="p-1.5 sm:p-2 lg:p-3 bg-gradient-to-br from-gold/30 to-gold/15 group-hover:from-gold/40 group-hover:to-gold/25 transition-colors" style={{ borderRadius: '4px' }}>
                    <FiPhone className="text-gold" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold text-black dark:text-white" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '14px' }}>Phone</div>
                    <div className="text-black dark:text-gray-400" style={{ fontFamily: 'var(--font-inter)', fontSize: '12px' }}>+91 6304484048</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://wa.me/916304484048?text=Hi,%20what%20can%20I%20help%20you%20with?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 lg:gap-4 group hover:text-gold transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="p-1.5 sm:p-2 lg:p-3 bg-gradient-to-br from-gold/30 to-gold/15 group-hover:from-gold/40 group-hover:to-gold/25 transition-colors" style={{ borderRadius: '4px' }}>
                    <FaWhatsapp className="text-gold" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold text-black dark:text-white" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '14px' }}>WhatsApp</div>
                    <div className="text-black dark:text-gray-400" style={{ fontFamily: 'var(--font-inter)', fontSize: '12px' }}>Chat with us instantly</div>
                  </div>
                </motion.a>

                <div className="pt-2 sm:pt-3 lg:pt-4 border-t border-gold/20">
                  <div className="font-semibold mb-1 sm:mb-2 text-black dark:text-gold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '14px' }}>Service Areas</div>
                  <div className="text-black dark:text-gray-400" style={{ fontFamily: 'var(--font-inter)', fontSize: '12px' }}>Serving businesses across India</div>
                  <div className="text-black dark:text-gray-400 mt-1" style={{ fontFamily: 'var(--font-inter)', fontSize: '12px' }}>Phone: +91 6304484048</div>
                </div>
              </div>
            </motion.div>

            {/* Map - desktop only */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.01 }}
              className="hidden lg:flex flex-1 overflow-hidden shadow-2xl border-2 border-gold/40 dark:border-white/10 hover:border-gold/60 transition-all duration-500"
              style={{ borderRadius: '8px' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15261.5!2d81.5833!3d16.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b0c1234abcde%3A0x0!2sMogalthuru%2C%20West%20Godavari%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sai Digital Services Location"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="h-full w-full"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/95 dark:bg-charcoal/80 backdrop-blur-xl border-2 border-gold/40 dark:border-white/10 p-3 sm:p-4 lg:p-8 shadow-2xl hover:shadow-3xl hover:border-gold/60 transition-all duration-500 space-y-3 lg:space-y-4 h-full w-full"
              style={{ borderRadius: '8px' }}
            >
              <div>
                <label htmlFor="name" className="block font-semibold mb-1 sm:mb-2 text-black dark:text-gold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '13px' }}>Name *</label>
                <input
                  type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                  aria-label="Your full name"
                  aria-required="true"
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-charcoal text-black dark:text-white border-2 ${errors.name ? 'border-red-500' : 'border-gold/30 dark:border-white/20'} focus:border-gold focus:outline-none transition-colors`}
                  style={{ borderRadius: '4px', fontFamily: 'var(--font-inter)', fontSize: '13px' }}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1" role="alert">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block font-semibold mb-1 sm:mb-2 text-black dark:text-gold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '13px' }}>Phone *</label>
                <div className="flex gap-0 w-full">
                  <span
                    aria-label="India country code +91"
                    className="inline-flex items-center px-3 py-2 sm:py-3 bg-gold/20 dark:bg-gold/10 border-2 border-r-0 border-gold/30 dark:border-white/20 text-black dark:text-white font-semibold flex-shrink-0"
                    style={{ borderRadius: '4px 0 0 4px', fontFamily: 'var(--font-inter)', fontSize: '13px' }}
                  >
                    🇮🇳 +91
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    aria-label="Phone number (10-digit Indian mobile number)"
                    className={`flex-1 min-w-0 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 bg-white dark:bg-charcoal text-black dark:text-white border-2 ${errors.phone ? 'border-red-500' : 'border-gold/30 dark:border-white/20'} focus:border-gold focus:outline-none transition-colors`}
                    style={{ borderRadius: '0 4px 4px 0', fontFamily: 'var(--font-inter)', fontSize: '13px' }}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    inputMode="numeric"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-xs mt-1" role="alert">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block font-semibold mb-1 sm:mb-2 text-black dark:text-gold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '13px' }}>Email *</label>
                <input
                  type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-charcoal text-black dark:text-white border-2 ${errors.email ? 'border-red-500' : 'border-gold/30 dark:border-white/20'} focus:border-gold focus:outline-none transition-colors`}
                  style={{ borderRadius: '4px', fontFamily: 'var(--font-inter)', fontSize: '13px' }}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="businessName" className="block font-semibold mb-1 sm:mb-2 text-black dark:text-gold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '13px' }}>Business Name</label>
                <input
                  type="text" id="businessName" name="businessName" value={formData.businessName} onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-charcoal text-black dark:text-white border-2 border-gold/30 dark:border-white/20 focus:border-gold focus:outline-none transition-colors"
                  style={{ borderRadius: '4px', fontFamily: 'var(--font-inter)', fontSize: '13px' }}
                  placeholder="Your business name (optional)"
                />
              </div>

              <div>
                <label htmlFor="service" className="block font-semibold mb-1 sm:mb-2 text-black dark:text-gold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '13px' }}>Service Needed *</label>
                <select
                  id="service" name="service" value={formData.service} onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-charcoal text-black dark:text-white border-2 ${errors.service ? 'border-red-500' : 'border-gold/30 dark:border-white/20'} focus:border-gold focus:outline-none transition-colors`}
                  style={{ borderRadius: '4px', fontFamily: 'var(--font-inter)', fontSize: '13px' }}
                >
                  <option value="" className="bg-white dark:bg-charcoal text-black dark:text-white">Select a service</option>
                  {services.map(service => (
                    <option key={service} value={service} className="bg-white dark:bg-charcoal text-black dark:text-white">{service}</option>
                  ))}
                </select>
                {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block font-semibold mb-1 sm:mb-2 text-black dark:text-gold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '13px' }}>Message</label>
                <textarea
                  id="message" name="message" value={formData.message} onChange={handleChange} rows="3"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-charcoal text-black dark:text-white border-2 border-gold/30 dark:border-white/20 focus:border-gold focus:outline-none transition-colors resize-none"
                  style={{ borderRadius: '4px', fontFamily: 'var(--font-inter)', fontSize: '13px' }}
                  placeholder="Tell us about your project (optional)"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gold text-black font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gold/50 flex items-center justify-center gap-2 sm:gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ borderRadius: '4px', fontFamily: 'var(--font-inter)', fontSize: '14px' }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Let&apos;s Grow Together</span>
                    <FiSend size={14} />
                  </>
                )}
              </motion.button>

              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 sm:p-4 bg-red-500/20 border-2 border-red-500/50 text-red-600 dark:text-red-400 text-center"
                  style={{ borderRadius: '4px', fontFamily: 'var(--font-inter)', fontSize: '13px' }}
                >
                  {submitError}
                </motion.div>
              )}

              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 sm:p-4 bg-green-500/20 border-2 border-green-500/50 text-green-600 dark:text-green-400 text-center"
                  style={{ borderRadius: '4px', fontFamily: 'var(--font-inter)', fontSize: '13px' }}
                >
                  Thank you! We&apos;ll contact you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
