// components/Projects.tsx
"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Gamepad2, ArrowRight, Landmark, Bus, GraduationCap, Sprout } from 'lucide-react';
import {
  SiFlutter, SiDart, SiFirebase,
  SiReact, SiNodedotjs, SiExpress, SiMongodb,
  SiGo, SiOpengl,
  SiTailwindcss, SiSanity, SiTypescript,
  SiHtml5, SiCss3, SiJavascript
} from 'react-icons/si';

const projects = [
  {
    title: "SACCO Management",
    category: "FinTech Solution",
    tech: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Firebase", icon: SiFirebase }
    ],
    description: "A specialized Saving and Credit Cooperation system designed to manage cooperative financial workflows with high reliability and secure transactions.",
    icon: <Landmark size={20} className="text-emerald-500" />,
    github: "https://github.com/betsinat-amare/SACCO-Saving-and-Credit-Cooperation-",
    featured: true
  },
  {
    title: "Farmer Hub",
    category: "Agri-Tech Platform",
    tech: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb }
    ],
    description: "A comprehensive digital marketplace connecting farmers directly with consumers, featuring real-time pricing and inventory.",
    icon: <Sprout size={20} className="text-green-500" />,
    github: "https://github.com/Fenet-Ab/farmer-hub",
    demo: "https://farmerfrontend.vercel.app/"
  },
  {
    title: "GUI Dungeon Game",
    category: "Game Development",
    tech: [
      { name: "Go", icon: SiGo },
      { name: "OpenGL", icon: SiOpengl },
      { name: "Algorithms", icon: Code2 }
    ],
    description: "High-performance graphical dungeon crawler built with Go, demonstrating efficient memory management and real-time rendering.",
    icon: <Gamepad2 size={20} className="text-purple-500" />,
    github: "https://github.com/betsinat-amare/GUI_Based_Dungeon_Game"
  },
  {
    title: "SITplc System",
    category: "Corporate Website",
    tech: [
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Sanity", icon: SiSanity },
      { name: "TypeScript", icon: SiTypescript }
    ],
    description: "A professional corporate website developed for Sabolla International Trading PLC, featuring a modern tender management system and dynamic content.",
    icon: <Code2 size={20} className="text-brand" />,
    github: "https://github.com/betsinat-amare/SITplc",
    featured: true
  },
  {
    title: "Course Add/Drop App",
    category: "Academic Tool",
    tech: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Firebase", icon: SiFirebase }
    ],
    description: "A mobile application streamlining the university course registration process, allowing students to easily add or drop courses.",
    icon: <GraduationCap size={20} className="text-indigo-500" />,
    github: "https://github.com/betsinat-amare/Course_add_and_drop_app_flutter",
    demo: "#",
    featured: true
  },
  {
    title: "Bus Transport Service",
    category: "Logistics Platform",
    tech: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Node.js", icon: SiNodedotjs }
    ],
    description: "A dedicated website for inter-city bus ticket booking, featuring secure seat reservation and automated scheduling systems.",
    icon: <Bus size={20} className="text-rose-500" />,
    github: "https://github.com/betsinat-amare/Cross_country_bus_transport_service_2024_25"
  }
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 relative overflow-hidden" id="projects">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] -z-10" />

      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-6 bg-brand"></span>
            <h2 className="text-[9px] font-black text-brand uppercase tracking-[0.4em]">Portfolio</h2>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-foreground leading-[1.0]"
          >
            Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-600 italic">Work.</span>
          </motion.h3>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Link href="https://github.com/betsinat-amare" target="_blank" className="group flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-brand transition-colors">
            Explore Repositories
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`group relative bg-zinc-900/40 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-8 md:p-9 hover:border-brand/30 hover:bg-zinc-900/80 transition-all duration-500 flex flex-col shadow-2xl
              ${(idx === 0 || idx === 3) ? 'md:col-span-2' : ''}
              ${(idx === 4) ? 'lg:col-span-2' : ''}
            `}
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-8 flex justify-between items-start">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-brand/10 transition-colors duration-500">
                  {project.icon}
                </div>
                <div className="flex gap-2">
                  <Link href={project.github} target="_blank" className="p-2.5 bg-white/5 rounded-full text-muted-foreground hover:bg-brand hover:text-white transition-all duration-300 hover:scale-110">
                    <Github size={18} />
                  </Link>
                  {project.demo && project.demo !== '#' && (
                    <Link href={project.demo} target="_blank" className="p-2.5 bg-white/5 rounded-full text-muted-foreground hover:bg-brand hover:text-white transition-all duration-300 hover:scale-110">
                      <ExternalLink size={18} />
                    </Link>
                  )}
                </div>
              </div>

              <div className="flex-1">
                <p className="text-[9px] font-black text-brand uppercase tracking-[0.3em] mb-3">{project.category}</p>
                <h4 className={`font-black text-foreground mb-4 uppercase tracking-tight leading-[1.1] transition-colors group-hover:text-brand
                  ${(idx === 0 || idx === 3 || idx === 4) ? 'text-2xl md:text-3xl' : 'text-xl'}
                `}>
                  {project.title}
                </h4>
                <p className={`text-muted-foreground leading-relaxed mb-6 font-light
                  ${(idx === 0 || idx === 3 || idx === 4) ? 'text-base max-w-xl' : 'text-sm line-clamp-3'}
                `}>
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 mt-auto">
                {project.tech.map((t, i) => (
                  <div key={i} className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/5 group-hover:border-brand/20 transition-all duration-500">
                    {t.icon && <t.icon size={12} className="text-muted-foreground group-hover:text-brand transition-colors" />}
                    <span className="text-[9px] font-black text-muted-foreground uppercase tracking-widest group-hover:text-foreground">
                      {t.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}