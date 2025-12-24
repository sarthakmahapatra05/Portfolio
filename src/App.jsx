import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
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
          </div>
        </div>
      </nav>

      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
}