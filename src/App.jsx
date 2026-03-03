import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import splashBackground from './images/splashscreenbg.jpeg';
import siteLogo from './images/logo.png';

// Simple mobile menu implementation
function MobileMenuButton({ open, setOpen }) {
  const toggle = () => setOpen(!open);
  return (
    <button onClick={toggle} aria-label="Toggle menu" className="mobile-menu-toggle p-2 rounded-xl text-slate-100">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
        {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
      </svg>
    </button>
  );
}

function MobileMenu({ open, setOpen }) {
  const close = () => setOpen(false);

  return (
    <div className={`lg:hidden fixed inset-0 z-[9998] transition-all duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/45 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} onClick={close}></div>
      <div className={`mobile-menu-panel absolute top-20 left-4 right-4 rounded-2xl transition-all duration-300 ${open ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}`}>
        <div className="px-5 py-5">
          <p className="mobile-menu-kicker">Navigation</p>
          <div className="mt-4 flex flex-col gap-2">
            <Link to="/" onClick={close} className="mobile-menu-link">Home</Link>
            <a href="#about" onClick={close} className="mobile-menu-link">About</a>
            <a href="#projects" onClick={close} className="mobile-menu-link">Projects</a>
            <a href="#skills" onClick={close} className="mobile-menu-link">Skills</a>
            <Link to="/gallery" onClick={close} className="mobile-menu-link">Gallery</Link>
            <a href="#contact" onClick={close} className="mobile-menu-link">Contact</a>
          </div>
          <a href="#contact" onClick={close} className="mobile-menu-cta mt-4 inline-flex items-center justify-center">
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  );
}

function NavLogo({ siteLogo }) {
  return (
    <div className="app-logo app-brand-badge text-lg lg:text-xl font-bold">
      <span className="brand-logo-icon" aria-hidden="true">
        <img src={siteLogo} alt="" className="brand-logo-image" />
      </span>
      <span className="brand-name-text">
        Sarthak M.
      </span>
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [hideSplash, setHideSplash] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const hideTimer = window.setTimeout(() => {
      setHideSplash(true);
    }, 2200);

    const removeTimer = window.setTimeout(() => {
      setShowSplash(false);
    }, 2800);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.app-logo',
        { y: -18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );
      gsap.fromTo(
        '.app-nav-link',
        { y: -12, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.07,
          delay: 0.15
        }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <div className="page-scene min-h-screen text-white">
      {showSplash && (
        <div
          className={`fixed inset-0 z-[10050] flex items-center justify-center bg-cover bg-center transition-opacity duration-700 ${hideSplash ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          style={{ backgroundImage: `url(${splashBackground})` }}
          aria-label="Splash screen"
        >
          <div className="absolute inset-0 bg-black/45"></div>
          <div className="relative px-4 text-center animate-splash-text">
            <img src={siteLogo} alt="Sarthak Mahapatra logo" className="splash-logo mx-auto mb-5 h-16 w-16 sm:h-20 sm:w-20 rounded-2xl object-cover" />
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide text-white splash-text-glow">
              Sarthak Mahapatra
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg md:text-xl tracking-[0.18em] uppercase text-slate-200/90">
              Crafting Code. Shaping Ideas.
            </p>
          </div>
        </div>
      )}

      <nav ref={navRef} className="fixed top-0 w-full app-nav-bg z-[9999] border-b border-white/15 overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <NavLogo siteLogo={siteLogo} />
            <div className="hidden lg:flex flex-1 justify-center">
              <div className="desktop-nav-group">
                <Link to="/" className={`app-nav-link desktop-nav-link ${location.pathname === '/' ? 'desktop-nav-link-active' : ''}`}>Home</Link>
                <a href="#about" className="app-nav-link desktop-nav-link">About</a>
                <a href="#projects" className="app-nav-link desktop-nav-link">Projects</a>
                <a href="#skills" className="app-nav-link desktop-nav-link">Skills</a>
                <Link to="/gallery" className={`app-nav-link desktop-nav-link ${location.pathname === '/gallery' ? 'desktop-nav-link-active' : ''}`}>Gallery</Link>
                <a href="#contact" className="app-nav-link desktop-nav-link">Contact</a>
              </div>
            </div>
            <div className="hidden lg:flex">
              <a href="#contact" className="app-nav-link desktop-nav-cta">Let's Connect</a>
            </div>
            {/* mobile menu button (absolute to ensure visibility on small screens) */}
            <div className="lg:hidden flex items-center absolute right-4 top-1/2 -translate-y-1/2 z-[10001]">
              <MobileMenuButton open={mobileOpen} setOpen={setMobileOpen} />
            </div>
          </div>
        </div>
      </nav>

      {/* mobile menu component placed near top-level so it overlays pages */}
      <MobileMenu open={mobileOpen} setOpen={setMobileOpen} />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          className="pt-20"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
