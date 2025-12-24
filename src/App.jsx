import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

// Simple mobile menu implementation
function MobileMenuButton({ open, setOpen }) {
  const toggle = () => setOpen(!open);
  return (
    <button onClick={toggle} aria-label="Toggle menu" className="p-2 rounded-md bg-slate-800/50 hover:bg-slate-800/70 text-slate-200">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
        <path d="M3 6h18M3 12h18M3 18h18" />
      </svg>
    </button>
  );
}

function MobileMenu({ open, setOpen }) {
  const close = () => setOpen(false);

  return (
    <div className={`md:hidden fixed top-16 left-0 right-0 z-[9998] transition-transform duration-300 ${open ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col space-y-3">
            <Link to="/" onClick={close} className="text-slate-200 text-lg">Home</Link>
            <a href="#about" onClick={close} className="text-slate-200 text-lg">About</a>
            <a href="#projects" onClick={close} className="text-slate-200 text-lg">Projects</a>
            <a href="#skills" onClick={close} className="text-slate-200 text-lg">Skills</a>
            <Link to="/gallery" onClick={close} className="text-slate-200 text-lg">Gallery</Link>
            <a href="#contact" onClick={close} className="text-slate-200 text-lg">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-[9999] border-b border-slate-800 overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Sarthak Mahapatra
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-sm text-slate-300 hover:text-blue-400">Home</Link>
              <a href="#about" className="text-sm text-slate-300 hover:text-blue-400">About</a>
              <a href="#projects" className="text-sm text-slate-300 hover:text-blue-400">Projects</a>
              <a href="#skills" className="text-sm text-slate-300 hover:text-blue-400">Skills</a>
              <Link to="/gallery" className="text-sm text-slate-300 hover:text-blue-400">Gallery</Link>
              <a href="#contact" className="text-sm text-slate-300 hover:text-blue-400">Contact</a>
            </div>
            {/* mobile menu button (absolute to ensure visibility on small screens) */}
            <div className="md:hidden flex items-center absolute right-4 top-1/2 -translate-y-1/2 z-[10001]">
              <MobileMenuButton open={mobileOpen} setOpen={setMobileOpen} />
            </div>
          </div>
        </div>
      </nav>

      {/* mobile menu component placed near top-level so it overlays pages */}
      <MobileMenu open={mobileOpen} setOpen={setMobileOpen} />

      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
}