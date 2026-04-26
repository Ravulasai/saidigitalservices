'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

export default function HeroBanner() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let fadeAnimation = null;

    const animateOpacity = (from, to, duration) => {
      const startTime = performance.now();
      const tick = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        video.style.opacity = from + (to - from) * progress;
        if (progress < 1) fadeAnimation = requestAnimationFrame(tick);
      };
      fadeAnimation = requestAnimationFrame(tick);
    };

    const handleCanPlay = () => {
      video.play().catch(() => {});
      animateOpacity(0, 1, 600);
    };

    const handleTimeUpdate = () => {
      if (video.duration && video.duration - video.currentTime <= 0.55) {
        if (fadeAnimation) cancelAnimationFrame(fadeAnimation);
        animateOpacity(parseFloat(video.style.opacity) || 1, 0, 500);
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
        animateOpacity(0, 1, 500);
      }, 100);
    };

    video.style.opacity = '0';
    video.play().catch(() => {});

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      if (fadeAnimation) cancelAnimationFrame(fadeAnimation);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <section
      className="hero-banner min-h-screen relative flex flex-col overflow-hidden"
      style={{ backgroundColor: '#000000' }}
      aria-label="Hero banner - Give Our Brains to Your Business"
    >
      {/* Video — starts loading immediately */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-bottom"
        muted
        autoPlay
        playsInline
        preload="auto"
        loop={false}
        aria-hidden="true"
        style={{ opacity: 0 }}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
          type="video/mp4"
        />
      </video>

      {/* Navbar renders immediately — not blocked by video */}
      <Navbar />

      {/* Hero content renders immediately — not blocked by video */}
      <div className="relative z-10 flex-1 flex items-start md:items-end justify-start px-6 py-12 pt-20 md:pt-12 md:pb-20">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-2 text-left max-w-md md:max-w-lg"
            style={{
              fontFamily: 'var(--font-cormorant)',
              backgroundImage: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #B8860B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Give Our Brains<br />
            to Your Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="leading-relaxed mb-8 max-w-md md:max-w-lg"
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '14px',
              color: '#ffffff',
            }}
          >
            Transforming ideas into digital excellence with innovative solutions that drive growth and success
          </motion.p>
        </div>
      </div>
    </section>
  );
}
