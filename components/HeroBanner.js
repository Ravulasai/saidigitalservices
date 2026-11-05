'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from './Navbar';
import WhatsAppFloat from './WhatsAppFloat';

const TYPEWRITER_TEXT = 'Sai Digital Services';
const TYPEWRITER_SPEED = 90;   // ms per character
const CURSOR_BLINK_MS = 530;   // cursor blink interval

export default function HeroBanner() {
  const videoRef = useRef(null);
  const [displayed, setDisplayed] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [done, setDone] = useState(false);

  /* ── Video fade logic ── */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let raf = null;

    const fade = (from, to, ms) => {
      const t0 = performance.now();
      const tick = (now) => {
        const p = Math.min((now - t0) / ms, 1);
        video.style.opacity = from + (to - from) * p;
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    video.style.opacity = '0';
    video.play().catch(() => {});

    const onCanPlay = () => { video.play().catch(() => {}); fade(0, 1, 600); };
    const onTimeUpdate = () => {
      if (video.duration && video.duration - video.currentTime <= 0.55) {
        cancelAnimationFrame(raf);
        fade(parseFloat(video.style.opacity) || 1, 0, 500);
      }
    };
    const onEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => { video.currentTime = 0; video.play().catch(() => {}); fade(0, 1, 500); }, 100);
    };

    video.addEventListener('canplay', onCanPlay);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('ended', onEnded);
    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener('canplay', onCanPlay);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('ended', onEnded);
    };
  }, []);

  /* ── Typewriter effect ── */
  useEffect(() => {
    if (done) return;
    if (displayed.length >= TYPEWRITER_TEXT.length) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => {
      setDisplayed(TYPEWRITER_TEXT.slice(0, displayed.length + 1));
    }, TYPEWRITER_SPEED);
    return () => clearTimeout(t);
  }, [displayed, done]);

  /* ── Cursor blink ── */
  useEffect(() => {
    const t = setInterval(() => setCursorVisible((v) => !v), CURSOR_BLINK_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="hero-banner min-h-screen relative flex flex-col overflow-hidden"
      style={{ backgroundColor: '#000000' }}
      aria-label="Hero banner — Sai Digital Services"
    >
      {/* Background video */}
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

      {/* Dark overlay so text is always readable over the video */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'rgba(0,0,0,0.45)' }}
        aria-hidden="true"
      />

      <Navbar />

      {/* Centred typewriter headline — shifted 50px up on desktop */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 md:mb-[50px]">
        <h1
          aria-label="Sai Digital Services"
          style={{
            fontFamily: 'var(--font-jakarta)',
            fontWeight: 800,
            fontSize: 'clamp(1.6rem, 5.5vw, 4rem)',
            letterSpacing: '-0.025em',
            lineHeight: 1.15,
            textAlign: 'center',
            background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 45%, #F5E27D 70%, #B8860B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {displayed}
          {/* Blinking cursor — hides after typing is done */}
          <span
            aria-hidden="true"
            style={{
              display: 'inline-block',
              width: '3px',
              height: '0.85em',
              marginLeft: '4px',
              borderRadius: '2px',
              verticalAlign: 'middle',
              background: 'linear-gradient(180deg, #FFD700, #D4AF37)',
              opacity: done
                ? cursorVisible ? 1 : 0   // keep blinking after done
                : 1,                       // always on while typing
              transition: done ? 'opacity 0.1s' : 'none',
            }}
          />
        </h1>
      </div>

      <WhatsAppFloat />
    </section>
  );
}
