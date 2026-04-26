'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FiCode, FiTrendingUp, FiUsers, FiGlobe } from 'react-icons/fi';

// Counter animation hook
function useCounter(end, duration = 2000, start = 0) {
  const [count, setCount] = useState(start);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(start + (end - start) * progress));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isActive, end, duration, start]);

  return [count, setIsActive];
}

export default function About({ showHeading = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  // Counter animations
  const [yearsCount, setYearsActive] = useCounter(3, 2000);
  const [projectsCount, setProjectsActive] = useCounter(20, 2500);
  const [satisfactionCount, setSatisfactionActive] = useCounter(100, 2000);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setYearsActive(true), 800);
      setTimeout(() => setProjectsActive(true), 1000);
      setTimeout(() => setSatisfactionActive(true), 1200);
    }
  }, [isInView, setYearsActive, setProjectsActive, setSatisfactionActive]);

  const services = [
    { 
      icon: FiCode, 
      title: 'Full Stack Development',
      description: 'Modern web applications with cutting-edge technologies'
    },
    { 
      icon: FiTrendingUp, 
      title: 'SEO & Digital Marketing',
      description: 'Drive organic growth and maximize online visibility'
    },
    { 
      icon: FiUsers, 
      title: 'Brand Strategy',
      description: 'Build compelling brand presence across digital platforms'
    },
    { 
      icon: FiGlobe, 
      title: 'E-commerce Solutions',
      description: 'Complete online store development and optimization'
    }
  ];

  return (
    <section id="about" ref={ref} className="pt-5 pb-8 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple/5 via-transparent to-gold/5 pointer-events-none" />
      <div className="absolute top-20 right-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header — shown on home page, hidden on /about page which has its own h1 */}
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
              About <span className="text-gold italic" style={{ fontFamily: 'var(--font-cormorant)' }}>Me</span>
            </h2>
            <p
              className="text-black dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)', fontSize: '16px' }}
            >
              Passionate about transforming businesses through innovative digital solutions
            </p>
          </motion.div>
        )}

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Main About Card */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/95 dark:bg-charcoal/80 backdrop-blur-xl border-2 border-gold/40 dark:border-white/10 p-8 shadow-2xl relative overflow-hidden hover:shadow-3xl hover:border-gold/60 transition-all duration-500 h-full flex flex-col"
            style={{ borderRadius: '8px' }}
          >            
            {/* Profile Info */}
            <div className="relative z-10 flex-1 flex flex-col justify-center">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl mb-3 text-black dark:text-white"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Sai
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-gold font-semibold mb-2"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '18px' }}
              >
                Full Stack Web Developer and Digital Marketing Specialist
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-black dark:text-gray-400 mb-8"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '14px' }}
              >
                3+ Years Experience
              </motion.p>

              <div className="space-y-5">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-black dark:text-gray-300 leading-relaxed"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '15px' }}
                >
                  I specialize in creating modern, high-performance websites and comprehensive digital marketing strategies. 
                  With 3+ years of experience, I help businesses establish a strong online presence and achieve measurable growth.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-black dark:text-gray-300 leading-relaxed"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '15px' }}
                >
                  From full-stack development to SEO optimization and brand strategy, I provide end-to-end solutions 
                  for businesses looking to thrive in the digital landscape.
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Services & Stats */}
          <div className="space-y-6 h-full flex flex-col">
            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.1,
                  }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="bg-white/95 dark:bg-charcoal/60 backdrop-blur-xl border-2 border-gold/40 dark:border-white/10 p-5 hover:bg-white/98 dark:hover:bg-charcoal/80 hover:border-gold/60 hover:shadow-xl transition-all duration-300 group cursor-pointer h-full"
                  style={{ borderRadius: '8px' }}
                >
                  <div className="flex items-start gap-3 h-full">
                    <motion.div 
                      className="p-2 bg-gradient-to-br from-gold/30 to-gold/15 group-hover:from-gold/40 group-hover:to-gold/25 transition-colors" 
                      style={{ borderRadius: '4px' }}
                      whileHover={{ rotate: 10, scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <service.icon className="text-gold" size={20} />
                    </motion.div>
                    <div className="flex-1">
                      <h4 
                        className="font-bold mb-1 text-black dark:text-gold"
                        style={{ fontFamily: 'var(--font-cormorant)', fontSize: '16px' }}
                      >
                        {service.title}
                      </h4>
                      <p 
                        className="text-black dark:text-gray-400 leading-relaxed"
                        style={{ fontFamily: 'var(--font-inter)', fontSize: '13px' }}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.0, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02, y: -3 }}
              className="bg-gradient-to-r from-gold/20 via-purple/15 to-gold/20 dark:from-gold/10 dark:via-purple/5 dark:to-gold/10 backdrop-blur-xl border-2 border-gold/50 dark:border-gold/20 p-6 relative overflow-hidden hover:border-gold/70 hover:shadow-xl transition-all duration-300"
              style={{ borderRadius: '8px' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/15 dark:via-gold/8 to-transparent" />
              <div className="grid grid-cols-3 gap-6 text-center relative z-10">
                <motion.div
                  initial={{ scale: 0, rotateY: -90 }}
                  animate={isInView ? { scale: 1, rotateY: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, rotateY: 5 }}
                >
                  <motion.div 
                    className="text-3xl font-bold text-black dark:text-gold mb-1"
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                    animate={{ 
                      scale: [1, 1.05, 1],
                      textShadow: [
                        "0 0 0px rgba(0, 0, 0, 0)",
                        "0 0 8px rgba(0, 0, 0, 0.3)",
                        "0 0 0px rgba(0, 0, 0, 0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    {yearsCount}+
                  </motion.div>
                  <div 
                    className="text-black dark:text-white font-medium"
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '12px' }}
                  >
                    Years Experience
                  </div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0, rotateY: -90 }}
                  animate={isInView ? { scale: 1, rotateY: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.3, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, rotateY: 5 }}
                >
                  <motion.div 
                    className="text-3xl font-bold text-black dark:text-gold mb-1"
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                    animate={{ 
                      scale: [1, 1.05, 1],
                      textShadow: [
                        "0 0 0px rgba(0, 0, 0, 0)",
                        "0 0 8px rgba(0, 0, 0, 0.3)",
                        "0 0 0px rgba(0, 0, 0, 0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 0.8 }}
                  >
                    {projectsCount}+
                  </motion.div>
                  <div 
                    className="text-black dark:text-white font-medium"
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '12px' }}
                  >
                    Projects Completed
                  </div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0, rotateY: -90 }}
                  animate={isInView ? { scale: 1, rotateY: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.4, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, rotateY: 5 }}
                >
                  <motion.div 
                    className="text-3xl font-bold text-black dark:text-gold mb-1"
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                    animate={{ 
                      scale: [1, 1.05, 1],
                      textShadow: [
                        "0 0 0px rgba(0, 0, 0, 0)",
                        "0 0 8px rgba(0, 0, 0, 0.3)",
                        "0 0 0px rgba(0, 0, 0, 0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 1.6 }}
                  >
                    {satisfactionCount}%
                  </motion.div>
                  <div 
                    className="text-black dark:text-white font-medium"
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '12px' }}
                  >
                    Client Satisfaction
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
