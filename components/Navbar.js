'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { FiSun, FiMoon, FiX, FiHome, FiBriefcase, FiInfo, FiHelpCircle, FiMail, FiMenu } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home',     href: '/',        icon: FiHome },
    { name: 'Services', href: '/services', icon: FiBriefcase },
    { name: 'About',    href: '/about',    icon: FiInfo },
    { name: 'FAQ',      href: '/faq',      icon: FiHelpCircle },
    { name: 'Contact',  href: '/contact',  icon: FiMail },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
      style={{
        backgroundColor: mounted
          ? theme === 'dark'
            ? 'rgba(10,10,10,0.95)'
            : 'rgba(249,246,240,0.95)'
          : 'rgba(249,246,240,0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: mounted && theme === 'dark'
          ? '1px solid rgba(255,255,255,0.08)'
          : '1px solid rgba(107,91,149,0.12)',
      }}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="Sai Digital Services – Home">
            <Image
              src="https://res.cloudinary.com/dgfkn6klm/image/upload/q_auto/f_auto/v1777093468/SDS-logo_1_xdwiuw.png"
              alt="Sai Digital Services logo"
              width={130}
              height={44}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop navigation — centred */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-semibold transition-colors duration-200 group"
                    style={{
                      color: isActive ? '#D4AF37' : (mounted && theme === 'dark' ? '#f3f4f6' : '#1A1A2E'),
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    {link.name}
                    <span
                      className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-gold transition-all duration-300"
                      style={{
                        transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left',
                      }}
                    />
                    {!isActive && (
                      <span className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Desktop right — theme toggle + CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark'
                  ? <FiSun size={18} className="text-white" />
                  : <FiMoon size={18} style={{ color: 'var(--heading)' }} />}
              </button>
            )}
            <Link
              href="/contact"
              className="btn-primary"
              style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile — theme toggle + hamburger */}
          <div className="flex md:hidden items-center gap-1">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark'
                  ? <FiSun size={18} className="text-white" />
                  : <FiMoon size={18} style={{ color: 'var(--heading)' }} />}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen
                ? <FiX size={22} style={{ color: mounted && theme === 'dark' ? '#f3f4f6' : '#1A1A2E' }} />
                : <FiMenu size={22} style={{ color: mounted && theme === 'dark' ? '#f3f4f6' : '#1A1A2E' }} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile side drawer */}
      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 z-[100] md:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer — theme-aware background */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="mobile-drawer-container fixed right-0 top-0 bottom-0 w-72 z-[110] md:hidden flex flex-col"
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(160deg, #111118 0%, #0D0D14 100%)'
                  : 'linear-gradient(160deg, #FFFDF8 0%, #F5EFE0 100%)',
                borderLeft: theme === 'dark'
                  ? '1px solid rgba(212,175,55,0.15)'
                  : '1px solid rgba(107,91,149,0.12)',
                height: '100vh',
                height: '100dvh',
              }}
            >
              {/* Drawer header */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{
                  borderBottom: theme === 'dark'
                    ? '1px solid rgba(212,175,55,0.12)'
                    : '1px solid rgba(107,91,149,0.12)',
                }}
              >
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-0.5"
                    style={{
                      color: theme === 'dark' ? '#A89BC2' : '#7A6A9A',
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    Menu
                  </p>
                  <p
                    className="font-bold text-sm"
                    style={{
                      color: theme === 'dark' ? '#F5E27D' : '#1A1A2E',
                      fontFamily: 'var(--font-jakarta)',
                    }}
                  >
                    Sai Digital Services
                  </p>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg transition-colors"
                  style={{
                    background: theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
                  }}
                  aria-label="Close menu"
                >
                  <FiX size={20} style={{ color: theme === 'dark' ? '#E2D9F3' : '#1A1A2E' }} />
                </button>
              </div>

              {/* Nav items */}
              <nav className="mobile-drawer flex-1 overflow-y-auto px-4 py-4">
                <ul className="space-y-1" role="list">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    const inactiveText  = theme === 'dark' ? '#E2D9F3' : '#1A1A2E';
                    const inactiveIcon  = theme === 'dark' ? '#A89BC2' : '#7A6A9A';
                    const activeBg      = theme === 'dark' ? 'rgba(212,175,55,0.12)' : 'rgba(212,175,55,0.1)';
                    return (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.06 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200"
                          style={{
                            backgroundColor: isActive ? activeBg : 'transparent',
                            fontFamily: 'var(--font-inter)',
                            fontWeight: 600,
                            fontSize: '0.9375rem',
                          }}
                          aria-current={isActive ? 'page' : undefined}
                        >
                          <link.icon
                            size={18}
                            aria-hidden="true"
                            style={{ color: isActive ? '#D4AF37' : inactiveIcon }}
                          />
                          <span style={{ color: isActive ? '#D4AF37' : inactiveText }}>
                            {link.name}
                          </span>
                          {isActive && (
                            <span
                              className="ml-auto w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: '#D4AF37' }}
                            />
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* CTA footer */}
              <div
                className="px-4 py-4"
                style={{
                  borderTop: theme === 'dark'
                    ? '1px solid rgba(212,175,55,0.12)'
                    : '1px solid rgba(107,91,149,0.12)',
                }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary w-full"
                  style={{ color: '#1A1A1A' }}
                >
                  Get In Touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
