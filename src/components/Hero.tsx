/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MouseEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code, Github, Linkedin, Terminal, Sparkles } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  const handleScrollTo = (e: MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden grid-pattern bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-indigo-900/10 rounded-full blur-3xl -z-10 animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-stone-900/20 rounded-full blur-3xl -z-10 animate-pulse duration-[10000ms]" />

      <div className="max-w-7xl mx-auto px-6 w-full py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Copy & Links */}
        <div className="lg:col-span-7 space-y-8 text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-stone-200 text-xs font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5 text-stone-300 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Active Candidate for Professional Placements & Internships</span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
            >
              Hi, I'm <span className="text-white relative inline-block">
                Hollis Lam
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-white/10 -z-10 rounded-full" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-xl md:text-2xl font-semibold text-stone-200"
            >
              Computer Science student @ University of Bath
            </motion.p>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-base md:text-lg text-stone-400 leading-relaxed max-w-2xl"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Quick Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 py-6 border-y border-white/10 max-w-xl"
          >
            <div>
              <p className="font-display text-2xl font-bold text-white">Ex-AWS</p>
              <p className="font-sans text-xs text-stone-400 mt-1">AI & ML Intern</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-white">4+</p>
              <p className="font-sans text-xs text-stone-400 mt-1">AI/ML & Dev Projects</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="px-6 py-3 bg-white hover:bg-stone-200 text-black rounded-xl font-medium shadow-sm transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="px-6 py-3 bg-transparent hover:bg-white/5 text-white border border-white/10 rounded-xl font-medium transition-colors cursor-pointer"
            >
              Get In Touch
            </button>
            <div className="flex items-center gap-2 ml-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-stone-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-stone-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Code Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 h-full flex items-center justify-center"
        >
          <div className="w-full max-w-md bg-stone-950/60 rounded-2xl shadow-2xl border border-white/10 p-6 font-mono text-left relative overflow-hidden">
            {/* Glossy overlay */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/2 to-transparent pointer-events-none" />

            {/* Window controls */}
            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#333] border border-white/10" />
                <span className="w-3 h-3 rounded-full bg-[#333] border border-white/10" />
                <span className="w-3 h-3 rounded-full bg-[#333] border border-white/10" />
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-400">
                <Terminal className="w-3.5 h-3.5 text-stone-400" />
                <span>hollis_lam.ts</span>
              </div>
            </div>

            {/* Code Content */}
            <div className="text-xs md:text-sm space-y-2 select-all leading-relaxed">
              <p className="text-pink-400">import <span className="text-cyan-400">{"{ Engineer }"}</span> from <span className="text-emerald-400">"bath-university"</span>;</p>
              <br />
              <p className="text-indigo-400"><span className="text-pink-400">const</span> developer <span className="text-slate-300">=</span> <span className="text-pink-400">new</span> <span className="text-yellow-300">Engineer</span>({"{"}</p>
              <p className="pl-4 text-slate-400">name: <span className="text-emerald-400">"Hollis Lam"</span>,</p>
              <p className="pl-4 text-slate-400">academicYear: <span className="text-amber-400">2</span>,</p>
              <p className="pl-4 text-slate-400">degree: <span className="text-emerald-400">"BSc Computer Science"</span>,</p>
              <p className="pl-4 text-slate-400">coreFocus: [<span className="text-emerald-400">"AI/ML"</span>, <span className="text-emerald-400">"Frontend Engineering"</span>],</p>
              <p className="pl-4 text-slate-400">experience: {"{"}</p>
              <p className="pl-8 text-slate-400">frontend: <span className="text-emerald-400">"Zoftable"</span>,</p>
              <p className="pl-8 text-slate-400">machineLearning: <span className="text-emerald-400">"AWS Internship"</span></p>
              <p className="pl-4 text-slate-400">{"}"},</p>
              <p className="pl-4 text-slate-400">currentStatus: <span className="text-amber-400">"Seeking Placement (2027/28)"</span></p>
              <p className="text-indigo-400">{"});"}</p>
              <br />
              <p className="text-slate-500">// Run diagnostics...</p>
              <p className="text-emerald-400">{"$ developer.buildReliableCode()"}</p>
              <p className="text-indigo-300">{"✔ Compiling successfully... [0ms]"}</p>
              <p className="text-indigo-300">{"✔ All unit tests passed!"}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
