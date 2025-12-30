// components/Contact.tsx
"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { SiTelegram, SiLeetcode, SiCodeforces } from 'react-icons/si';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('pending');
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mlgevjol", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.errors?.[0]?.message || "Something went wrong. Please try again.");
        setStatus('error');
      }
    } catch (err) {
      setErrorMessage("Network error. Please check your connection.");
      setStatus('error');
    }
  };

  const socialLinks = [
    { icon: <Github size={18} />, href: "https://github.com/betsinat-amare", label: "GitHub" },
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/betsinat-amare/", label: "LinkedIn" },
    { icon: <SiTelegram size={18} />, href: "https://t.me/Coziyam", label: "Telegram" },
    { icon: <SiLeetcode size={18} />, href: "https://leetcode.com/u/betsinat_amare/", label: "LeetCode" },
    { icon: <SiCodeforces size={18} />, href: "https://codeforces.com/profile/Betsinat_Amare", label: "CodeForces" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20" id="contact">
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="h-px w-6 bg-brand"></span>
          <h2 className="text-[9px] font-black text-brand uppercase tracking-[0.4em]">Get In Touch</h2>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-foreground leading-[1.0]"
        >
          Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-600 italic">Inquiry.</span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg leading-relaxed max-w-xl mt-6 font-light"
        >
          Currently looking for software engineering internships and collaborative opportunities in <span className="text-foreground font-medium">AI</span>, <span className="text-foreground font-medium">Data Science</span>, and <span className="text-foreground font-medium">Full Stack</span> development.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-3xl shadow-2xl space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-5 group">
                <div className="p-3 rounded-xl bg-brand/10 text-brand group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest mb-0.5">Email</p>
                  <p className="text-base font-bold text-white tracking-tight">amarebetsinat@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest mb-0.5">Phone</p>
                  <p className="text-base font-bold text-white tracking-tight">+251 953 39 21 18</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest mb-0.5">Location</p>
                  <p className="text-base font-bold text-white tracking-tight">King George VI st, Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5">
              <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest mb-4">Social Profiles</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    target="_blank"
                    className="p-3.5 bg-white/5 rounded-xl text-muted-foreground hover:text-white hover:bg-brand transition-all duration-300 hover:scale-110 border border-white/5"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="lg:col-span-7">
          <div className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-3xl shadow-2xl h-full flex flex-col">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center text-center py-12 h-full"
                >
                  <div className="p-5 bg-emerald-500/10 rounded-full text-emerald-500 mb-6 border border-emerald-500/20">
                    <CheckCircle2 size={48} />
                  </div>
                  <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-3">Message Sent!</h4>
                  <p className="text-muted-foreground max-w-sm font-light text-base mb-8">
                    Thank you for reaching out. I have received your message and will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-[9px] font-black uppercase tracking-[0.3em] text-brand hover:text-white border border-brand/20 hover:bg-brand px-7 py-3 rounded-xl transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  {/* Honeypot & Formspree Configuration */}
                  <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                  <input type="hidden" name="_subject" value="New Portfolio Message" />

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black text-muted-foreground uppercase tracking-widest ml-3">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        disabled={status === 'pending'}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:border-brand/50 transition-all font-medium placeholder:text-white/20 text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black text-muted-foreground uppercase tracking-widest ml-3">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        disabled={status === 'pending'}
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:border-brand/50 transition-all font-medium placeholder:text-white/20 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-muted-foreground uppercase tracking-widest ml-3">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      disabled={status === 'pending'}
                      placeholder="Internship Inquiry"
                      className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:border-brand/50 transition-all font-medium placeholder:text-white/20 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-muted-foreground uppercase tracking-widest ml-3">Message</label>
                    <textarea
                      name="message"
                      required
                      disabled={status === 'pending'}
                      rows={4}
                      placeholder="Detailed message regarding your technical requirements..."
                      className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:border-brand/50 transition-all font-medium resize-none placeholder:text-white/20 text-sm"
                    />
                  </div>

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-[11px]"
                    >
                      <AlertCircle size={14} />
                      {errorMessage}
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'pending'}
                    className="w-full bg-brand text-white py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 hover:bg-brand/90 transition-all disabled:opacity-50 group hover:shadow-xl hover:shadow-brand/20"
                  >
                    {status === 'pending' ? (
                      <>
                        <Loader2 className="animate-spin" size={16} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}