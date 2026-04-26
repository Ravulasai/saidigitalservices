'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { FiSun, FiMoon, FiX, FiHome, FiBriefcase, FiInfo, FiHelpCircle, FiMail } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', icon: FiHome },
    { name: 'Services', href: '/services', icon: FiBriefcase },
    { name: 'About', href: '/about', icon: FiInfo },
    { name: 'FAQ', href: '/faq', icon: FiHelpCircle },
    { name: 'Contact', href: '/contact', icon: FiMail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5EFE0] dark:bg-black border-b border-[rgba(107,91,149,0.15)] dark:border-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-12 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Sai Digital Services - Home">
            <Image
              src="https://res.cloudinary.com/dgfkn6klm/image/upload/q_auto/f_auto/v1777093468/SDS-logo_1_xdwiuw.png"
              alt="Sai Digital Services logo"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Centered Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors relative group ${
                      isActive
                        ? 'text-gold'
                        : 'text-[#3D2B6B] dark:text-white hover:text-gold'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Side - Theme Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 hover:bg-[rgba(107,91,149,0.1)] dark:hover:bg-white/10 transition-colors"
                style={{ borderRadius: '2px' }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <FiSun size={18} className="text-white" />
                ) : (
                  <FiMoon size={18} className="text-[#3D2B6B]" />
                )}
              </button>
            )}
            
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-gold text-black text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gold/50"
              style={{ borderRadius: '2px' }}
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <FiSun size={18} className="text-white" />
                ) : (
                  <FiMoon size={18} className="text-[#3D2B6B]" />
                )}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 flex flex-col justify-center items-start gap-1.5 w-8 h-8"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 6, width: '20px' } : { rotate: 0, y: 0, width: '20px' }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="block h-0.5 bg-[#3D2B6B] dark:bg-white rounded-full origin-left"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="block w-5 h-0.5 bg-[#3D2B6B] dark:bg-white rounded-full"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -6, width: '20px' } : { rotate: 0, y: 0, width: '20px' }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="block h-0.5 bg-[#3D2B6B] dark:bg-white rounded-full origin-left"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 z-[60] md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[300px] bg-gradient-to-b from-[#F5EFE0] to-[#EDE5D0] dark:from-charcoal dark:to-matte-black z-[70] md:hidden shadow-2xl flex flex-col"
              style={{ height: '100vh', height: '100dvh' }}
            >
              {/* Header */}
              <div className="relative p-6 border-b border-[rgba(107,91,149,0.2)] dark:border-white/10 bg-[#3D2B6B] dark:bg-transparent">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="absolute top-5 right-5 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors shadow-md"
                  aria-label="Close menu"
                >
                  <FiX size={20} className="text-white dark:text-[#3D2B6B]" />
                </button>
                <div className="text-left pr-12">
                  <p className="text-sm font-medium text-white/70 dark:text-gray-300">Welcome to</p>
                  <p className="text-base font-bold text-[#D4AF37]">Sai Digital Services</p>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto p-6">
                <nav className="space-y-2">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center gap-4 px-4 py-3.5 text-base font-medium transition-all duration-200 group ${
                            isActive
                              ? 'bg-gold/10 text-gold'
                              : 'text-[#3D2B6B] dark:text-white hover:bg-gold/10 hover:text-gold'
                          }`}
                          style={{ borderRadius: '4px' }}
                        >
                          <link.icon className={`w-5 h-5 transition-transform ${isActive ? 'text-gold' : 'group-hover:scale-110'}`} />
                          <span>{link.name}</span>
                          {isActive && (
                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-gold" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Fixed CTA */}
              <div className="p-6 border-t border-[rgba(107,91,149,0.2)] dark:border-white/10">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full px-5 py-3.5 bg-gold text-black text-sm font-bold text-center transition-all duration-300 hover:shadow-lg hover:shadow-gold/50 relative overflow-hidden group"
                  style={{ borderRadius: '4px' }}
                >
                  <span className="relative z-10">Get In Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
