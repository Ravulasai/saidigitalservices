'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiHome, FiBriefcase, FiInfo, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const navItems = [
  { href: '/',         label: 'Home',     icon: FiHome },
  { href: '/services', label: 'Services', icon: FiBriefcase },
  // Centre action — WhatsApp (always accessible, maps to real functionality)
  { href: 'https://wa.me/919010996525', label: 'WhatsApp', icon: FaWhatsapp, external: true, isPrimary: true },
  { href: '/about',    label: 'About',    icon: FiInfo },
  { href: '/contact',  label: 'Contact',  icon: FiMail },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="bottom-nav md:hidden fixed bottom-0 left-0 right-0 z-50"
      aria-label="Mobile navigation"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex items-center justify-around h-16 px-1">
        {navItems.map((item) => {
          const isActive = !item.external && pathname === item.href;

          /* Centre primary action — WhatsApp CTA */
          if (item.isPrimary) {
            return (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="flex flex-col items-center justify-center relative"
                style={{ minWidth: 44, minHeight: 44 }}
              >
                {/* Elevated circle */}
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] shadow-lg"
                  style={{ marginTop: '-18px', boxShadow: '0 4px 16px rgba(37,211,102,0.5)' }}
                >
                  <item.icon size={22} className="text-white" aria-hidden="true" />
                </motion.div>
                <span
                  className="text-[10px] font-semibold mt-0.5"
                  style={{ color: 'var(--muted)', fontFamily: 'var(--font-inter)' }}
                >
                  WhatsApp
                </span>
              </a>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
              className="flex flex-col items-center justify-center gap-0.5 flex-1 py-1"
              style={{ minHeight: 44 }}
            >
              <motion.div
                whileTap={{ scale: 0.85 }}
                className="flex items-center justify-center w-7 h-7 relative"
              >
                {isActive && (
                  <motion.div
                    layoutId="bottom-nav-indicator"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: 'rgba(212,175,55,0.15)' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <item.icon
                  size={20}
                  aria-hidden="true"
                  style={{
                    color: isActive ? 'var(--gold)' : 'var(--muted)',
                    transition: 'color 0.2s ease',
                  }}
                />
              </motion.div>
              <span
                className="text-[10px] font-semibold leading-none"
                style={{
                  color: isActive ? 'var(--gold)' : 'var(--muted)',
                  fontFamily: 'var(--font-inter)',
                  transition: 'color 0.2s ease',
                }}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
