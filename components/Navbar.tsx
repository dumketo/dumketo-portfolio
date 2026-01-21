"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-800' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            {/* Logo Icon "H" with Animation */}
            <motion.div 
              className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl shadow-lg shadow-brand-500/20"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20 
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: 15,
                boxShadow: "0 0 25px rgba(20, 184, 166, 0.6)"
              }}
              whileTap={{ scale: 0.95, rotate: -5 }}
            >
              <span className="text-white font-bold text-xl leading-none">H</span>
            </motion.div>
            
            {/* Logo Text */}
            <span className="text-white font-bold text-xl tracking-tight group-hover:text-white transition-colors">
              HAJ<span className="text-brand-400">.dev</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-brand-400 transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="px-5 py-2 bg-brand-600 hover:bg-brand-500 text-white rounded-md text-sm font-semibold transition-colors shadow-lg shadow-brand-900/20">
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300 hover:text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-brand-400 font-medium text-lg py-2 border-b border-slate-800/50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="block text-center px-5 py-3 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-semibold mt-4" onClick={() => setIsOpen(false)}>
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;