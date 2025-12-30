// components/Skills.tsx
"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import {
  SiPython, SiNumpy, SiPandas, SiScikitlearn,
  SiReact, SiNextdotjs, SiNodedotjs, SiNestjs, SiTypescript, SiTailwindcss,
  SiPostgresql, SiMongodb, SiPrisma, SiDocker, SiGit, SiLinux,
  SiDjango, SiRos, SiFigma, SiPostman, SiAmazonwebservices, SiFirebase, SiSanity,
  SiCplusplus, SiFlutter, SiRedis, SiGraphql,
  SiJavascript, SiHtml5, SiCss3, SiExpress, SiGo, SiThreedotjs
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { Brain, Globe, Server, Command, Layout, Database } from 'lucide-react';

const skillsData = [
  {
    category: "AI & Data Intelligence",
    icon: <Brain className="text-amber-500" size={20} />,
    items: [
      { name: "Python", icon: SiPython, level: 95, color: "#3776AB" },
      { name: "NumPy", icon: SiNumpy, level: 90, color: "#013243" },
      { name: "Pandas", icon: SiPandas, level: 85, color: "#150458" },
      { name: "Scikit-learn", icon: SiScikitlearn, level: 80, color: "#F7931E" },
      { name: "Data Annotation", icon: Brain, level: 90, color: "#F7931E" },
    ]
  },
  {
    category: "Frontend Development",
    icon: <Layout className="text-blue-500" size={20} />,
    items: [
      { name: "React", icon: SiReact, level: 95, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, level: 90, color: "#FFFFFF" },
      { name: "TypeScript", icon: SiTypescript, level: 90, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, level: 95, color: "#F7DF1E" },
      { name: "HTML/CSS", icon: SiHtml5, level: 95, color: "#E34F26" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 95, color: "#06B6D4" },
    ]
  },
  {
    category: "Backend Engineering",
    icon: <Database className="text-green-500" size={20} />,
    items: [
      { name: "Node.js", icon: SiNodedotjs, level: 85, color: "#339933" },
      { name: "Express.js", icon: SiExpress, level: 85, color: "#000000" },
      { name: "NestJS", icon: SiNestjs, level: 80, color: "#E0234E" },
      { name: "Django", icon: SiDjango, level: 80, color: "#092E20" },
      { name: "Python", icon: SiPython, level: 90, color: "#3776AB" },
    ]
  },
  {
    category: "Tools & Architecture",
    icon: <Server className="text-purple-500" size={20} />,
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, level: 85, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, level: 80, color: "#47A248" },
      { name: "Docker", icon: SiDocker, level: 75, color: "#2496ED" },
      { name: "Git", icon: SiGit, level: 90, color: "#F05032" },
      { name: "Linux", icon: SiLinux, level: 85, color: "#FCC624" },
    ]
  }
];

const secondarySkills = [
  { name: "Three.js", icon: SiThreedotjs, color: "#FFFFFF" },
  { name: "Go", icon: SiGo, color: "#00ADD8" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "ROS", icon: SiRos, color: "#22314E" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "AWS", icon: SiAmazonwebservices, color: "#232F3F" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Sanity", icon: SiSanity, color: "#F03E2F" },
];

export default function Skills() {
  const [contentWidth, setContentWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      setContentWidth(containerRef.current.scrollWidth / 4);
    }
  }, []);

  useAnimationFrame((t, delta) => {
    if (!contentWidth || isHovered) return;
    const moveBy = (contentWidth / 40000) * delta;
    let nextX = x.get() - moveBy;
    if (nextX <= -contentWidth) nextX += contentWidth;
    x.set(nextX);
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="h-px w-6 bg-brand"></span>
          <h2 className="text-[9px] font-black text-brand uppercase tracking-[0.4em]">Expertise</h2>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-foreground"
        >
          Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-600 italic">Stack.</span>
        </motion.h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-20">
        {skillsData.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 md:p-8 rounded-[2.5rem] border border-white/5 bg-zinc-900/40 backdrop-blur-3xl hover:border-brand/20 transition-all group shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/5">
              <div className="p-3 bg-white/5 rounded-xl text-brand group-hover:bg-brand group-hover:text-white transition-all">
                {group.icon}
              </div>
              <h4 className="text-xl font-black uppercase tracking-tight text-foreground">{group.category}</h4>
            </div>

            <div className="space-y-6">
              {group.items.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2.5">
                      <skill.icon size={16} style={{ color: skill.color }} />
                      <span className="text-xs font-black uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-all">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[9px] font-black text-muted-foreground/30 group-hover:text-brand transition-all">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-white/5 pt-12">
        <div className="relative overflow-hidden cursor-grab active:cursor-grabbing">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <motion.div
            ref={containerRef}
            style={{ x }}
            drag="x"
            dragElastic={0.05}
            onDragStart={() => setIsHovered(true)}
            onDragEnd={() => setIsHovered(false)}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="flex gap-16 items-center whitespace-nowrap w-max"
          >
            {[...secondarySkills, ...secondarySkills, ...secondarySkills, ...secondarySkills].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-muted-foreground/20 font-black text-xl uppercase tracking-[0.2em] hover:text-brand hover:scale-110 transition-all duration-500">
                <item.icon size={22} style={{ color: item.color }} className="opacity-50 hover:opacity-100 transition-opacity" />
                {item.name}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
