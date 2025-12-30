// components/About.tsx
"use client";
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Users, Zap, Briefcase, Code2, Trophy } from 'lucide-react';
import Image from 'next/image';

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className="relative w-full h-full"
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const coreValues = [
    {
      icon: <Zap size={18} />,
      title: "Adaptive Mindset",
      text: "Rapidly mastering new technologies and workflows to deliver strong results in any environment."
    },
    {
      icon: <Users size={18} />,
      title: "Collaborative",
      text: "Eager to connect with fellow innovators and build high-impact solutions together."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Side: Visual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative max-w-sm mx-auto lg:mx-0 w-full"
        >
          <TiltCard>
            <div className="relative z-10 bg-zinc-900/50 backdrop-blur-3xl border border-white/5 p-2 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:border-brand/30 group">
              <div className="relative aspect-[3/4] rounded-[2.2rem] overflow-hidden">
                <Image
                  src="/profile.png"
                  alt="Betsinat Amare"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex h-1.5 w-1.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-green-400">Available</span>
                  </div>
                  <p className="text-white font-black text-xl tracking-tight uppercase">Betsinat Amare</p>
                  <p className="text-white/60 font-black text-[9px] uppercase tracking-[0.3em] border-t border-white/10 pt-2 mt-2">
                    Software Engineer
                  </p>
                </div>
              </div>
            </div>
          </TiltCard>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand/10 rounded-full blur-[70px] -z-10" />
        </motion.div>

        {/* Right Side: Narrative */}
        <div className="space-y-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-6 bg-brand"></span>
              <h2 className="text-[9px] font-black text-brand uppercase tracking-[0.4em]">About Me</h2>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-foreground leading-[1.0]"
            >
              DRIVEN BY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-600">CURIOSITY.</span>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed font-light border-l border-white/5 pl-6 space-y-4"
            >
              <p>
                I am an AI-focused Software Engineering student at <strong className="text-foreground font-bold italic">AAU (CTBE)</strong>, merging full-stack expertise with robotics and data intelligence.
              </p>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 group hover:border-brand/30 transition-all">
                <div className="p-2.5 bg-brand/10 rounded-xl text-brand">
                  <Trophy size={20} />
                </div>
                <p className="text-sm leading-relaxed">
                  Beyond standard engineering, I am deeply passionate about algorithmic problem solving. I actively challenge myself on <strong className="text-foreground">LeetCode</strong> and <strong className="text-foreground">Codeforces</strong> to refine my data structures and competitive programming skills.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-5 bg-zinc-900/40 border border-white/5 rounded-[2rem] hover:bg-zinc-900/80 hover:border-brand/20 transition-all group"
              >
                <div className="mb-3 text-brand bg-brand/10 w-fit p-2.5 rounded-lg group-hover:scale-110 transition-transform">{value.icon}</div>
                <h4 className="text-foreground font-black uppercase text-[10px] tracking-widest mb-1">{value.title}</h4>
                <p className="text-muted-foreground text-xs font-light leading-relaxed">{value.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-6 border-t border-white/5 flex items-center gap-4"
          >
            <div className="p-3 bg-brand/10 rounded-xl text-brand">
              <Briefcase size={18} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-foreground">Open to Work</p>
              <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-[0.2em] mt-0.5">Internships • Full-Stack • AI Projects</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}