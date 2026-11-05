'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiPhone, FiSend, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact({ showHeading = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
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
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-md text-sm border-2 bg-white dark:bg-charcoal transition-colors focus:outline-none ${
      errors[field]
        ? 'border-red-400'
        : 'border-[rgba(107,91,149,0.22)] focus:border-gold'
    }`;

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-section-alt section-pad relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle at 90% 10%, rgba(212,175,55,0.07) 0%, transparent 55%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle at 10% 90%, rgba(107,91,149,0.06) 0%, transparent 55%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
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
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-inter)' }}
            >
              Let&apos;s Talk
            </p>
            <h2
              id="contact-heading"
              className="section-title text-3xl md:text-4xl lg:text-5xl mb-3"
            >
              Get In <span className="text-gold">Touch</span>
            </h2>
            <p
              className="section-desc max-w-2xl mx-auto leading-relaxed"
              style={{ color: 'var(--muted)', fontFamily: 'var(--font-inter)', fontSize: '1rem' }}
            >
              Tell us about your business and we&apos;ll craft the right digital strategy for you
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left — contact info + map */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, type: 'spring', stiffness: 100 }}
            className="flex flex-col gap-5"
          >
            {/* Contact info card */}
            <div className="card p-6 md:p-7">
              <h3
                className="font-bold mb-5"
                style={{ fontFamily: 'var(--font-manrope)', fontSize: '1.0625rem', color: 'var(--heading)' }}
              >
                Contact Information
              </h3>

              <div className="space-y-5">
                {/* Phone */}
                <a
                  href="tel:+916304484048"
                  className="flex items-center gap-4 group"
                  aria-label="Call +91 6304484048"
                >
                  <div className="icon-badge shrink-0" style={{ width: 40, height: 40 }} aria-hidden="true">
                    <FiPhone style={{ color: 'var(--gold)' }} size={17} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: 'var(--muted)', fontFamily: 'var(--font-inter)' }}>Phone</p>
                    <p className="font-semibold text-sm group-hover:text-gold transition-colors" style={{ fontFamily: 'var(--font-inter)', color: 'var(--body)' }}>+91 6304484048</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919010996525?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                  aria-label="Chat on WhatsApp"
                >
                  <div className="icon-badge shrink-0" style={{ width: 40, height: 40 }} aria-hidden="true">
                    <FaWhatsapp style={{ color: 'var(--gold)' }} size={17} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: 'var(--muted)', fontFamily: 'var(--font-inter)' }}>WhatsApp</p>
                    <p className="font-semibold text-sm group-hover:text-gold transition-colors" style={{ fontFamily: 'var(--font-inter)', color: 'var(--body)' }}>Chat with us instantly</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="icon-badge shrink-0" style={{ width: 40, height: 40 }} aria-hidden="true">
                    <FiMapPin style={{ color: 'var(--gold)' }} size={17} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: 'var(--muted)', fontFamily: 'var(--font-inter)' }}>Location</p>
                    <p className="font-semibold text-sm" style={{ fontFamily: 'var(--font-inter)', color: 'var(--body)' }}>
                      Mogaltur, West Godavari<br />
                      <span style={{ color: 'var(--muted)', fontWeight: 400 }}>Andhra Pradesh, India</span>
                    </p>
                  </div>
                </div>

                <div
                  className="pt-4"
                  style={{ borderTop: '1px solid rgba(107,91,149,0.1)' }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: 'var(--muted)', fontFamily: 'var(--font-inter)' }}>Service Areas</p>
                  <p className="text-sm" style={{ fontFamily: 'var(--font-inter)', color: 'var(--body)' }}>
                    Mogaltur · West Godavari · Andhra Pradesh · Telangana
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded map — desktop only */}
            <div
              className="hidden lg:block flex-1 overflow-hidden rounded-lg"
              style={{
                border: '1px solid rgba(212,175,55,0.28)',
                minHeight: 220,
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15261.5!2d81.5833!3d16.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b0c1234abcde%3A0x0!2sMogaltur%2C%20West%20Godavari%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', minHeight: 220 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sai Digital Services – Mogaltur, West Godavari location"
              />
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 100 }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="card p-6 md:p-7 space-y-4"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                  style={{ fontFamily: 'var(--font-inter)', color: 'var(--muted)' }}
                >
                  Name <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass('name')}
                  placeholder="Your name"
                  aria-required="true"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-500 text-xs mt-1" role="alert">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                  style={{ fontFamily: 'var(--font-inter)', color: 'var(--muted)' }}
                >
                  Phone <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <div className="flex gap-0">
                  <span
                    className="inline-flex items-center px-3 py-3 text-sm font-semibold rounded-l-md border-2 border-r-0"
                    style={{
                      background: 'rgba(212,175,55,0.1)',
                      borderColor: errors.phone ? '#f87171' : 'rgba(107,91,149,0.22)',
                      color: 'var(--body)',
                      fontFamily: 'var(--font-inter)',
                    }}
                    aria-label="India country code +91"
                  >
                    🇮🇳 +91
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-1 min-w-0 px-3 py-3 text-sm rounded-r-md border-2 bg-white dark:bg-charcoal focus:outline-none transition-colors"
                    style={{
                      borderColor: errors.phone ? '#f87171' : 'rgba(107,91,149,0.22)',
                      color: 'var(--body)',
                      fontFamily: 'var(--font-inter)',
                    }}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    inputMode="numeric"
                    aria-required="true"
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                </div>
                {errors.phone && (
                  <p id="phone-error" className="text-red-500 text-xs mt-1" role="alert">{errors.phone}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                  style={{ fontFamily: 'var(--font-inter)', color: 'var(--muted)' }}
                >
                  Email <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass('email')}
                  placeholder="your@email.com"
                  aria-required="true"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-xs mt-1" role="alert">{errors.email}</p>
                )}
              </div>

              {/* Business name */}
              <div>
                <label
                  htmlFor="businessName"
                  className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                  style={{ fontFamily: 'var(--font-inter)', color: 'var(--muted)' }}
                >
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className={inputClass('')}
                  placeholder="Your business name (optional)"
                />
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                  style={{ fontFamily: 'var(--font-inter)', color: 'var(--muted)' }}
                >
                  Service Needed <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={inputClass('service')}
                  aria-required="true"
                  aria-describedby={errors.service ? 'service-error' : undefined}
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.service && (
                  <p id="service-error" className="text-red-500 text-xs mt-1" role="alert">{errors.service}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                  style={{ fontFamily: 'var(--font-inter)', color: 'var(--muted)' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className={inputClass('')}
                  placeholder="Tell us about your project (optional)"
                  style={{ resize: 'none' }}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                    <span>Sending…</span>
                  </>
                ) : (
                  <>
                    <span>Let&apos;s Grow Together</span>
                    <FiSend size={14} aria-hidden="true" />
                  </>
                )}
              </motion.button>

              {/* Error message */}
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  className="p-3 text-sm text-red-600 rounded-md"
                  style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.3)', fontFamily: 'var(--font-inter)' }}
                >
                  {submitError}
                </motion.div>
              )}

              {/* Success message */}
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  aria-live="polite"
                  className="p-3 text-sm text-green-700 rounded-md"
                  style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.3)', fontFamily: 'var(--font-inter)' }}
                >
                  Thank you! We&apos;ll contact you within 24 hours.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
