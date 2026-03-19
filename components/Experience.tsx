// components/Experience.tsx
"use client";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  ExternalLink,
  Calendar,
  Building2
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const experiences = [
  {
    date: "2025",
    title: "Oracle Certified AI Associate",
    company: "Oracle University",
    description: "Earned the Oracle Cloud Infrastructure 2025 AI Foundations Associate credential. Gained deep expertise in cloud-based AI concepts, ML workflows, and model deployment strategies.",
    type: "Certification",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20"
  },
  {
    date: "2025",
    title: "HerCommerce Hackathon Participant",
    company: "ALX & iceaddis",
    description: "Collaborated in a high-pressure team environment to develop innovative digital commerce solutions for women founders. Focused on rapid prototyping and user-centric design.",
    type: "Award",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20"
  },
  {
    date: "2023 - Present",
    title: "Software Engineering (AI Stream)",
    company: "Addis Ababa University (CTBE)",
    description: "Specializing in Machine Learning, Robotics, and Data Engineering. Leading development on full-stack projects including the Cross-Country Bus Service and AAU Course App.",
    type: "Education",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    date: "2026",
    title: "Engineering Trainee",
    company: "10 Academy",
    description: "Intensive 12-week project-based training specializing in Data Engineering (ETL/ELT, dbt, DVC), Machine Learning (MLOps, MLFlow), and Generative AI (RAG, LLM fine-tuning). Mastered end-to-end deployment using Docker and CI/CD, with advanced proficiency in Python, SQL, and Javascript.",
    type: "Training",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-blue-500/20"
  }
];

const certificates = [
  {
    title: "Kifiya AI Mastery Training Program (with distinction)",
    issuer: "10 Academy",
    date: "Mar 2026",
    image: "/certificates/10-academy.png",
    link: "https://drive.google.com/file/d/1Dm0tXUtgw94sGfjIN44RqfEgGiKnNw69/view?usp=sharing"
  },
  {
    title: "Oracle Certified Foundations Associate",
    issuer: "Oracle University",
    date: "Aug 2025",
    image: "/certificates/oracle-foundations.png",
    link: "https://drive.google.com/file/d/10IEmnMu752Kc2IPZuFNrV4YXcT49igq3/view?usp=sharing"
  },
  {
    title: "Programming Fundamentals",
    issuer: "Udacity",
    date: "Jun 2025",
    image: "/certificates/udacity-programming.png",
    link: "https://drive.google.com/file/d/1aZGe2QMqz0GSuEBFvrpzs54mUmLeeE-I/view?usp=sharing"
  },
  {
    title: "HerCommerce Hackathon",
    issuer: "ALX Ventures & iceaddis",
    date: "Participant",
    image: "/certificates/hercommerce-hackathon.png",
    link: "https://drive.google.com/file/d/1y55XNFCPBWgjB28masZMeEGF7O9Oxj_V/view?usp=sharing"
  },
  {
    title: "Data Annotation",
    issuer: "Share eLearning",
    date: "Oct 2025",
    image: "/certificates/annotate-plus.png",
    link: "https://drive.google.com/file/d/1Jnb6EXfQuv75VUu432t2e9fUhwY6uOhg/view?usp=sharing"
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 relative overflow-hidden" id="experience" ref={containerRef}>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-brand/5 blur-[120px] -z-10" />

      {/* Section Header */}
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="h-px w-6 bg-brand"></span>
          <h2 className="text-[9px] font-black text-brand uppercase tracking-[0.4em]">The Journey</h2>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-foreground leading-[1.0]"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-600 italic">Path.</span>
        </motion.h3>
      </div>

      <div className="grid lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-16">

        {/* Sticky Sidebar */}
        <div className="hidden lg:block relative">
          <div className="sticky top-28 space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              A professional timeline mapping my evolution through academic rigorous training and industry certifications.
            </p>
            <div className="p-8 rounded-[2.5rem] bg-zinc-900/50 border border-white/5 backdrop-blur-3xl shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-brand/10 text-brand">
                  <Briefcase size={20} />
                </div>
                <div>
                  <p className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.2em]">Status</p>
                  <p className="text-lg font-black text-white uppercase tracking-tight">Open to Work</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <GraduationCap size={18} className="text-brand/50" />
                  <span className="text-[11px] font-bold uppercase tracking-widest leading-none">SE Student @ AAU</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar size={18} className="text-brand/50" />
                  <span className="text-[11px] font-bold uppercase tracking-widest leading-none">Internship Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="relative pl-6 md:pl-12 border-l border-white/10 space-y-12">
          {experiences.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="absolute -left-[31px] md:-left-[55px] top-0 p-1 bg-zinc-950 border border-white/10 rounded-full group-hover:border-brand/50 transition-colors duration-500">
                <div className={`w-2.5 h-2.5 rounded-full ${item.bg.replace('/10', '')} shadow-[0_0_10px_currentColor] transition-all duration-500 group-hover:scale-125`} />
              </div>

              <div className="relative p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/80 hover:border-brand/30 transition-all duration-500 shadow-2xl group-hover:translate-x-2">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 pb-6 border-b border-white/5">
                  <div className="space-y-3">
                    <span className={`inline-flex px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] ${item.bg} ${item.color} ${item.border} border`}>
                      {item.type}
                    </span>
                    <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight group-hover:text-brand transition-colors leading-none">{item.title}</h4>
                    <div className="flex items-center gap-2 text-muted-foreground font-bold">
                      <Building2 size={16} className="text-brand/50" />
                      <span className="text-[10px] uppercase tracking-widest">{item.company}</span>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <span className="text-[9px] font-black text-muted-foreground/30 bg-white/5 py-1.5 px-4 rounded-full border border-white/5 uppercase tracking-[0.3em]">
                      {item.date}
                    </span>
                  </div>
                </div>

                <p className="text-base text-muted-foreground leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="mt-32">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter">
            Credentials
          </h3>
          <span className="hidden md:block h-px flex-1 bg-white/10 ml-10"></span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, idx) => (
            <Link href={cert.link} key={idx} target="_blank" className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900 shadow-2xl cursor-pointer"
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />

                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/90 to-transparent pt-24 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="relative z-10">
                    <div className="flex justify-between items-end">
                      <div className="space-y-1.5">
                        <p className="text-brand font-black uppercase tracking-[0.3em] text-[9px]">
                          {cert.issuer}
                        </p>
                        <h4 className="text-xl font-black text-white uppercase tracking-tight leading-none">
                          {cert.title}
                        </h4>
                        <p className="text-zinc-500 text-[9px] font-bold uppercase tracking-widest pt-1">{cert.date}</p>
                      </div>

                      <div className="p-3 rounded-full bg-white/5 backdrop-blur-3xl text-white border border-white/10 group-hover:bg-brand group-hover:border-brand transition-all duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                        <ExternalLink size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}