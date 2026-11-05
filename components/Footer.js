'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin, FiArrowUpRight } from 'react-icons/fi';

const links = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About',    href: '/about' },
  { label: 'FAQ',      href: '/faq' },
  { label: 'Contact',  href: '/contact' },
];

const socials = [
  {
    icon: FiPhone,
    href: 'tel:+916304484048',
    label: 'Call us',
    color: '#34D399',
    bg: 'rgba(52,211,153,0.12)',
  },
  {
    icon: FaWhatsapp,
    href: 'https://wa.me/919010996525',
    label: 'WhatsApp',
    color: '#25D366',
    bg: 'rgba(37,211,102,0.12)',
  },
  {
    icon: FaInstagram,
    href: 'https://www.instagram.com/sai_digital_services_?igsh=aGR0NHowcTR0cmk0',
    label: 'Instagram',
    external: true,
    color: '#F472B6',
    bg: 'rgba(244,114,182,0.12)',
  },
  {
    icon: FiMail,
    href: 'mailto:sairavula1919@gmail.com',
    label: 'Email us',
    color: '#60A5FA',
    bg: 'rgba(96,165,250,0.12)',
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        background: 'linear-gradient(170deg, #0D0D16 0%, #111120 60%, #0A0A12 100%)',
        borderTop: '1px solid rgba(212,175,55,0.18)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative glow blobs */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-60px',
          left: '10%',
          width: '320px',
          height: '320px',
          background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-40px',
          right: '5%',
          width: '280px',
          height: '280px',
          background: 'radial-gradient(circle, rgba(107,91,149,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Top accent bar ── */}
        <div
          style={{
            height: '2px',
            background: 'linear-gradient(90deg, transparent 0%, #D4AF37 40%, #F5E27D 60%, transparent 100%)',
            marginBottom: '0',
          }}
        />

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12 md:py-16">

          {/* Brand column — 5 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            {/* Logo text */}
            <div className="mb-4">
              <span
                style={{
                  fontFamily: 'var(--font-jakarta)',
                  fontWeight: 800,
                  fontSize: '1.375rem',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F5E27D 50%, #B8860B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.02em',
                }}
              >
                Sai Digital Services
              </span>
            </div>

            {/* Tagline */}
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.9rem',
                color: '#94A3B8',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
                maxWidth: '300px',
              }}
            >
              Websites that grow businesses. SEO &amp; digital marketing from Mogaltur, West Godavari,&nbsp;AP.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5 flex-wrap">
              {socials.map(({ icon: Icon, href, label, external, color, bg }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  title={label}
                  className="group flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-250"
                  style={{ backgroundColor: bg, border: `1px solid ${color}30` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = color + '25';
                    e.currentTarget.style.borderColor = color + '80';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = bg;
                    e.currentTarget.style.borderColor = color + '30';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Icon size={16} aria-hidden="true" style={{ color }} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick links — 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <h3
              style={{
                fontFamily: 'var(--font-jakarta)',
                fontWeight: 700,
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#D4AF37',
                marginBottom: '1.25rem',
              }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 transition-all duration-200"
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.9rem',
                      color: '#94A3B8',
                      fontWeight: 500,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#F5E27D';
                      e.currentTarget.style.transform = 'translateX(3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#94A3B8';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: '#D4AF37',
                        flexShrink: 0,
                        opacity: 0.6,
                      }}
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact — 4 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <h3
              style={{
                fontFamily: 'var(--font-jakarta)',
                fontWeight: 700,
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#D4AF37',
                marginBottom: '1.25rem',
              }}
            >
              Get In Touch
            </h3>

            <div className="space-y-3.5">
              {/* Phone */}
              <a
                href="tel:+916304484048"
                className="flex items-center gap-3 group"
                aria-label="Call +91 6304484048"
                style={{ textDecoration: 'none' }}
                onMouseEnter={(e) => e.currentTarget.querySelector('span').style.color = '#F5E27D'}
                onMouseLeave={(e) => e.currentTarget.querySelector('span').style.color = '#94A3B8'}
              >
                <div
                  className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
                  style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)' }}
                  aria-hidden="true"
                >
                  <FiPhone size={13} style={{ color: '#34D399' }} />
                </div>
                <span
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#94A3B8', transition: 'color 0.2s' }}
                >
                  +91 6304484048
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:sairavula1919@gmail.com"
                className="flex items-center gap-3 group"
                aria-label="Email sairavula1919@gmail.com"
                style={{ textDecoration: 'none' }}
                onMouseEnter={(e) => e.currentTarget.querySelector('span').style.color = '#F5E27D'}
                onMouseLeave={(e) => e.currentTarget.querySelector('span').style.color = '#94A3B8'}
              >
                <div
                  className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
                  style={{ background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.2)' }}
                  aria-hidden="true"
                >
                  <FiMail size={13} style={{ color: '#60A5FA' }} />
                </div>
                <span
                  className="break-all"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#94A3B8', transition: 'color 0.2s' }}
                >
                  sairavula1919@gmail.com
                </span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div
                  className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0 mt-0.5"
                  style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}
                  aria-hidden="true"
                >
                  <FiMapPin size={13} style={{ color: '#D4AF37' }} />
                </div>
                <address
                  className="not-italic"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.6 }}
                >
                  Mogaltur, West Godavari<br />
                  Andhra Pradesh 534281, India
                </address>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p
            style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: '#475569' }}
          >
            © {year}{' '}
            <span style={{ color: '#94A3B8', fontWeight: 600 }}>Sai Digital Services</span>
            . All rights reserved.
          </p>

          <div className="flex items-center gap-1.5">
            <span
              style={{
                display: 'inline-block',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #D4AF37, #F5E27D)',
              }}
              aria-hidden="true"
            />
            <p
              style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: '#475569' }}
            >
              Mogaltur · West Godavari · Andhra Pradesh
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
