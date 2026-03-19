// components/Header.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-background/60 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/5' : 'py-5 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand/Name */}
        <Link href="/" className="group flex flex-col relative z-20">
          <motion.span
            whileHover={{ scale: 1.02 }}
            className="text-lg font-bold tracking-tight text-foreground/90 transition-colors group-hover:text-foreground uppercase"
          >
            Betsinat<span className="text-brand">.A</span>
          </motion.span>
          <span className="text-[9px] text-muted-foreground font-bold tracking-[0.2em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
            Software Engineer
          </span>
        </Link>

        {/* Navigation Links */}
        <nav
          onMouseLeave={() => setHoveredItem(null)}
          className="hidden md:flex items-center gap-1 bg-secondary/30 px-2 py-1 rounded-full border border-white/5 backdrop-blur-md relative"
        >
          {['Home', 'About', 'Projects', 'Skills', 'Experience'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onMouseEnter={() => setHoveredItem(item)}
              className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-all relative z-10"
            >
              {item}
              {hoveredItem === item && (
                <motion.span
                  layoutId="nav-glow"
                  className="absolute inset-0 bg-white/5 rounded-full -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Call to Action & Socials */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4 border-r border-white/5 pr-4 mr-1 text-muted-foreground">
            <Link href="https://github.com/betsinat-amare" target="_blank">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5, color: '#FFFFFF' }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Github size={16} />
              </motion.div>
            </Link>
            <Link href="https://www.linkedin.com/in/betsinat-amare/" target="_blank">
              <motion.div
                whileHover={{ scale: 1.2, rotate: -5, color: '#FFFFFF' }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Linkedin size={16} />
              </motion.div>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1YrDbyE7DCJAl2OeEQ0JT07k-EnkGEQpw/view?usp=sharing"
              target="_blank"
              className="ml-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[8px] font-black uppercase tracking-widest hover:bg-brand/20 transition-all font-mono"
            >
              CV
            </Link>
          </div>

          <Link
            href="#contact"
            className="relative overflow-hidden bg-brand text-white px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-brand/25 group"
          >
            <span className="relative z-10">Hire Me</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              initial={false}
            />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>
      </div>
    </motion.header>
  );
}