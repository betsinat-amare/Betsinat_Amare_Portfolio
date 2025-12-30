// components/Footer.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';
import { SiTelegram, SiLeetcode, SiCodeforces } from 'react-icons/si';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: <Github size={18} />, href: "https://github.com/betsinat-amare", label: "GitHub" },
        { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/betsinat-amare/", label: "LinkedIn" },
        { icon: <SiTelegram size={18} />, href: "https://t.me/Coziyam", label: "Telegram" },
        { icon: <SiLeetcode size={18} />, href: "https://leetcode.com/u/betsinat_amare/", label: "LeetCode" },
        { icon: <SiCodeforces size={18} />, href: "https://codeforces.com/profile/Betsinat_Amare", label: "CodeForces" }
    ];

    return (
        <footer className="bg-zinc-950 border-t border-white/5 py-16 relative overflow-hidden">
            {/* Decorative Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
                {/* Brand Column */}
                <div className="col-span-1 md:col-span-2 space-y-6">
                    <Link href="/" className="inline-block text-2xl font-black tracking-tight text-foreground uppercase group">
                        Betsinat<motion.span whileHover={{ scale: 1.2 }} className="text-brand inline-block">.A</motion.span>
                    </Link>
                    <p className="text-muted-foreground text-base leading-relaxed max-w-sm font-light">
                        Building intelligent systems that bridge the gap between complex data and human experience.
                    </p>
                    <div className="flex gap-3 pt-2">
                        {socialLinks.map((link, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <Link
                                    href={link.href}
                                    target="_blank"
                                    className="p-3 bg-white/5 rounded-xl text-muted-foreground hover:text-white hover:bg-brand transition-all border border-white/5 flex items-center justify-center"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-[9px] font-black text-brand uppercase tracking-[0.4em] mb-6">Navigation</h4>
                    <ul className="space-y-3 text-[10px] font-bold uppercase tracking-widest">
                        {['Home', 'About', 'Projects', 'Contact', 'Resume'].map((item) => (
                            <li key={item}>
                                <Link
                                    href={item === 'Resume' ? 'https://drive.google.com/file/d/1LJ4i6sFitpr6QzYzbYhgGLtxQdLXN2yw/view?usp=sharing' : `#${item.toLowerCase()}`}
                                    target={item === 'Resume' ? '_blank' : undefined}
                                    className="text-muted-foreground hover:text-white transition-colors flex items-center gap-2 group"
                                >
                                    <motion.span
                                        initial={{ width: 0, opacity: 0 }}
                                        whileHover={{ width: 12, opacity: 1 }}
                                        className="h-px bg-brand inline-block overflow-hidden"
                                    />
                                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Legal/Status */}
                <div>
                    <h4 className="text-[9px] font-black text-brand uppercase tracking-[0.4em] mb-6">Status</h4>
                    <div className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-widest text-foreground mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Open for Jobs
                    </div>
                    <p className="text-[9px] text-muted-foreground/30 font-bold uppercase tracking-[0.2em] leading-relaxed">
                        &copy; {new Date().getFullYear()} Betsinat Amare.<br />All rights reserved. Developed with Next.js.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-[9px] text-muted-foreground/20 uppercase font-black tracking-[0.4em]">
                    DESIGNED BY BETSINAT AMARE
                </p>
                <button
                    onClick={scrollToTop}
                    className="group flex items-center gap-3 text-[9px] font-black text-muted-foreground hover:text-brand transition-all uppercase tracking-[0.3em]"
                >
                    Back to Top
                    <div className="p-1.5 bg-white/5 rounded-lg group-hover:bg-brand/10 transition-colors">
                        <motion.div
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ChevronUp size={14} />
                        </motion.div>
                    </div>
                </button>
            </div>
        </footer>
    );
}
