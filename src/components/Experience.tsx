/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, BookOpen, Trophy, Calendar, MapPin, CheckCircle2, ChevronRight, Github } from 'lucide-react';
import { workExperienceData, educationData, extracurricularData } from '../data';

type TimelineTab = 'work' | 'education' | 'extracurricular';

export default function Experience() {
  const [activeTab, setActiveTab] = useState<TimelineTab>('work');

  const tabs = [
    { id: 'work', label: 'Work Experience', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'education', label: 'Education', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'extracurricular', label: 'Extracurriculars', icon: <Trophy className="w-4 h-4" /> }
  ] as const;

  return (
    <section id="experience" className="py-24 bg-[#0a0a0a] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-base font-semibold text-stone-300 tracking-wider uppercase">
            Timeline
          </h2>
          <p className="font-display text-3xl md:text-4xl font-extrabold text-white mt-2">
            Experience & Milestones
          </p>
          <p className="font-sans text-stone-400 mt-4">
            A comprehensive record of professional frontend development, machine learning engineering, and competitive achievements.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-12">
          <div className="flex p-1 bg-[#0f0f0f]/40 backdrop-blur rounded-2xl border border-white/10 max-w-lg w-full">
            {tabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-display text-sm font-bold transition-all relative cursor-pointer ${
                    isSelected ? 'text-white' : 'text-stone-400 hover:text-white'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="active-tab-indicator"
                      className="absolute inset-0 bg-white/10 rounded-xl border border-white/20"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {tab.icon}
                    <span className="hidden sm:inline">{tab.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Content Timeline */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-8 relative"
            >
              {/* Timeline Center Line (Left-aligned on mobile, centered optionally - left is cleaner) */}
              <div className="absolute left-6 top-4 bottom-4 w-[2px] bg-white/10" />

              {/* Work Experience */}
              {activeTab === 'work' &&
                workExperienceData.map((exp, index) => (
                  <div key={exp.id} className="relative pl-14 group">
                    {/* Timeline Node */}
                    <div className="absolute left-[17px] top-1.5 w-6 h-6 rounded-full border-4 border-[#0a0a0a] bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <Briefcase className="w-2.5 h-2.5 text-black" />
                    </div>

                    {/* Timeline Card */}
                    <div className="bg-[#0f0f0f]/40 border border-white/10 rounded-2xl p-6 shadow-sm hover:border-white/20 transition-all">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="font-display text-xl font-bold text-white">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 text-stone-200 font-display font-semibold mt-1">
                            <span>{exp.company}</span>
                            <span className="w-1 h-1 rounded-full bg-white/20" />
                            <span className="flex items-center gap-1 text-stone-400 font-sans text-sm font-medium">
                              <MapPin className="w-3.5 h-3.5" />
                              {exp.location}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full font-mono text-xs font-semibold text-stone-300 border border-white/10">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-5">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3 text-stone-400 text-sm md:text-base leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-stone-300 shrink-0 mt-1" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                        {exp.skills.map((s) => (
                          <span key={s} className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white/5 border border-white/10 text-stone-300">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

              {/* Education */}
              {activeTab === 'education' &&
                educationData.map((edu) => (
                  <div key={edu.id} className="relative pl-14 group">
                    {/* Timeline Node */}
                    <div className="absolute left-[17px] top-1.5 w-6 h-6 rounded-full border-4 border-[#0a0a0a] bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <BookOpen className="w-2.5 h-2.5 text-black" />
                    </div>

                    <div className="bg-[#0f0f0f]/40 border border-white/10 rounded-2xl p-6 shadow-sm hover:border-white/20 transition-all">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="font-display text-xl font-bold text-white">
                            {edu.institution}
                          </h3>
                          <p className="text-stone-200 font-display font-semibold mt-1">
                            {edu.degree}
                          </p>
                        </div>

                        <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full font-mono text-xs font-semibold text-stone-300 border border-white/10">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {edu.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3 text-stone-400 text-sm md:text-base leading-relaxed">
                            <ChevronRight className="w-4 h-4 text-stone-400 shrink-0 mt-1" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}

              {/* Extracurriculars */}
              {activeTab === 'extracurricular' &&
                extracurricularData.map((item) => (
                  <div key={item.id} className="relative pl-14 group">
                    {/* Timeline Node */}
                    <div className="absolute left-[17px] top-1.5 w-6 h-6 rounded-full border-4 border-[#0a0a0a] bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <Trophy className="w-2.5 h-2.5 text-black" />
                    </div>

                    <div className="bg-[#0f0f0f]/40 border border-white/10 rounded-2xl p-6 shadow-sm hover:border-white/20 transition-all">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                            <span>{item.title}</span>
                            {item.githubUrl && (
                              <a
                                href={item.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex p-1 bg-white/5 hover:bg-white/15 text-stone-400 hover:text-white rounded-lg border border-white/10 transition-all cursor-pointer"
                                title="View Repository"
                              >
                                <Github className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </h3>
                          {item.role && (
                            <p className="text-stone-300 font-display text-sm font-semibold mt-0.5">
                              {item.role}
                            </p>
                          )}
                        </div>

                        <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full font-mono text-xs font-semibold text-stone-300 border border-white/10">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.duration}</span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-4">
                        {item.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3 text-stone-400 text-sm md:text-base leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-stone-300 shrink-0 mt-1" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                        {item.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 text-xs font-semibold rounded bg-white/5 text-stone-300 border border-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
