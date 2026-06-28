/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Github, ExternalLink, X, ArrowUpRight, Award, Target, HelpCircle } from 'lucide-react';
import { projectsData } from '../data';
import { Project } from '../types';

export default function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'AI & ML', 'Full Stack'];

  // Filter projects based on category and search query
  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left max-w-2xl">
            <h2 className="font-display text-base font-semibold text-stone-300 tracking-wider uppercase">
              Portfolio
            </h2>
            <p className="font-display text-3xl md:text-4xl font-extrabold text-white mt-2">
              Featured Engineering Projects
            </p>
            <p className="font-sans text-stone-400 mt-4">
              Explore a curated gallery of high-impact applications, machine learning frameworks, and full-stack solutions I have built.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative max-w-sm w-full shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-4.5 h-4.5" />
            <input
              type="text"
              placeholder="Search projects or technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-[#0f0f0f]/50 hover:bg-[#141414]/50 focus:bg-black border border-white/10 rounded-2xl font-sans text-sm outline-none focus:ring-2 focus:ring-white/10 focus:border-white/20 transition-all text-white shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white p-0.5 rounded-full hover:bg-white/10"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-white/10 pb-4">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4.5 py-2 rounded-xl font-display text-sm font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white text-black shadow-sm'
                    : 'bg-[#0f0f0f] hover:bg-white/5 text-stone-300 hover:text-white border border-white/10'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-[#0f0f0f]/40 hover:bg-[#141414]/50 border border-white/10 hover:border-white/20 rounded-2xl p-6 flex flex-col justify-between shadow-sm cursor-pointer transition-all"
                >
                  <div className="space-y-4">
                    {/* Top Row: Year and Icon */}
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 text-xs font-mono font-semibold text-stone-300 bg-white/5 border border-white/10 rounded-lg">
                        {project.year}
                      </span>
                      <div className="flex items-center gap-1 text-stone-300 group-hover:translate-x-1 transition-transform">
                        <span className="font-display text-xs font-bold">Details</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Titles */}
                    <div>
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-stone-200 transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-sans text-xs font-semibold text-stone-400 uppercase tracking-wider mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Short Description */}
                    <p className="font-sans text-sm text-stone-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Impact Highlight */}
                    {project.impactHighlight && (
                      <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center gap-2 text-stone-200 text-xs font-semibold">
                        <Award className="w-4 h-4 text-stone-300 shrink-0" />
                        <span className="line-clamp-1">{project.impactHighlight}</span>
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-white/10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs font-semibold rounded bg-white/5 text-stone-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-white/10 rounded-2xl space-y-3">
            <HelpCircle className="w-10 h-10 text-stone-400 mx-auto" />
            <p className="font-sans text-stone-400">No projects found matching your search. Try searching for "Python" or "React".</p>
          </div>
        )}

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Blur Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative bg-[#0e0e0e] rounded-3xl shadow-2xl border border-white/15 w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col z-10"
              >
                {/* Header block with title */}
                <div className="p-6 md:p-8 border-b border-white/10 flex items-start justify-between bg-black/30">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 text-xs font-mono font-semibold text-white bg-white/10 border border-white/15 rounded">
                        {selectedProject.category}
                      </span>
                      <span className="text-xs font-mono text-stone-500">•</span>
                      <span className="text-xs font-mono text-stone-400">{selectedProject.year}</span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white mt-2">
                      {selectedProject.title}
                    </h3>
                    <p className="font-sans text-sm font-semibold text-stone-400 uppercase tracking-wider">
                      {selectedProject.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 text-stone-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Main scrollable body */}
                <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                  {/* Overview descriptive text */}
                  <div>
                    <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-2">Overview</h4>
                    <p className="font-sans text-stone-400 text-sm md:text-base leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Impact Highlight metrics */}
                  {selectedProject.impactHighlight && (
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-1">
                      <div className="flex items-center gap-2 text-stone-200 text-sm font-bold">
                        <Target className="w-4 h-4 text-stone-300" />
                        <span>Core Success Metric / Achievement</span>
                      </div>
                      <p className="font-sans text-xs md:text-sm text-stone-300 font-medium pl-6">
                        {selectedProject.impactHighlight}
                      </p>
                    </div>
                  )}

                  {/* Key Contributions checklist */}
                  <div className="space-y-3">
                    <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">Technical Highlights</h4>
                    <ul className="space-y-3 pl-1">
                      {selectedProject.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-stone-400 text-sm md:text-base leading-relaxed">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies utilized list */}
                  <div className="space-y-2 pt-2">
                    <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-semibold rounded-lg bg-white/5 border border-white/10 text-stone-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="p-6 border-t border-white/10 flex items-center justify-end gap-3 bg-black/30">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-white hover:bg-stone-200 text-black rounded-xl text-sm font-semibold transition-colors flex items-center gap-2 shadow-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-[#222] hover:bg-[#333] border border-white/10 text-white rounded-xl text-sm font-semibold transition-colors flex items-center gap-2 shadow-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 bg-transparent border border-white/10 text-stone-300 hover:bg-white/5 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
