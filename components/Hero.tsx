// components/Hero.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, ArrowRight, Code2, Cpu } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import Link from 'next/link';

const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  return (
    <span className="text-brand inline-block min-w-[2ch]">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default function Hero() {
  const roles = [
    "Software Engineer.",
    "Full Stack Developer.",
    "AI Specialist.",
    "Data Scientist."
  ];

  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center px-6 overflow-hidden pt-24 md:pt-32">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand/20 blur-[120px] rounded-full mix-blend-screen opacity-30 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
        {/* Text Content */}
        <div className="lg:col-span-12 xl:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/40 border border-white/5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-foreground/80">
              Ready to Innovate
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-foreground uppercase leading-[1.1]"
            >
              HELLO, I'M A <br />
              <TypewriterText texts={roles} />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed font-light"
            >
              AI-focused Software Engineering student at <span className="text-foreground font-medium">AAU (CTBE)</span> with a strong foundation in <span className="text-foreground font-medium">Data Science & Engineering</span>.
              Developing intelligent systems through full-stack capabilities.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Link href="#projects" className="group flex items-center gap-3 bg-brand text-white px-7 py-3.5 rounded-2xl font-black text-[9px] uppercase tracking-[0.2em] hover:bg-brand/90 transition-all shadow-xl shadow-brand/20 hover:shadow-brand/40 hover:-translate-y-1">
              View Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#contact" className="flex items-center gap-3 bg-white/5 border border-white/10 text-foreground px-7 py-3.5 rounded-2xl font-black text-[9px] uppercase tracking-[0.2em] hover:bg-white/10 transition-all backdrop-blur-sm">
              Contact Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1LJ4i6sFitpr6QzYzbYhgGLtxQdLXN2yw/view?usp=sharing"
              target="_blank"
              className="flex items-center gap-3 bg-brand/10 border border-brand/20 text-brand px-7 py-3.5 rounded-2xl font-black text-[9px] uppercase tracking-[0.2em] hover:bg-brand/20 transition-all backdrop-blur-sm"
            >
              Download CV
            </Link>
          </motion.div>
        </div>

        {/* Floating Stats Bento Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring", duration: 1 }}
          className="lg:col-span-12 xl:col-span-5 relative"
        >
          <div className="relative grid grid-cols-2 gap-4">
            <Link
              href="https://leetcode.com/u/betsinat_amare/"
              target="_blank"
              className="col-span-2 bg-zinc-900/50 border border-white/5 p-6 rounded-[2.5rem] flex items-center gap-6 shadow-2xl backdrop-blur-xl group hover:border-brand/30 transition-all"
            >
              <div className="p-4 bg-brand/10 rounded-[1.2rem] group-hover:scale-110 transition-transform duration-500">
                <SiLeetcode className="text-brand" size={28} />
              </div>
              <div>
                <p className="text-4xl font-black text-foreground tracking-tighter group-hover:text-brand transition-colors">300+</p>
                <p className="text-[9px] text-muted-foreground uppercase font-black tracking-[0.3em] mt-1">LeetCode Solved</p>
              </div>
            </Link>

            <div className="bg-zinc-900/50 border border-white/5 p-5 rounded-[2.5rem] space-y-4 shadow-xl backdrop-blur-xl hover:border-brand/20 transition-all">
              <Brain className="text-purple-400" size={28} />
              <div>
                <p className="text-lg font-bold text-foreground">AI & ML</p>
                <p className="text-[9px] text-muted-foreground uppercase font-black tracking-[0.3em] mt-1">Specialism</p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-white/5 p-5 rounded-[2.5rem] space-y-4 shadow-xl backdrop-blur-xl hover:border-brand/20 transition-all">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">Oracle</p>
                <p className="text-[9px] text-muted-foreground uppercase font-black tracking-[0.3em] mt-1">Certified</p>
              </div>
            </div>

            <div className="col-span-2 bg-brand/10 border border-brand/20 p-5 rounded-[2.5rem] flex items-center justify-between gap-4 shadow-xl backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-brand/20 rounded-full">
                  <Code2 size={20} className="text-brand" />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-xs uppercase tracking-widest">Full Stack + AI</span>
                  <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Hybrid Engineer</span>
                </div>
              </div>
              <Cpu size={20} className="text-brand/50" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}