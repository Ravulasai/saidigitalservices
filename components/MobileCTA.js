'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MobileCTA() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#F5EFE0]/98 dark:bg-matte-black/98 backdrop-blur-xl border-t border-[rgba(107,91,149,0.2)] dark:border-white/10"
    >
      <Link
        href="/contact"
        className="block w-full text-center px-4 py-2.5 bg-gold text-black text-xs font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gold/50"
        style={{ borderRadius: '2px' }}
        aria-label="Contact us - Let's Grow Together"
      >
        Let's Grow Together
      </Link>
    </motion.div>
  );
}
