/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, Sparkles, Code2, Layers, Cpu, Globe2 } from 'lucide-react';
import { skillsData } from '../data';

// Skill to Project/Experience mapping for high interactivity
const skillUsageMap: Record<string, { label: string; details: string }[]> = {
  "Python": [
    { label: "BetaBot (AI Climbing)", details: "Built computer vision detection & optimal A* path planner" },
    { label: "Probabilistic F1", details: "Developed Monte Carlo simulation & Bayesian optimizer" },
    { label: "Spam Email Classifier", details: "Implemented Multinomial Naive Bayes from scratch in NumPy" },
    { label: "AWS AI/ML Internship", details: "Engineered high-accuracy classification ensemble pipelines" },
    { label: "HackerRank Orchestrate", details: "Built LLM-driven claims pipeline using Groq and LLaMA 4" },
    { label: "IMC Prosperity 4", details: "Designed EMA-driven mean-reversion trading algorithms" }
  ],
  "React": [
    { label: "Zoftable Work Experience", details: "Translated design specifications into highly responsive production pages" },
    { label: "Portfolio Website", details: "Engineered this responsive portfolio app using React 19 + motion" },
    { label: "Job Simulations", details: "Completed Skyscanner React development virtual tasks" }
  ],
  "TypeScript": [
    { label: "Zoftable Work Experience", details: "Maintained rigorous static type safety and shared interfaces" },
    { label: "Portfolio Website", details: "Engineered this responsive portfolio app using fully typed props" }
  ],
  "JavaScript": [
    { label: "Medical Tracker", details: "Integrated custom interactive charting and tracking utilities" },
    { label: "Zoftable Work Experience", details: "Developed accessible components matching DOM standards" }
  ],
  "C": [
    { label: "University of Bath", details: "Programmed low-level system designs and Arduino controller code" }
  ],
  "Java": [
    { label: "Medical Tracker", details: "Engineered a Java-Python bridge to handle Supabase DB requests" },
    { label: "Job Simulations", details: "Virtual Java unit testing and development simulations" }
  ],
  "SQL": [
    { label: "Medical Tracker", details: "Created 3NF normalized PostgreSQL schema designs and query sets" }
  ],
  "PostgreSQL": [
    { label: "Medical Tracker", details: "Structured robust relational databases via Supabase" }
  ],
  "Supabase": [
    { label: "Medical Tracker", details: "Created the data persistent backend layer and client proxy" }
  ],
  "scikit-learn": [
    { label: "AWS AI/ML Internship", details: "Ensembled models (decision trees, logistic regression, neural networks)" }
  ],
  "NumPy": [
    { label: "Spam Email Classifier", details: "Performed matrix maths and Laplace smoothed log-arithmetic" },
    { label: "Probabilistic F1", details: "Engineered fast vectorized tyre degradation decay simulations" }
  ],
  "Optuna": [
    { label: "Probabilistic F1", details: "Conducted thousands of Bayesian optimization parameter rollouts" },
    { label: "AWS AI/ML Internship", details: "Automated hyperparameter searches to boost classification accuracy by 24%" }
  ],
  "PyTorch": [
    { label: "BetaBot (AI Climbing)", details: "Leveraged neural layers and image classifications for wall processing" },
    { label: "AWS AI/ML Internship", details: "Virtual neural network design and model evaluations" }
  ],
  "FastAPI": [
    { label: "BetaBot (AI Climbing)", details: "Engineered highly responsive backend REST endpoints for holding images" }
  ],
  "Streamlit": [
    { label: "BetaBot (AI Climbing)", details: "Deployed interactive CV visualization dashboards" },
    { label: "Probabilistic F1", details: "Shipped analytics visualizers for real-time race simulations" }
  ],
  "Docker": [
    { label: "AWS Infrastructure", details: "Deployed scalable containerized model servers" }
  ],
  "AWS": [
    { label: "AWS AI/ML Internship", details: "Designed cloud-hosted data pipelines" },
    { label: "Job Simulations", details: "Completed AWS Elastic Beanstalk cloud architecture models" }
  ],
  "GDScript": [
    { label: "Bath Hack (Godot)", details: "Programmed neural racing agent logic with Genetic Algorithm pipelines" }
  ],
  "Godot": [
    { label: "Bath Hack (Godot)", details: "Built real-time visual physics-based simulator for autonomous vehicles" }
  ],
  "Haskell": [
    { label: "University of Bath", details: "Studied advanced functional programming principles and mathematical induction" }
  ],
  "REST APIs": [
    { label: "BetaBot (AI Climbing)", details: "Structured backend routing for computer vision services" }
  ],
  "Manim": [
    { label: "Spam Email Classifier", details: "Rendered mathematical visual animations explaining Bayes theorem" }
  ]
};

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>("Python");

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming Languages":
        return <Code2 className="w-5 h-5 text-stone-300" />;
      case "Frameworks & Libraries":
        return <Layers className="w-5 h-5 text-stone-300" />;
      case "Technologies & Cloud":
        return <Cpu className="w-5 h-5 text-stone-300" />;
      default:
        return <Globe2 className="w-5 h-5 text-stone-300" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-base font-semibold text-stone-300 tracking-wider uppercase">
            Technical Stack
          </h2>
          <p className="font-display text-3xl md:text-4xl font-extrabold text-white mt-2">
            Skills & Practical Application
          </p>
          <p className="font-sans text-stone-400 mt-4 text-base">
            Click on any highlighted skill in the matrix to inspect exactly where and how I have applied it in engineering real-world projects.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Skills Lists (Left 7 Columns) */}
          <div className="lg:col-span-7 space-y-8">
            {skillsData.map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0f0f0f]/40 border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/5 border border-white/10 rounded-lg">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => {
                    const hasMap = !!skillUsageMap[skill];
                    const isSelected = selectedSkill === skill;
                    return (
                      <button
                        key={skill}
                        onClick={() => hasMap && setSelectedSkill(isSelected ? null : skill)}
                        className={`px-4 py-2 text-sm rounded-xl font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                          isSelected
                            ? 'bg-white text-black shadow-lg shadow-black/40'
                            : hasMap
                            ? 'bg-[#0f0f0f] text-stone-300 hover:text-white hover:bg-white/5 border border-white/10'
                            : 'bg-transparent text-stone-600 border border-white/5 cursor-default'
                        }`}
                      >
                        <span>{skill}</span>
                        {hasMap && (
                          <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-black animate-ping' : 'bg-stone-400'}`} />
                        )}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Practical Application Panel (Right 5 Columns) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              layoutId="application-panel"
              className="bg-black/40 text-stone-300 rounded-2xl border border-white/10 p-6 shadow-xl relative overflow-hidden"
            >
              {/* Grid Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-stone-300" />
                    <span className="font-display font-bold text-stone-200">Impact Ledger</span>
                  </div>
                  {selectedSkill && (
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-white/10 border border-white/20 text-white">
                      Active: {selectedSkill}
                    </span>
                  )}
                </div>

                {selectedSkill ? (
                  <div className="space-y-6">
                    <div>
                      <p className="font-sans text-xs text-stone-400 uppercase tracking-wider">Skill Selected</p>
                      <h4 className="font-display text-2xl font-bold text-white mt-1">{selectedSkill}</h4>
                    </div>

                    <div className="space-y-4">
                      <p className="font-sans text-xs text-stone-400 uppercase tracking-wider">Demonstrated Work</p>
                      {skillUsageMap[selectedSkill]?.length > 0 ? (
                        <div className="space-y-3.5 max-h-[280px] overflow-y-auto pr-1">
                          {skillUsageMap[selectedSkill].map((usage, idx) => (
                            <div key={idx} className="p-3 bg-black/30 border border-white/10 rounded-xl space-y-1 hover:border-white/20 transition-colors">
                              <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-stone-300 shrink-0" />
                                <span className="font-display text-sm font-bold text-white">{usage.label}</span>
                              </div>
                              <p className="font-sans text-xs text-stone-400 pl-6 leading-relaxed">
                                {usage.details}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="p-4 bg-black/30 border border-white/10 rounded-xl flex items-center gap-2 text-sm text-stone-400">
                          <Sparkles className="w-4 h-4 text-stone-500" />
                          <span>Standard academic coursework implementation.</span>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="py-12 text-center text-stone-400 space-y-3">
                    <Sparkles className="w-8 h-8 text-stone-400 mx-auto animate-pulse" />
                    <p className="font-sans text-sm">Select any interactive skill in the categories on the left to review my practical experience.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
