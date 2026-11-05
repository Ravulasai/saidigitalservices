'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FiCode, FiTrendingUp, FiUsers, FiGlobe } from 'react-icons/fi';

/** Simple counter animation */
function useCounter(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) return;
    let startTime = null;
    const tick = (now) => {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(end * progress));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, end, duration]);

  return [count, setActive];
}

const expertise = [
  { icon: FiCode,       title: 'Full Stack Development', description: 'Modern web applications with cutting-edge technologies' },
  { icon: FiTrendingUp, title: 'SEO & Digital Marketing', description: 'Drive organic growth and maximise online visibility' },
  { icon: FiUsers,      title: 'Brand Strategy',          description: 'Build compelling brand presence across digital platforms' },
  { icon: FiGlobe,      title: 'E-commerce Solutions',    description: 'Complete online store development and optimisation' },
];

export default function About({ showHeading = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [yearsCount,   setYearsActive]   = useCounter(3,   2000);
  const [projectsCount, setProjectsActive] = useCounter(20, 2400);
  const [satisfactionCount, setSatActive]  = useCounter(100, 2000);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setYearsActive(true),   800);
      setTimeout(() => setProjectsActive(true), 1000);
      setTimeout(() => setSatActive(true),      1200);
    }
  }, [isInView, setYearsActive, setProjectsActive, setSatActive]);

  return (
    <section
      id="about"
      ref={ref}
      className="bg-section section-pad relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle at 85% 15%, rgba(212,175,55,0.07) 0%, transparent 55%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle at 15% 85%, rgba(107,91,149,0.06) 0%, transparent 55%)' }}
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
              Who We Are
            </p>
            <h2
              id="about-heading"
              className="section-title text-3xl md:text-4xl lg:text-5xl mb-3"
            >
              About <span className="text-gold">Me</span>
            </h2>
            <p
              className="section-desc max-w-2xl mx-auto leading-relaxed"
              style={{ color: 'var(--muted)', fontFamily: 'var(--font-inter)', fontSize: '1rem' }}
            >
              Passionate about transforming businesses through innovative digital solutions
            </p>
          </motion.div>
        )}

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, type: 'spring', stiffness: 100 }}
            className="card p-7 md:p-8 flex flex-col"
          >
            <div className="flex-1">
              <h3
                className="text-2xl font-bold mb-1"
                style={{ fontFamily: 'var(--font-manrope)', color: 'var(--heading)' }}
              >
                Sai
              </h3>
              <p
                className="font-semibold mb-1"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', color: 'var(--gold)' }}
              >
                Full Stack Web Developer &amp; Digital Marketing Specialist
              </p>
              <p
                className="text-sm mb-6"
                style={{ fontFamily: 'var(--font-inter)', color: 'var(--muted)' }}
              >
                3+ Years Experience · Based in Mogaltur, West Godavari, AP
              </p>

              <div className="space-y-4">
                <p
                  className="leading-relaxed"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--body)' }}
                >
                  I specialise in creating modern, high-performance websites and comprehensive digital marketing
                  strategies. With 3+ years of experience, I help businesses in Mogaltur, West Godavari, and
                  across Andhra Pradesh establish a strong online presence and achieve measurable growth.
                </p>
                <p
                  className="leading-relaxed"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', color: 'var(--body)' }}
                >
                  From full-stack development to SEO optimisation and brand strategy, I provide end-to-end
                  solutions for businesses looking to thrive in the digital landscape.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Expertise + stats */}
          <div className="flex flex-col gap-5">
            {/* 2x2 expertise grid */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 100 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1"
            >
              {expertise.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + index * 0.07 }}
                  whileHover={{ y: -3 }}
                  className="card group p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="icon-badge" style={{ width: 40, height: 40 }} aria-hidden="true">
                      <item.icon style={{ color: 'var(--gold)' }} size={18} />
                    </div>
                    <div>
                      <h4
                        className="font-bold mb-1"
                        style={{ fontFamily: 'var(--font-manrope)', fontSize: '0.9375rem', color: 'var(--heading)' }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="leading-relaxed"
                        style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', color: 'var(--muted)' }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="card p-6"
              style={{
                background: 'linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(107,91,149,0.06) 100%)',
                borderColor: 'rgba(212,175,55,0.3)',
              }}
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: yearsCount,       suffix: '+', label: 'Years Experience' },
                  { value: projectsCount,    suffix: '+', label: 'Projects Completed' },
                  { value: satisfactionCount, suffix: '%', label: 'Client Satisfaction' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div
                      className="text-3xl font-extrabold leading-none mb-1"
                      style={{ fontFamily: 'var(--font-manrope)', color: 'var(--heading)' }}
                    >
                      <span className="text-gold">{stat.value}</span>
                      <span style={{ color: 'var(--gold)' }}>{stat.suffix}</span>
                    </div>
                    <p
                      className="text-xs font-medium"
                      style={{ fontFamily: 'var(--font-inter)', color: 'var(--muted)' }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
